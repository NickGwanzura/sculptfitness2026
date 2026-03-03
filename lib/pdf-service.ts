
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export interface AssessmentResult {
  primaryService: string;
  secondaryService?: string;
  rationale: string[];
  weeklyPlan: string;
  readinessLevel: 'Starter' | 'Committed' | 'High Commitment';
  score: number;
}

export interface LeadReportData {
  name: string;
  phone: string;
  email?: string;
  responses: Record<string, string | string[]>;
  result: AssessmentResult;
  timestamp: string;
}

export async function generateAssessmentPDF(lead: LeadReportData): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const colors = {
    copper: rgb(0.75, 0.48, 0.34),
    stone: rgb(0.98, 0.97, 0.96),
    dark: rgb(0.1, 0.1, 0.1),
    gray: rgb(0.5, 0.5, 0.5),
    divider: rgb(0.9, 0.9, 0.9),
  };

  let y = height - 60;
  const margin = 50;
  const contentWidth = width - (margin * 2);

  // --- HEADER SECTION ---
  try {
    const logoUrl = '/assets/logos/sculpt-logo-colored.png';
    const logoRes = await fetch(logoUrl);
    if (!logoRes.ok) throw new Error('Logo fetch failed');
    const logoBytes = await logoRes.arrayBuffer();
    const logoImage = await pdfDoc.embedPng(logoBytes);

    // Scale logo appropriately (enlarged)
    const logoDims = logoImage.scaleToFit(380, 55);
    // Draw logo centered
    const logoX = (width - logoDims.width) / 2;
    page.drawImage(logoImage, {
      x: logoX,
      y: y - logoDims.height + 22,
      width: logoDims.width,
      height: logoDims.height,
    });
  } catch (error) {
    console.warn('Could not load logo for PDF, falling back to text:', error);
    const textWidth = fontBold.widthOfTextAtSize('SCULPT', 22);
    page.drawText('SCULPT', { x: (width - textWidth) / 2, y, size: 22, font: fontBold, color: colors.copper });
  }

  // Adjust Y down to accommodate larger centered logo
  y -= 40;

  page.drawText('YOUR WELLNESS PLAN', { x: margin, y: y, size: 9, font: fontRegular, color: colors.gray, characterSpacing: 2 });
  page.drawText(new Date(lead.timestamp).toLocaleDateString().toUpperCase(), { x: width - margin - 80, y, size: 9, font: fontRegular, color: colors.gray });

  y -= 50;
  page.drawLine({ start: { x: margin, y }, end: { x: width - margin, y }, thickness: 0.5, color: colors.divider });

  // --- CLIENT PROFILE BLOCK (TINTED) ---
  y -= 40;
  page.drawRectangle({ x: margin, y: y - 75, width: contentWidth, height: 85, color: colors.stone });

  let py = y - 20;
  page.drawText('YOUR SUMMARY', { x: margin + 15, y: py + 5, size: 8, font: fontBold, color: colors.copper, characterSpacing: 1 });
  page.drawText(lead.name.toUpperCase(), { x: margin + 15, y: py - 15, size: 14, font: fontBold });
  page.drawText(`${lead.phone}  |  ${lead.email || 'NO EMAIL ON FILE'}`, { x: margin + 15, y: py - 32, size: 9, font: fontRegular, color: colors.gray });

  // Readiness Badge
  const badgeW = 100;
  page.drawRectangle({ x: width - margin - badgeW - 15, y: py - 15, width: badgeW, height: 22, color: colors.copper, opacity: 0.1 });
  page.drawText(lead.result.readinessLevel.toUpperCase(), {
    x: width - margin - badgeW + 2,
    y: py - 8,
    size: 7,
    font: fontBold,
    color: colors.copper
  });

  y -= 110;

  // --- RESULTS SUMMARY SECTION ---
  page.drawText('WHAT YOU TOLD US', { x: margin, y, size: 10, font: fontBold, color: colors.dark });
  y -= 25;

  const drawMetric = (label: string, value: string, x: number) => {
    page.drawText(label, { x, y, size: 7, font: fontBold, color: colors.gray, characterSpacing: 1 });
    page.drawText(value, { x, y: y - 14, size: 11, font: fontRegular, color: colors.dark });
  };

  drawMetric('YOUR MAIN GOAL', lead.responses.goal.toString().toUpperCase(), margin);
  drawMetric('TRAINING DAYS', `${lead.responses.daysPerWeek} DAYS / WEEK`.toUpperCase(), margin + 160);
  drawMetric('LOCATION', lead.responses.location.toString().toUpperCase(), margin + 320);

  y -= 50;

  // --- RECOMMENDED SERVICE CARD ---
  page.drawText('OUR RECOMMENDATION', { x: margin, y, size: 10, font: fontBold, color: colors.dark });
  y -= 30;

  page.drawRectangle({ x: margin, y: y - 80, width: contentWidth, height: 90, color: colors.stone, borderColor: colors.copper, borderWidth: 0.5 });
  page.drawText(lead.result.primaryService.toUpperCase(), { x: margin + 20, y: y - 20, size: 16, font: fontBold, color: colors.dark });

  if (lead.result.secondaryService) {
    page.drawText(`+ ALSO RECOMMENDED: ${lead.result.secondaryService.toUpperCase()}`, { x: margin + 20, y: y - 38, size: 9, font: fontItalic, color: colors.copper });
  }

  page.drawText(`SUGGESTED WEEKLY PLAN: ${lead.result.weeklyPlan.toUpperCase()}`, { x: margin + 20, y: y - 65, size: 10, font: fontRegular, color: colors.gray });

  y -= 120;

  // --- RATIONALE ---
  const drawSection = (title: string, items: string[]) => {
    page.drawText(title, { x: margin, y, size: 10, font: fontBold, color: colors.dark });
    y -= 25;
    items.forEach(item => {
      page.drawCircle({ x: margin + 5, y: y + 3, size: 2, color: colors.copper });
      page.drawText(item, { x: margin + 15, y, size: 9, font: fontRegular, color: colors.dark });
      y -= 16;
    });
    y -= 20;
  };

  drawSection('WHY THIS SUITS YOU', lead.result.rationale);

  const constraintNotes = [];
  if (lead.responses.injuries !== 'No' && lead.responses.injuries !== 'None') {
    constraintNotes.push(`We noticed you mentioned: ${lead.responses.injuries}`);
    constraintNotes.push('We will take extra care to keep you safe and comfortable.');
  } else {
    constraintNotes.push('No physical concerns mentioned.');
  }
  drawSection('THINGS WE WILL FOCUS ON', constraintNotes);

  // --- FOOTER & CTA ---
  y = 80;
  page.drawLine({ start: { x: margin, y }, end: { x: width - margin, y }, thickness: 0.5, color: colors.divider });
  y -= 25;
  page.drawText('NEXT STEP: ATTACH THIS PDF TO YOUR WHATSAPP MESSAGE SO WE CAN TALK ABOUT YOUR START DATE.', { x: margin, y, size: 8, font: fontBold, color: colors.copper, characterSpacing: 1 });

  y -= 15;
  page.drawText('This report is for your information. We will confirm everything during your first private session.', {
    x: margin,
    y: 30,
    size: 7,
    font: fontItalic,
    color: colors.gray,
  });

  return await pdfDoc.save();
}
