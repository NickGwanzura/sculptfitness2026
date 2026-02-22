
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { 
  ChevronRight, ChevronLeft, Check, Sparkles, Activity, ShieldCheck, 
  Heart, Target, Zap, Clock, User, Phone, MapPin, Award, Dumbbell, 
  Compass, Eye, Users, Globe, Home
} from 'lucide-react';
import { cn } from '../lib/utils';

export interface QuizData {
  name: string;
  email: string;
  phone: string;
  goal: string;
  experience: string;
  location: string;
  trainerLocation: string; // New: Come to me vs Studio
  daysPerWeek: string;     // New: 0-1, 2, 3, 4+
  format: string;
  accountability: string;
  pilatesInterest: string;
  injuryStatus: string;
  readiness: number;
  permissions: boolean;
}

const INITIAL_DATA: QuizData = {
  name: '', email: '', phone: '', goal: '', experience: '', location: '', 
  trainerLocation: '', daysPerWeek: '', format: '', accountability: '', 
  pilatesInterest: '', injuryStatus: '', readiness: 5, permissions: false,
};

const QuizStepper: React.FC<{ onComplete: (data: QuizData) => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<QuizData>(INITIAL_DATA);

  const updateField = (field: keyof QuizData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const SelectionCard = ({ selected, onClick, label, icon: Icon, description }: any) => (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex flex-col items-start p-6 text-left border transition-all duration-500 rounded-xl overflow-hidden min-h-[140px]",
        selected 
          ? "border-copper bg-stone-50 ring-1 ring-copper/20" 
          : "border-black/5 bg-white hover:border-copper/30 hover:bg-stone-50/50"
      )}
    >
      <div className="flex justify-between items-start w-full mb-4">
        <div className={cn("p-2 rounded-lg transition-colors", selected ? "bg-copper text-white" : "bg-stone-100 text-dark-text/40 group-hover:text-copper")}>
          {Icon ? <Icon className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
        </div>
        {selected && <div className="bg-copper rounded-full p-1"><Check className="w-3 h-3 text-white" /></div>}
      </div>
      <h4 className={cn("text-[10px] tracking-[0.2em] uppercase font-bold mb-2", selected ? "text-dark-text" : "text-dark-secondary/60")}>{label}</h4>
      {description && <p className="text-[11px] leading-relaxed text-dark-secondary/40 font-light">{description}</p>}
    </button>
  );

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-12 animate-fade-up text-center max-w-xl mx-auto py-10">
            <div className="flex justify-center mb-8">
              <Compass className="text-copper w-16 h-16 opacity-30 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-dark-text leading-[1.1]">Let's find your <br/>perfect path.</h2>
            <p className="text-dark-secondary/50 text-xl font-light leading-relaxed max-w-lg mx-auto">
              This simple assessment helps us understand your goals and your life. We'll suggest the best way for you to stay consistent and feel your best.
            </p>
            <div className="pt-8">
              <Button onClick={nextStep} className="px-16 py-8 text-[11px] tracking-[0.6em] uppercase font-bold shadow-xl shadow-copper/20">Start Assessment</Button>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-12 animate-fade-up">
            <h3 className="text-3xl font-serif text-dark-text">A little about you</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3 md:col-span-2">
                <Label className="text-[10px] uppercase tracking-widest opacity-40">Your Name</Label>
                <Input value={formData.name} onChange={e => updateField('name', e.target.value)} placeholder="Jane Doe" className="h-16 bg-stone-50 border-none rounded-xl px-6 focus:ring-1 focus:ring-copper/20" />
              </div>
              <div className="space-y-3">
                <Label className="text-[10px] uppercase tracking-widest opacity-40">Email</Label>
                <Input value={formData.email} onChange={e => updateField('email', e.target.value)} placeholder="jane@example.com" className="h-16 bg-stone-50 border-none rounded-xl px-6 focus:ring-1 focus:ring-copper/20" />
              </div>
              <div className="space-y-3">
                <Label className="text-[10px] uppercase tracking-widest opacity-40">Phone (WhatsApp)</Label>
                <Input value={formData.phone} onChange={e => updateField('phone', e.target.value)} placeholder="+263..." className="h-16 bg-stone-50 border-none rounded-xl px-6 focus:ring-1 focus:ring-copper/20" />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-12 animate-fade-up">
             <h3 className="text-3xl font-serif text-dark-text">What is your main goal?</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {[
                 { id: 'Get stronger', icon: Dumbbell, desc: 'Build power and feel more capable.' },
                 { id: 'Lose weight', icon: Zap, desc: 'Feel lighter and more energetic.' },
                 { id: 'Tone & sculpt', icon: Sparkles, desc: 'Shape and define your muscles.' },
                 { id: 'Improve posture', icon: Heart, desc: 'Stand taller and feel less stiff.' },
                 { id: 'Feel healthier', icon: Activity, desc: 'Improve your overall well-being.' },
                 { id: 'Recover from injury', icon: ShieldCheck, desc: 'Get back to moving safely.' }
               ].map(opt => (
                 <SelectionCard 
                   key={opt.id} 
                   label={opt.id} 
                   description={opt.desc} 
                   icon={opt.icon}
                   selected={formData.goal === opt.id}
                   onClick={() => updateField('goal', opt.id)}
                 />
               ))}
             </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-12 animate-fade-up">
            <h3 className="text-3xl font-serif text-dark-text">Your Schedule</h3>
            <div className="space-y-10">
               <div className="space-y-4">
                  <Label className="text-[10px] uppercase tracking-widest opacity-40">How many days per week can you realistically exercise?</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {['0-1', '2', '3', '4+'].map(val => (
                      <button key={val} onClick={() => updateField('daysPerWeek', val)} className={cn("py-4 border text-[10px] font-bold rounded-xl", formData.daysPerWeek === val ? "bg-copper text-white border-copper" : "border-black/5")}>{val}</button>
                    ))}
                  </div>
                  <p className="text-[10px] opacity-40 italic">Be honest — this helps us create a plan you can actually stick to.</p>
               </div>
               
               <div className="space-y-4 pt-4 border-t border-black/5">
                  <Label className="text-[10px] uppercase tracking-widest opacity-40">Where do you live?</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Harare', 'Elsewhere'].map(loc => (
                      <button key={loc} onClick={() => updateField('location', loc)} className={cn("py-4 border text-[10px] font-bold rounded-xl uppercase", formData.location === loc ? "bg-near-black text-white" : "border-black/5")}>{loc}</button>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-12 animate-fade-up">
            <h3 className="text-3xl font-serif text-dark-text">Training Style</h3>
            <div className="space-y-10">
               {formData.location === 'Harare' && (
                 <div className="space-y-4">
                    <Label className="text-[10px] uppercase tracking-widest opacity-40">Would you like the coach to come to you?</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {['Yes, come to me', 'I can come to the studio', 'Either is fine'].map(opt => (
                        <button key={opt} onClick={() => updateField('trainerLocation', opt)} className={cn("py-4 px-4 border text-[10px] font-bold rounded-xl uppercase", formData.trainerLocation === opt ? "bg-copper text-white" : "border-black/5")}>{opt}</button>
                      ))}
                    </div>
                 </div>
               )}

               <div className="space-y-4 pt-4 border-t border-black/5">
                  <Label className="text-[10px] uppercase tracking-widest opacity-40">How much support do you need?</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {['Strong support', 'Moderate help', "I'm self-driven"].map(opt => (
                      <button key={opt} onClick={() => updateField('accountability', opt)} className={cn("py-4 border text-[10px] font-bold rounded-xl uppercase", formData.accountability === opt ? "bg-copper text-white" : "border-black/5")}>{opt}</button>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-12 animate-fade-up">
            <h3 className="text-3xl font-serif text-dark-text">Experience & Focus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-4">
                  <Label className="text-[10px] uppercase tracking-widest opacity-40">Exercise Experience</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {['Beginner', 'I know a bit', "I'm experienced"].map(lvl => (
                      <button key={lvl} onClick={() => updateField('experience', lvl)} className={cn("py-4 px-6 text-left border rounded-xl text-[10px] font-bold uppercase", formData.experience === lvl ? "bg-copper text-white" : "border-black/5")}>{lvl}</button>
                    ))}
                  </div>
               </div>
               <div className="space-y-4">
                  <Label className="text-[10px] uppercase tracking-widest opacity-40">Interested in Pilates?</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {['Yes', 'Maybe', 'No'].map(opt => (
                      <button key={opt} onClick={() => updateField('pilatesInterest', opt)} className={cn("py-4 px-6 text-left border rounded-xl text-[10px] font-bold uppercase", formData.pilatesInterest === opt ? "bg-copper text-white" : "border-black/5")}>{opt}</button>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-12 animate-fade-up">
            <h3 className="text-3xl font-serif text-dark-text">Final Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-4">
                  <Label className="text-[10px] uppercase tracking-widest opacity-40">Any injuries or aches?</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {['No', 'Yes, a little', 'Yes, currently hurting'].map(opt => (
                      <button key={opt} onClick={() => updateField('injuryStatus', opt)} className={cn("py-4 px-6 text-left border rounded-xl text-[10px] font-bold uppercase", formData.injuryStatus === opt ? "bg-copper text-white" : "border-black/5")}>{opt}</button>
                    ))}
                  </div>
               </div>
               <div className="space-y-4">
                  <Label className="text-[10px] uppercase tracking-widest opacity-40">Which format do you prefer?</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {['1-on-1', 'Small group', 'Independent', 'Not sure'].map(opt => (
                      <button key={opt} onClick={() => updateField('format', opt)} className={cn("py-4 px-6 text-left border rounded-xl text-[10px] font-bold uppercase", formData.format === opt ? "bg-copper text-white" : "border-black/5")}>{opt}</button>
                    ))}
                  </div>
               </div>
            </div>
            <div className="space-y-8 pt-4 border-t border-black/5 text-center">
                <Label className="text-[10px] uppercase tracking-[0.4em] opacity-40">How ready are you to start?</Label>
                <input 
                  type="range" min="0" max="10" 
                  value={formData.readiness} 
                  onChange={e => updateField('readiness', parseInt(e.target.value))} 
                  className="w-full accent-copper h-2 bg-stone-100 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-5xl font-serif text-copper">{formData.readiness}</div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-12 animate-fade-up text-center max-w-md mx-auto py-10">
            <h3 className="text-4xl font-serif text-dark-text italic leading-tight">All set.</h3>
            <p className="text-dark-secondary/50 font-light leading-relaxed">
              We've created your personal recommendation. Secure your report below to see our plan for you.
            </p>
            <div className="flex items-start gap-4 p-6 bg-stone-50 rounded-xl border border-black/5 text-left mt-8">
              <input type="checkbox" checked={formData.permissions} onChange={e => updateField('permissions', e.target.checked)} className="mt-1 w-5 h-5 accent-copper cursor-pointer" />
              <span className="text-[11px] leading-relaxed text-dark-secondary/60">I'm happy for SCULPT to contact me about my results.</span>
            </div>
            <div className="pt-10">
              <Button 
                onClick={() => onComplete(formData)}
                disabled={!formData.permissions || !formData.phone || !formData.name}
                className="w-full py-10 text-[11px] tracking-[0.6em] uppercase font-bold shadow-2xl bg-near-black text-white hover:bg-copper transition-all duration-700"
              >
                See Recommendation
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 min-h-[750px] flex flex-col justify-between">
      <div className="relative">
        {step > 0 && step < 7 && (
          <div className="flex items-center gap-2 justify-center mb-12">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className={cn("h-[1px] flex-grow max-w-[40px] rounded-full transition-all duration-1000", step >= i ? "bg-copper" : "bg-black/10")} />
            ))}
          </div>
        )}
        <div className="transition-all duration-700">{renderStep()}</div>
      </div>

      {step > 0 && step < 7 && (
        <div className="flex justify-between items-center pt-16 border-t border-black/5 mt-16">
          <button onClick={prevStep} className="flex items-center text-[10px] tracking-widest uppercase font-bold opacity-30 hover:opacity-100 transition-opacity">
            <ChevronLeft className="w-4 h-4 mr-2" /> Back
          </button>
          <Button 
            onClick={nextStep} 
            disabled={(step === 1 && !formData.name) || (step === 2 && !formData.goal) || (step === 3 && !formData.daysPerWeek)}
            className="px-12 py-6 bg-stone-50 text-copper border border-copper/20 hover:bg-copper hover:text-white transition-all"
          >
            Continue <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizStepper;
