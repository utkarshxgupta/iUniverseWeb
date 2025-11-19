import React from 'react';

export interface SalaryData {
  netSalary: number;
  grossSalary: number;
  deductions: number;
  currency: string;
  month: string;
  year: number;
  attendanceDays: number;
  totalWorkingDays: number;
}

export interface EmployeeData {
  name: string;
  id: string;
  designation: string;
  joiningDate: string;
}

export interface RetirementData {
  pfAmount: number;
  gratuityAmount: number;
  superannuationAmount: number;
}

export interface LinkItem {
  label: string;
  url: string;
  icon?: React.ReactNode;
  type?: 'internal' | 'external' | 'download';
}

export interface SectionProps {
  isPrivacyMode: boolean;
}