import React from 'react';
import { RetirementData } from '../types';
import { Shield, Clock, Briefcase, ChevronRight, ExternalLink } from 'lucide-react';

interface RetirementSectionProps {
  data: RetirementData;
  isPrivacyMode: boolean;
}

const RetirementCard: React.FC<{ 
  title: string; 
  amount: number; 
  isPrivacyMode: boolean; 
  icon: React.ReactNode;
  color: string;
  accentColor: string;
}> = ({ title, amount, isPrivacyMode, icon, color, accentColor }) => (
  <div className="bg-slate-50/50 rounded-[1.5rem] p-6 border border-slate-100 relative group hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-transparent transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
       <div className={`p-3 rounded-2xl ${color} bg-opacity-10 text-opacity-100 shadow-sm`}>
         {React.cloneElement(icon as React.ReactElement, { size: 20, className: accentColor })}
       </div>
       <button className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-brand-orange group-hover:border-orange-100 transition-colors shadow-sm">
         <ChevronRight size={16} />
       </button>
    </div>
    
    <div>
       <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{title}</p>
       <p className="text-2xl font-bold text-slate-800 tracking-tight">
          {isPrivacyMode ? '••••••' : new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)}
       </p>
    </div>
  </div>
);

export const RetirementSection: React.FC<RetirementSectionProps> = ({ data, isPrivacyMode }) => {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
      <div className="flex items-center justify-between mb-8">
        <div>
           <h2 className="text-xl font-bold text-slate-800">Retirement & Savings</h2>
           <p className="text-sm text-slate-400 mt-1 font-medium">Accumulated corpus breakdown</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-xs font-bold text-brand-orange bg-orange-50 px-4 py-2 rounded-xl hover:bg-orange-100 transition-colors">
          View Statements <ExternalLink size={14} />
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <RetirementCard 
          title="Provident Fund" 
          amount={data.pfAmount} 
          isPrivacyMode={isPrivacyMode} 
          icon={<Shield />}
          color="bg-indigo-500"
          accentColor="text-indigo-600"
        />
        <RetirementCard 
          title="Gratuity" 
          amount={data.gratuityAmount} 
          isPrivacyMode={isPrivacyMode} 
          icon={<Briefcase />}
          color="bg-emerald-500"
          accentColor="text-emerald-600"
        />
        <RetirementCard 
          title="Superannuation" 
          amount={data.superannuationAmount} 
          isPrivacyMode={isPrivacyMode} 
          icon={<Clock />}
          color="bg-purple-500"
          accentColor="text-purple-600"
        />
      </div>
    </div>
  );
};