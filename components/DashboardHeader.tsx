import React from 'react';
import { EmployeeData } from '../types';
import { Eye, EyeOff, Bell, Search } from 'lucide-react';

interface DashboardHeaderProps {
  employee: EmployeeData;
  isPrivacyMode: boolean;
  onTogglePrivacy: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  employee, 
  isPrivacyMode, 
  onTogglePrivacy 
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6 pb-2">
      
      {/* Left: Clean Title Section */}
      <div className="relative z-10">
         <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-1 bg-brand-orange rounded-full"></div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Financial Overview</span>
         </div>
         <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            My Money
         </h1>
         <p className="text-slate-500 font-medium mt-1">
            Consolidated statement for <span className="text-slate-800 font-bold">FY 2025-26</span>
         </p>
      </div>

      {/* Right: Floating Control Capsule */}
      <div className="flex items-center bg-white p-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100">
          
          {/* Search & Notify (Icon only) */}
          <div className="flex items-center px-2 gap-1 border-r border-slate-100 mr-2">
             <button className="p-2 rounded-full text-slate-400 hover:bg-slate-50 hover:text-brand-orange transition-colors">
                <Search size={18} />
             </button>
             <button className="p-2 rounded-full text-slate-400 hover:bg-slate-50 hover:text-brand-orange transition-colors relative">
                <Bell size={18} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
             </button>
          </div>

          {/* Privacy Toggle */}
          <button 
            onClick={onTogglePrivacy}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 bg-slate-50 hover:bg-slate-100 text-slate-600 mr-2"
          >
            {isPrivacyMode ? <EyeOff size={14} /> : <Eye size={14} />}
            <span>{isPrivacyMode ? 'Values Hidden' : 'Show Values'}</span>
          </button>

          {/* Profile Circle */}
          <div className="flex items-center gap-3 pl-1 pr-1">
             <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm ring-2 ring-slate-100">
                {employee.name.split(' ').map(n => n[0]).join('')}
             </div>
             <div className="hidden lg:block pr-4">
                <p className="text-xs font-bold text-slate-800">{employee.name}</p>
                <p className="text-[10px] text-slate-400 font-medium truncate max-w-[100px]">{employee.designation}</p>
             </div>
          </div>

      </div>
    </div>
  );
};