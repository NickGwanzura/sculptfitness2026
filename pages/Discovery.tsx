
import React, { useState, useEffect } from 'react';
import QuizStepper, { QuizData } from '../components/QuizStepper';
import { LeadReportData, AssessmentResult } from '../lib/pdf-service';
import {
  MessageCircle, Download, Copy, Check, ExternalLink,
  Sparkles, FileText, X, RefreshCcw, HelpCircle, FileCheck
} from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  executeLeadFlow, buildWhatsAppLink,
  loadLeadFromStorage, copyToClipboard, Lead
} from '../lib/flow-manager';

const Discovery: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leadData, setLeadData] = useState<Lead | null>(null);
  const [flowStatus, setFlowStatus] = useState<'idle' | 'generating' | 'downloaded' | 'opening' | 'blocked'>('idle');
  const [showInstructions, setShowInstructions] = useState(false);
  const [hasConfirmedSent, setHasConfirmedSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const saved = loadLeadFromStorage();
    if (saved) {
      setLeadData(saved);
      setIsSubmitted(true);
    }
  }, []);

  const calculateRoute = (data: QuizData): AssessmentResult => {
    let primary = "";
    let secondary = "";
    let rationale: string[] = [];
    let weeklyPlan = "";

    const isLocal = data.location === 'Harare';
    const wantsPilates = data.pilatesInterest === 'Yes';
    const highSupport = data.accountability === 'Strong support' || data.experience === 'Beginner' || data.trainerLocation === 'Yes, come to me';
    const capacity = data.daysPerWeek;

    if (!isLocal) {
      // Remote Path
      if (highSupport) {
        primary = "Virtual Personal Training";
        rationale = [
          "Live sessions so I can help you stay safe.",
          "Perfect for your home or local gym setup.",
          "High support even though I am not in the same room."
        ];
        weeklyPlan = `${capacity} Live Virtual sessions`;
      } else {
        primary = "Online Coaching";
        rationale = [
          "A flexible plan you can do on your own time.",
          "Weekly check-ins to make sure you're feeling good.",
          "Great for busy schedules and frequent travel."
        ];
        weeklyPlan = "Daily plan via app + weekly review";
      }
    } else {
      // Local Path (Harare)
      if (data.trainerLocation === 'Yes, come to me') {
        primary = "1:1 Personal Training (In-Person)";
        rationale = [
          "Maximum convenience — your coach comes to your home.",
          "Personal focus on your goals and your technique.",
          "Best for staying consistent when life is busy."
        ];
        weeklyPlan = `${capacity} Home sessions per week`;
      } else if (wantsPilates) {
        if (highSupport || data.injuryStatus !== 'No') {
          primary = "Private 1:1 Pilates";
          rationale = [
            "Focused work on your core and posture.",
            "Safe and gentle if you have aches or injuries.",
            "Personalized attention to help you move better."
          ];
          weeklyPlan = `${capacity} Private Pilates sessions`;
        } else if (data.format === 'Small group') {
          primary = "Small Group Reformer Classes";
          rationale = [
            "Great energy from a small group of supportive people.",
            "Focused work on the Reformer machine for toning.",
            "Quality training at a shared cost."
          ];
          weeklyPlan = `${capacity} Group Reformer classes`;
        } else {
          primary = "Studio-Based Pilates (Nuvo Pilates Studio)";
          rationale = [
            "Work on posture and core strength in my studio.",
            "A calm and supportive environment to focus on you.",
            "Great for feeling taller and more flexible."
          ];
          weeklyPlan = `${capacity} Studio sessions per week`;
        }
      } else {
        // Strength/PT Path
        if (highSupport) {
          primary = "1:1 Personal Training (In-Person)";
          rationale = [
            "Personal focus on your goals and your technique.",
            "Hands-on help to make sure you're moving safely.",
            "Maximum support to help you see results."
          ];
          weeklyPlan = `${capacity} Private sessions per week`;
        } else {
          primary = "Small Group Training";
          rationale = [
            "Structured strength work in a friendly group.",
            "Help with your form while enjoying the group energy.",
            "A fun and effective way to get stronger."
          ];
          weeklyPlan = `${capacity} Group sessions per week`;
        }
      }
    }

    // Secondary Add-on
    if (data.goal === 'Improve posture' || data.goal === 'Recover from injury') {
      secondary = "Pilates Integration";
      rationale.push("Extra focus on core strength to help you feel your best.");
    }

    const readinessLevel = data.readiness >= 9 ? 'High Commitment' : data.readiness >= 7 ? 'Committed' : 'Starter';

    return {
      primaryService: primary,
      secondaryService: secondary,
      rationale,
      weeklyPlan,
      readinessLevel,
      score: data.readiness * 10
    };
  };

  const handleComplete = async (data: QuizData) => {
    setIsGenerating(true);
    const result = calculateRoute(data);

    const lead: Lead = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      responses: {
        goal: data.goal,
        experience: data.experience,
        location: data.location,
        daysPerWeek: data.daysPerWeek,
        injuries: data.injuryStatus
      },
      result,
      timestamp: new Date().toISOString()
    };

    setLeadData(lead);
    await new Promise(r => setTimeout(r, 2000));
    setIsGenerating(false);
    setIsSubmitted(true);
  };

  const handleFlowAction = async () => {
    if (!leadData) return;
    setShowInstructions(true);
    await executeLeadFlow(leadData, (status) => setFlowStatus(status));
  };

  const filename = leadData ? `SCULPT_Report_${leadData.name.replace(/\s+/g, '_')}.pdf` : '';

  if (isSubmitted && leadData) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6 md:p-10 font-sans">
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-black/5 animate-fade-up">
          <div className="p-8 md:p-20 space-y-16">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-copper/10 rounded-full text-copper text-[10px] tracking-[0.3em] font-bold uppercase mb-4">
                <Sparkles className="w-4 h-4" /> Assessment Finished
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-dark-text tracking-tighter leading-none italic">Your path is clear.</h1>
              <p className="text-dark-secondary/40 text-xs tracking-widest uppercase font-bold">Personal plan for {leadData.name}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-near-black text-white rounded-2xl p-10 space-y-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-6">What I recommend</h4>
                  <h2 className="text-3xl md:text-4xl font-serif text-copper mb-4">{leadData.result.primaryService}</h2>
                  <p className="text-sm text-white/50 leading-relaxed font-light mb-6">I think this is the best way for you to reach your goal of {leadData.responses.goal}.</p>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h4 className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-2">Weekly Plan</h4>
                  <p className="text-xl font-serif">{leadData.result.weeklyPlan}</p>
                </div>
              </div>

              <div className="space-y-10">
                <div className="p-8 bg-stone-50 rounded-2xl border border-black/5">
                  <h4 className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-6">Why this suits you</h4>
                  <ul className="space-y-4">
                    {leadData.result.rationale.slice(0, 3).map((r, i) => (
                      <li key={i} className="flex gap-4 text-sm font-light text-dark-secondary leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-copper rounded-full mt-2 shrink-0"></span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between p-6 border-b border-black/5">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Readiness</h4>
                    <p className="text-xl font-serif">{leadData.result.readinessLevel}</p>
                  </div>
                  <div className="text-right">
                    <h4 className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Goal Match</h4>
                    <p className="text-xl font-serif text-copper">{leadData.result.score}%</p>
                  </div>
                </div>
              </div>
            </div>

            {!hasConfirmedSent ? (
              <div className="space-y-6 pt-10">
                <Button
                  onClick={handleFlowAction}
                  disabled={flowStatus === 'generating'}
                  className="w-full py-10 bg-copper text-white text-[12px] tracking-[0.4em] uppercase font-bold hover:bg-near-black transition-all flex items-center justify-center gap-4 shadow-2xl shadow-copper/20"
                >
                  {flowStatus === 'generating' ? 'Creating Report...' : 'Download Report + Send on WhatsApp'}
                </Button>
              </div>
            ) : (
              <div className="pt-10 text-center space-y-8 animate-fade-up">
                <div className="flex items-center justify-center gap-3 text-green-600">
                  <FileCheck className="w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-widest">Plan Sent to Tsitsi</span>
                </div>
                <Button variant="outline" onClick={() => setHasConfirmedSent(false)} className="text-[10px] tracking-widest uppercase py-6 px-10 border-black/5 hover:bg-stone-50">
                  <RefreshCcw className="w-3 h-3 mr-2" /> Send Again
                </Button>
              </div>
            )}

            <div className="pt-12 border-t border-black/5 flex items-start gap-4 text-dark-secondary/40 text-[11px] font-light leading-relaxed italic">
              <div className="p-3 bg-stone-50 rounded-full shrink-0"><HelpCircle className="w-4 h-4" /></div>
              <p>
                <strong>Anti-Forget Protocol:</strong> After the PDF downloads, WhatsApp opens a private chat with Tsitsi. You must manually attach the PDF to complete your inquiry.
              </p>
            </div>
          </div>
        </div>

        {/* --- ANTI-FORGET MODAL --- */}
        {showInstructions && (
          <div className="fixed inset-0 z-[5000] flex items-center justify-center bg-near-black/90 backdrop-blur-xl p-4">
            <div className="w-full max-w-lg bg-white rounded-2xl p-10 space-y-10 animate-fade-up shadow-2xl relative">
              <button onClick={() => setShowInstructions(false)} className="absolute top-6 right-6 p-2 hover:bg-stone-100 rounded-full">
                <X className="w-6 h-6 text-dark-text" />
              </button>
              <div className="space-y-4">
                <h2 className="text-3xl font-serif text-dark-text">Ready to share?</h2>
                <p className="text-sm text-dark-secondary/60 leading-relaxed font-light">
                  Once WhatsApp opens, remember to attach the report I just generated:
                </p>
              </div>
              <div className="space-y-8">
                {[
                  { id: "01", title: "Tap (📎) or (+)", sub: "In your message box" },
                  { id: "02", title: "Select 'Document'", sub: "To find your file" },
                  { id: "03", title: `Select: ${filename}`, sub: "From your downloads" },
                  { id: "04", title: "Tap Send", sub: "Tsitsi will get back to you soon" }
                ].map((s, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <span className="text-copper/40 font-serif text-3xl shrink-0">{s.id}</span>
                    <div>
                      <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase text-dark-text mb-1">{s.title}</h4>
                      <p className="text-[11px] font-light text-dark-secondary/50">{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-8 border-t border-black/5 space-y-4">
                <Button onClick={() => { setHasConfirmedSent(true); setShowInstructions(false); }} className="w-full py-8 bg-copper text-white text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-copper/20">
                  I've sent it ✅
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <main className="pt-32 md:pt-48 relative">
        {isGenerating && (
          <div className="fixed inset-0 z-[3000] bg-white/95 backdrop-blur-md flex items-center justify-center">
            <div className="text-center space-y-8">
              <div className="w-20 h-20 border-t-2 border-r-2 border-copper rounded-full animate-spin mx-auto"></div>
              <h4 className="text-[10px] tracking-[0.8em] uppercase font-bold text-copper animate-pulse">Thinking...</h4>
            </div>
          </div>
        )}
        <QuizStepper onComplete={handleComplete} />
      </main>
    </div>
  );
};

export default Discovery;
