import React from 'react';
import { FileText, Calculator, FileDown, BookOpen } from 'lucide-react';

const QuickLinkCard: React.FC<{ icon: React.ReactNode; label: string; desc: string }> = ({ icon, label, desc }) => (
  <button className="flex flex-col items-start p-4 bg-white rounded-[1.5rem] border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-orange-100/50 hover:-translate-y-1 transition-all duration-300 group h-full w-full text-left relative overflow-hidden">
    
    <div className="absolute top-0 right-0 w-12 h-12 bg-slate-50 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150 group-hover:bg-orange-50/50 duration-500"></div>
    
    <div className="p-2.5 rounded-xl bg-slate-50 text-slate-600 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 mb-3 relative z-10 shadow-sm">
      {icon}
    </div>
    
    <div className="relative z-10">
      <h3 className="font-bold text-slate-800 text-xs mb-0.5 group-hover:text-brand-orange transition-colors">{label}</h3>
      <p className="text-[10px] text-slate-400 font-medium group-hover:text-slate-500 leading-tight">{desc}</p>
    </div>
  </button>
);

export const QuickLinks: React.FC = () => {
  return (
    <>
      <QuickLinkCard 
        icon={<FileDown size={18} />} 
        label="Form 16" 
        desc="Download FY24-25" 
      />
      <QuickLinkCard 
        icon={<Calculator size={18} />} 
        label="Tax Calc" 
        desc="Old vs New" 
      />
      <QuickLinkCard 
        icon={<FileText size={18} />} 
        label="Payslips" 
        desc="View History" 
      />
      <QuickLinkCard 
        icon={<BookOpen size={18} />} 
        label="Policies" 
        desc="Benefits" 
      />
    </>
  );
};