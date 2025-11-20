import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { FinancialDashboard } from './components/FinancialDashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'dashboard'>('home');

  const navigateTo = (view: 'home' | 'dashboard') => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Global Background - Shared across all pages */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#F8FAFC]">
          {/* Ambient Blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-100/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10">
        <Navbar onHome={() => navigateTo('home')} />
        
        {currentView === 'home' ? (
          <HomePage onNavigate={(page) => {
            if (page === 'dashboard') navigateTo('dashboard');
          }} />
        ) : (
          <FinancialDashboard />
        )}
      </div>
    </div>
  );
};

export default App;