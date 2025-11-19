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
    <div className="min-h-screen bg-slate-50">
      <Navbar onHome={() => navigateTo('home')} />
      
      {currentView === 'home' ? (
        <HomePage onNavigate={(page) => {
          if (page === 'dashboard') navigateTo('dashboard');
        }} />
      ) : (
        <FinancialDashboard />
      )}
    </div>
  );
};

export default App;