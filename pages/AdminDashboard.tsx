
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { CheckCircle, Clock, Eye, Filter, User, X, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

interface Application {
  id: number;
  name: string;
  email: string;
  goal: string;
  readiness: string;
  date: string;
  status: string;
  responses: any;
}

const MOCK_APPLICATIONS: Application[] = [
  { 
    id: 1, 
    name: 'Amai Mutasa', 
    email: 'amai@example.com',
    goal: 'Mobility & Strength', 
    readiness: 'Ready now', 
    date: '2025-05-10', 
    status: 'New',
    responses: {
      feeling: 'Strong and independent in my movements.',
      training: ['Strength', 'Mix'],
      challenge: 'Recovering from a previous knee injury while maintaining consistency.',
      sessions: '3+',
      style: 'Structured',
      fitness: 'Intermediate'
    }
  },
  { 
    id: 2, 
    name: 'Farai Gumbo', 
    email: 'farai@example.com',
    goal: 'Postnatal Recovery', 
    readiness: 'Soon', 
    date: '2025-05-09', 
    status: 'Reviewed',
    responses: {
      feeling: 'Like myself again.',
      training: ['Reformer Pilates', 'Low-impact'],
      challenge: 'Finding time with a newborn.',
      sessions: '2',
      style: 'Gentle',
      fitness: 'Beginner'
    }
  }
];

const AdminDashboard: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  return (
    <div className="bg-stone-50 min-h-screen transition-colors duration-700">
      <div className="pt-40 md:pt-56 pb-40 px-6 md:px-10 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
          <div>
            <h4 className="text-copper text-[10px] tracking-[0.6em] uppercase mb-6 font-bold">Trainer Access</h4>
            <h1 className="text-5xl md:text-6xl font-serif text-dark-text tracking-tighter">Discovery Ledger</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-full px-6 flex gap-2 text-[10px] tracking-widest uppercase border-black/5 bg-white">
              <Filter className="w-3 h-3" /> All Status
            </Button>
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left min-w-[900px]">
              <thead>
                <tr className="border-b border-black/5 text-[9px] uppercase tracking-widest font-bold text-dark-text/40">
                  <th className="px-10 py-8">Client</th>
                  <th className="px-10 py-8">Primary Focus</th>
                  <th className="px-10 py-8">Readiness</th>
                  <th className="px-10 py-8">Status</th>
                  <th className="px-10 py-8 text-right">Review</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {MOCK_APPLICATIONS.map((app) => (
                  <tr key={app.id} className="group hover:bg-stone-50 transition-colors">
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center text-copper">
                          <User className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-serif text-xl text-dark-text">{app.name}</span>
                          <span className="text-[10px] opacity-40 uppercase tracking-widest">{app.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-8 text-sm font-light text-dark-secondary">{app.goal}</td>
                    <td className="px-10 py-8">
                      <span className={cn(
                        "text-[9px] px-3 py-1 rounded-full uppercase tracking-widest font-bold",
                        app.readiness === 'Ready now' ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                      )}>
                        {app.readiness}
                      </span>
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-2 text-xs font-light">
                        {app.status === 'New' ? <Clock className="w-4 h-4 text-copper" /> : <CheckCircle className="w-4 h-4 text-green-600" />}
                        {app.status}
                      </div>
                    </td>
                    <td className="px-10 py-8 text-right">
                      <Button 
                        onClick={() => setSelectedApp(app)}
                        variant="ghost" className="text-copper hover:text-copper/70 hover:bg-transparent"
                      >
                        <Eye className="w-5 h-5" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-end bg-near-black/60 backdrop-blur-sm p-4 md:p-10">
          <div className="bg-white w-full max-w-2xl h-full rounded-2xl shadow-2xl overflow-y-auto relative animate-fade-up">
            <button 
              onClick={() => setSelectedApp(null)}
              className="absolute top-10 right-10 p-2 hover:bg-stone-100 rounded-full transition-all"
            >
              <X className="w-6 h-6 text-dark-text" />
            </button>

            <div className="p-12 md:p-20 space-y-16">
              <div>
                <h4 className="text-copper text-[10px] tracking-[0.8em] uppercase mb-6 font-bold">Application Details</h4>
                <h2 className="text-5xl md:text-6xl font-serif text-dark-text">{selectedApp.name}</h2>
                <div className="flex flex-wrap gap-6 mt-6">
                  <span className="flex items-center gap-2 text-xs font-light text-dark-secondary/60"><Mail className="w-3 h-3 text-copper" /> {selectedApp.email}</span>
                  <span className="flex items-center gap-2 text-xs font-light text-dark-secondary/60"><Phone className="w-3 h-3 text-copper" /> +263 Private</span>
                </div>
                <p className="text-dark-secondary/40 font-light mt-8 italic text-xs">Submitted on {selectedApp.date}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest opacity-30">Status</Label>
                  <p className="font-bold tracking-widest text-[10px] uppercase text-copper">{selectedApp.status}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest opacity-30">Sessions/Week</Label>
                  <p className="text-xl font-serif">{selectedApp.responses.sessions}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest opacity-30">Fitness Level</Label>
                  <p className="text-xl font-serif">{selectedApp.responses.fitness || 'Not specified'}</p>
                </div>
              </div>

              <div className="space-y-10 border-t border-black/5 pt-12">
                 <div className="space-y-4">
                    <Label className="text-[10px] uppercase tracking-widest opacity-30">Vision & Intent</Label>
                    <p className="text-2xl font-serif text-dark-text leading-tight italic">"{selectedApp.responses.feeling}"</p>
                 </div>
                 
                 <div className="space-y-4">
                    <Label className="text-[10px] uppercase tracking-widest opacity-30">Coaching Style</Label>
                    <p className="text-lg font-serif text-dark-text">{selectedApp.responses.style || 'Balanced'}</p>
                 </div>

                 <div className="space-y-4">
                    <Label className="text-[10px] uppercase tracking-widest opacity-30">Training Interests</Label>
                    <div className="flex flex-wrap gap-2">
                      {selectedApp.responses.training.map((t: string) => (
                        <span key={t} className="px-4 py-2 bg-stone-100 rounded-full text-[9px] uppercase tracking-widest font-bold">{t}</span>
                      ))}
                    </div>
                 </div>

                 <div className="space-y-4">
                    <Label className="text-[10px] uppercase tracking-widest opacity-30">Historical Challenges</Label>
                    <p className="text-lg font-light text-dark-secondary leading-relaxed">{selectedApp.responses.challenge}</p>
                 </div>
              </div>

              <div className="pt-12 flex flex-col sm:flex-row gap-4">
                <Button className="flex-grow py-8 text-[10px] tracking-widest uppercase font-bold shadow-xl shadow-copper/10">Contact Client</Button>
                <Button variant="outline" className="flex-grow py-8 text-[10px] tracking-widest uppercase font-bold border-black/5">Approve Session</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
