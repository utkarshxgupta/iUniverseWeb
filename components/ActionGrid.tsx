import React from 'react';
import { UploadCloud, FilePlus, PieChart, FileSignature, Landmark, Wallet, ChevronRight, Coins } from 'lucide-react';

const ActionRow: React.FC<{ 
  label: string; 
  icon: React.ReactNode; 
  colorClass: string; 
  subLabel?: string;
}> = ({ label, icon, colorClass, subLabel }) => (
  <button className="w-full flex items-center gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors group text-left border border-transparent hover:border-slate-100/50">
    <div className={`p-2.5 rounded-xl ${colorClass} bg-opacity-10 text-opacity-100 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
      {React.cloneElement(icon as React.ReactElement, { size: 20, className: colorClass.replace('bg-', 'text-') })}
    </div>
    <div className="flex-1">
      <span className="font-semibold text-slate-700 text-sm block group-hover:text-slate-900 transition-colors">{label}</span>
      {subLabel && <span className="text-xs text-slate-400 font-medium">{subLabel}</span>}
    </div>
    <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
        <ChevronRight size={14} className="text-slate-400" />
    </div>
  </button>
);

export const InvestmentsSection: React.FC = () => (
  <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 h-full">
    <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-3">
      <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
        <PieChart size={20} /> 
      </div>
      Investments & Declarations
    </h2>
    <div className="space-y-2">
      <ActionRow 
        label="Declare Investments" 
        subLabel="Update your tax saving plan"
        icon={<FilePlus />} 
        colorClass="bg-blue-500" 
      />
      <ActionRow 
        label="Upload Proofs" 
        subLabel="Submit documents for verification"
        icon={<UploadCloud />} 
        colorClass="bg-indigo-500" 
      />
      <ActionRow 
        label="Investment Summary" 
        icon={<PieChart />} 
        colorClass="bg-purple-500" 
      />
      <ActionRow 
        label="Annual Declaration" 
        icon={<FileSignature />} 
        colorClass="bg-pink-500" 
      />
    </div>
  </div>
);

export const LoansSection: React.FC = () => (
  <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 h-full">
    <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-3">
      <div className="p-2 rounded-xl bg-teal-50 text-teal-600">
        <Coins size={20} /> 
      </div>
      Loans & Claims
    </h2>
    <div className="space-y-2">
       <div className="p-5 rounded-[1.5rem] bg-gradient-to-br from-orange-50 to-white border border-orange-100/60 mb-4 group cursor-pointer hover:shadow-md hover:shadow-orange-100/50 transition-all duration-300">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 bg-white rounded-xl text-brand-orange shadow-sm">
              <Wallet size={18} />
            </div>
            <span className="font-bold text-brand-orange text-sm">Reimbursements</span>
          </div>
          <p className="text-xs text-slate-500 pl-[52px] font-medium">Manage Medical, Travel & Fuel claims</p>
       </div>

      <ActionRow 
        label="Staff Loans Overview" 
        icon={<Landmark />} 
        colorClass="bg-emerald-500" 
      />
      <ActionRow 
        label="Apply New Loan" 
        icon={<FilePlus />} 
        colorClass="bg-teal-500" 
      />
    </div>
  </div>
);