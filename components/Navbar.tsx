import React from 'react';
import { Phone, User, ChevronDown, LogOut, Settings, HelpCircle, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onHome?: () => void;
}

const NavItem: React.FC<{ label: string; children?: React.ReactNode }> = ({ label, children }) => {
  return (
    <div className="relative group h-full flex items-center">
      <button className="flex items-center gap-1 px-3 py-2 text-white font-medium hover:bg-white/10 rounded-md transition-colors">
        {label}
        {children && <ChevronDown size={14} className="opacity-80 group-hover:rotate-180 transition-transform duration-200" />}
      </button>

      {children && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-visible">
          <div className="py-1">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors">
    {children}
  </a>
);

const DropdownGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="relative group/nested">
    <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors text-left">
      {label}
      <ChevronRight size={14} />
    </button>
    <div className="absolute left-full top-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 transform translate-x-2 group-hover/nested:translate-x-0 z-50 overflow-hidden">
      <div className="py-1">
        {children}
      </div>
    </div>
  </div>
);

export const Navbar: React.FC<NavbarProps> = ({ onHome }) => {
  return (
    <nav className="bg-gradient-to-r from-brand-orange to-[#e06d1b] shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={onHome}>
            <div className="flex items-center gap-2">
              <img src="/assets/icici-header-logo.png" alt="ICICI Bank" className="h-10 w-auto object-contain" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center h-full space-x-2">
            <NavItem label="My Requests">
              <DropdownGroup label="Personal Information">
                <DropdownLink href="#">Personal Information Summary</DropdownLink>
                <DropdownLink href="#">Salary Account Details</DropdownLink>
                <DropdownLink href="#">Cost Center Updation</DropdownLink>
                <DropdownLink href="#">PAN Updation</DropdownLink>
                <DropdownLink href="#">Relatives Declaration</DropdownLink>
              </DropdownGroup>
              <DropdownLink href="#">Update Nominee Details</DropdownLink>
              <DropdownLink href="#">Mobile NOC Letter</DropdownLink>
              <DropdownLink href="#">Self-help Letters</DropdownLink>
              <DropdownLink href="#">Resignation</DropdownLink>
              <DropdownLink href="#">IT Assets</DropdownLink>
              <DropdownLink href="#">Declaration and Nomination</DropdownLink>
            </NavItem>
            <NavItem label="My Wellness">
              <DropdownLink href="#">Creche Facility</DropdownLink>
              <DropdownGroup label="Emergency Services">
                <DropdownLink href="#">Emergency Numbers</DropdownLink>
                <DropdownLink href="#">Emergency Hospitals</DropdownLink>
              </DropdownGroup>
              <DropdownLink href="#">Dependent Enrollment</DropdownLink>
              <DropdownLink href="#">Medical Claim</DropdownLink>
              <DropdownLink href="#">Cashless Hospitals</DropdownLink>
              <DropdownLink href="#">Diagnostic Centres</DropdownLink>
              <DropdownLink href="#">Ambulance Services</DropdownLink>
              <DropdownLink href="#">Enrollment in Parental Policy</DropdownLink>
              <DropdownLink href="#">Hospitalization: Non-payable Items</DropdownLink>
              <DropdownLink href="#">UHID/Health Card (Group Medical Insurance)</DropdownLink>
            </NavItem>
            <NavItem label="Support">
              <DropdownLink href="#">FAQs</DropdownLink>
              <DropdownLink href="#">iCare</DropdownLink>
              <DropdownLink href="#">iHelpdesk</DropdownLink>
              <DropdownLink href="#">Policies</DropdownLink>
            </NavItem>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 text-white/90 text-sm font-medium bg-black/10 px-3 py-1.5 rounded-full">
              <Phone size={16} />
              <span>022-71872500</span>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-2 bg-white text-brand-orange px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all active:scale-95">
                <span>Profile</span>
                <ChevronDown size={16} />
              </button>

              {/* Profile Dropdown */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="p-2">
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    <User size={16} /> My Profile
                  </a>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    <Settings size={16} /> Settings
                  </a>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    <HelpCircle size={16} /> Help
                  </a>
                  <div className="h-px bg-gray-100 my-1"></div>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md">
                    <LogOut size={16} /> Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};