import React from 'react';
import { SalaryData } from '../types';
import { ChevronRight, Download, Wallet } from 'lucide-react';

interface SalaryCardProps {
  data: SalaryData;
  isPrivacyMode: boolean;
}

export const SalaryCard: React.FC<SalaryCardProps> = ({ data, isPrivacyMode }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: data.currency,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const displayValue = (amount: number) => {
    if (isPrivacyMode) return '••••••';
    return formatCurrency(amount);
  };

  // Calculate percentages for visual bars
  const gross = data.grossSalary;
  const netPct = (data.netSalary / gross) * 100;
  
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-2xl shadow-slate-900/20 group min-h-[320px] flex flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1">
      
      {/* Ambient Background Gradients */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-brand-orange/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      {/* Top Section: Month & Status */}
      <div className="relative z-10 flex justify-between items-start">
        <div>
           <div className="flex items-center gap-2 mb-1 opacity-80">
             <Wallet size={16} className="text-brand-orange" />
             <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Take Home Pay</span>
           </div>
           <p className="text-sm text-slate-400">{data.month} {data.year}</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-md">
           <Download size={18} />
        </button>
      </div>

      {/* Middle Section: Big Number */}
      <div className="relative z-10 py-6">
         <div className="text-5xl font-bold tracking-tight text-white mb-1">
            {displayValue(data.netSalary)}
         </div>
         <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md w-fit">
            <span>+ Salary Credited</span>
            <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
            <span>31 {data.month}</span>
         </div>
      </div>

      {/* Bottom Section: Breakdown & Action */}
      <div className="relative z-10 space-y-5">
        
        {/* Breakdown Bars */}
        <div className="space-y-3">
           <div className="flex justify-between text-xs text-slate-400 font-medium mb-1">
              <span>Earnings</span>
              <span>{displayValue(data.grossSalary)}</span>
           </div>
           <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden flex">
              <div style={{ width: `${netPct}%` }} className="h-full bg-brand-orange rounded-full"></div>
           </div>
           <div className="flex justify-between items-center mt-1">
              <div className="flex gap-4">
                  <div className="flex items-center gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                     <span className="text-[10px] text-slate-300">Net Pay</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                     <span className="text-[10px] text-slate-300">Deductions ({displayValue(data.deductions)})</span>
                  </div>
              </div>
           </div>
        </div>

        <button className="w-full py-3.5 rounded-xl bg-white text-slate-900 text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors shadow-lg shadow-black/25">
           View Detailed Slip <ChevronRight size={16} className="text-slate-400" />
        </button>
      </div>

    </div>
  );
};