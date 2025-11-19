import React, { useState } from 'react';
import { SalaryCard } from './SalaryCard';
import { QuickLinks } from './QuickLinks';
import { RetirementSection } from './RetirementSection';
import { InvestmentsSection, LoansSection } from './ActionGrid';
import { DashboardHeader } from './DashboardHeader';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { SalaryData, RetirementData, EmployeeData } from '../types';

// Mock Data
const MOCK_SALARY: SalaryData = {
  netSalary: 125429.21,
  grossSalary: 138229.73,
  deductions: 12800.52,
  currency: 'INR',
  month: 'Sep',
  year: 2025,
  attendanceDays: 28,
  totalWorkingDays: 30
};

const MOCK_EMPLOYEE: EmployeeData = {
  name: "Utkarsh Sharma",
  id: "EMP102345",
  designation: "Senior Software Engineer",
  joiningDate: "12 Aug 2021"
};

const MOCK_RETIREMENT: RetirementData = {
  pfAmount: 103855.03,
  gratuityAmount: 45000.00,
  superannuationAmount: 12500.00
};

const PromoBanner: React.FC = () => (
  <div className="bg-gradient-to-br from-[#1e3a8a] to-[#172554] rounded-[2rem] p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-blue-900/20 relative overflow-hidden group cursor-pointer hover:scale-[1.005] transition-transform duration-500">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-400 opacity-10 rounded-full -translate-x-1/4 translate-y-1/4 blur-2xl"></div>
    
    <div className="relative z-10 flex items-start gap-6 max-w-2xl">
      <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 shadow-inner shrink-0 hidden md:block">
        <TrendingUp size={28} className="text-blue-200" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-1 tracking-tight">Zero Brokerage Trading</h3>
        <p className="text-blue-100 text-sm leading-relaxed opacity-90">
          Open a 3-in-1 account today and get free equity delivery for 1 year.
        </p>
      </div>
    </div>
    
    <button className="relative z-10 mt-6 md:mt-0 px-6 py-3 bg-white text-[#1e3a8a] font-bold rounded-xl text-xs hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-lg shrink-0">
      Open Account <ArrowRight size={14} />
    </button>
  </div>
);

export const FinancialDashboard: React.FC = () => {
  const [isPrivacyMode, setIsPrivacyMode] = useState<boolean>(false);

  const togglePrivacy = () => setIsPrivacyMode(prev => !prev);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-32">
      
      {/* Header Section: Profile & Title */}
      <DashboardHeader 
        employee={MOCK_EMPLOYEE} 
        isPrivacyMode={isPrivacyMode} 
        onTogglePrivacy={togglePrivacy} 
      />

      {/* Main Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Essentials (Salary + Quick Tools) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
           {/* Salary Card - Now compact and dark themed */}
           <SalaryCard data={MOCK_SALARY} isPrivacyMode={isPrivacyMode} />
           
           {/* Quick Actions - Moved here for vertical balance */}
           <div className="grid grid-cols-2 gap-4">
              <QuickLinks />
           </div>

           {/* Mini Promo for Mobile/Tablet */}
           <div className="lg:hidden bg-orange-50 border border-orange-100 rounded-[2rem] p-6 text-center">
              <p className="text-brand-orange font-bold text-lg mb-1">Need Funds?</p>
              <p className="text-slate-600 text-sm mb-4">Get instant personal loans up to ₹15 Lakhs.</p>
              <button className="text-xs font-bold uppercase tracking-wider text-white bg-brand-orange px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">Check Eligibility</button>
           </div>
        </div>

        {/* Right Column: Portfolio (Retirement + Actions) */}
        <div className="lg:col-span-8 flex flex-col gap-6 h-full">
          
          {/* Top Row: Retirement Portfolio */}
          <RetirementSection data={MOCK_RETIREMENT} isPrivacyMode={isPrivacyMode} />
          
          {/* Middle Row: Split Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
             <InvestmentsSection />
             <LoansSection />
          </div>

          {/* Bottom Banner */}
          <PromoBanner />

        </div>

      </div>

      <footer className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-slate-400">
        <p>&copy; 2025 ICICI Bank Ltd.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-slate-600 transition-colors">Compensation Policy</a>
           <a href="#" className="hover:text-slate-600 transition-colors">Tax Guidelines</a>
           <a href="#" className="hover:text-slate-600 transition-colors">Support</a>
        </div>
      </footer>
    </div>
  );
};