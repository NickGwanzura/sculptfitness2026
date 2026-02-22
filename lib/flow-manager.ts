
import { generateAssessmentPDF, LeadReportData } from './pdf-service';

export interface Lead extends LeadReportData {}

const WHATSAPP_NUMBER = '263778715908';

export const buildWhatsAppLink = (lead: Lead, filename: string): string => {
  const baseMsg = `Hi, I completed the assessment.\n\n*Name:* ${lead.name}\n*Goal:* ${lead.responses.goal}\n*Days per week:* ${lead.responses.daysPerWeek}\n*Recommended plan:* ${lead.result.primaryService}\n\nI’m attaching my PDF report now.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(baseMsg)}`;
};

export const downloadPdf = (bytes: Uint8Array, filename: string): void => {
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const saveLeadToStorage = (lead: Lead): void => {
  localStorage.setItem('sculpt_current_lead', JSON.stringify(lead));
};

export const loadLeadFromStorage = (): Lead | null => {
  const data = localStorage.getItem('sculpt_current_lead');
  return data ? JSON.parse(data) : null;
};

export const copyToClipboard = async (text: string): Promise<void> => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  } catch (err) {
    console.error('Failed to copy', err);
  }
};

export const executeLeadFlow = async (
  lead: Lead, 
  onStatusUpdate: (status: 'generating' | 'downloaded' | 'opening' | 'blocked') => void
): Promise<void> => {
  const filename = `SCULPT_Report_${lead.name.replace(/\s+/g, '_')}.pdf`;
  
  try {
    onStatusUpdate('generating');
    const bytes = await generateAssessmentPDF(lead);
    
    downloadPdf(bytes, filename);
    saveLeadToStorage(lead);
    onStatusUpdate('downloaded');

    await new Promise(r => setTimeout(r, 1200));

    onStatusUpdate('opening');
    const waLink = buildWhatsAppLink(lead, filename);
    const win = window.open(waLink, '_blank');
    
    if (!win || win.closed || typeof win.closed === 'undefined') {
      onStatusUpdate('blocked');
    }
  } catch (error) {
    console.error('Lead flow failed', error);
    onStatusUpdate('idle' as any);
  }
};
