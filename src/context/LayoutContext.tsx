"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LayoutContextType {
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
  sidebarWidth: string;
  headerHeight: string;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const value = {
    isExpanded,
    setIsExpanded,
    sidebarWidth: isExpanded ? '240px' : '64px',
    headerHeight: '64px',
    theme,
    setTheme
  };

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}