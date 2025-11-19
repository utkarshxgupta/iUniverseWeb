import React from 'react';
import { SalaryData } from '../types';
import { ChevronRight, Download, Wallet, CalendarCheck } from 'lucide-react';

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

  // Calculate percentages for visual breakdown
  const gross = data.grossSalary;
  const netPct = (data.netSalary / gross) * 100;
  const deductionPct = 100 - netPct; // Remaining is deduction
  
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-2xl shadow-slate-900/20 group min-h-[320px] flex flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1">
      
      {/* Ambient Background Gradients */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-brand-orange/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      {/* Top Section: Month & Status */}
      <div className="relative z-10 flex justify-between items-start mb-4">
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
      <div className="relative z-10 mb-6">
         <div className="text-5xl font-bold tracking-tight text-white mb-2">
            {displayValue(data.netSalary)}
         </div>
         <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md w-fit border border-emerald-500/20">
            <span>+ Salary Credited</span>
            <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
            <span>31 {data.month}</span>
         </div>
      </div>

      {/* LOP / Attendance Visual - "Tracker" Style */}
      <div className="relative z-10 mb-8">
         <div className="flex justify-between items-end mb-2">
             <div className="flex items-center gap-1.5 text-slate-400">
                <CalendarCheck size={12} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Attendance Tracker</span>
             </div>
             <p className="text-xs text-slate-300">
                <span className="text-white font-bold">{data.attendanceDays}</span>
                <span className="opacity-50">/{data.totalWorkingDays} Days</span>
             </p>
         </div>
         
         {/* Tracker Visual: Individual ticks */}
         <div className="flex h-2 gap-[3px] items-center">
             {Array.from({ length: data.totalWorkingDays }).map((_, i) => (
                 <div 
                     key={i}
                     className={`flex-1 rounded-full transition-all duration-300 ${
                         i < data.attendanceDays 
                         ? 'bg-gradient-to-b from-orange-300 to-brand-orange h-full shadow-[0_0_8px_rgba(249,115,22,0.4)] opacity-100' 
                         : 'bg-white/10 h-full'
                     }`}
                 />
             ))}
         </div>
      </div>

      {/* Bottom Section: Stacked Breakdown Bar */}
      <div className="relative z-10 mt-auto pt-4 border-t border-white/5">
        
        {/* Gross Label */}
        <div className="flex justify-between items-end mb-2">
           <span className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Gross Earnings</span>
           <span className="text-xs font-medium text-white opacity-80">{displayValue(data.grossSalary)}</span>
        </div>

        {/* Single Stacked Bar */}
        <div className="h-3 w-full flex rounded-md overflow-hidden bg-slate-800 ring-1 ring-white/5 mb-3">
           {/* Net Pay Segment */}
           <div 
              style={{ width: `${netPct}%` }} 
              className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)] relative group"
           ></div>
           
           {/* Deductions Segment */}
           <div 
              className="flex-1 h-full bg-slate-700/50 relative"
           >
              {/* Diagonal Stripes Pattern for "Deduction" feel */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]"></div>
           </div>
        </div>

        {/* Legend for Stacked Bar */}
        <div className="flex justify-between items-center mb-4">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <div className="flex flex-col leading-none">
                 <span className="text-[10px] text-slate-400">Net Pay</span>
                 <span className="text-xs font-bold text-white">{Math.round(netPct)}%</span>
              </div>
           </div>
           <div className="flex items-center gap-2 text-right">
              <div className="flex flex-col leading-none items-end">
                 <span className="text-[10px] text-slate-400">Deductions</span>
                 <span className="text-xs font-bold text-slate-300">{displayValue(data.deductions)}</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
           </div>
        </div>

        <button className="w-full py-3.5 rounded-xl bg-white text-slate-900 text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors shadow-lg shadow-black/25">
           View Detailed Slip <ChevronRight size={16} className="text-slate-400" />
        </button>
      </div>

    </div>
  );
};
