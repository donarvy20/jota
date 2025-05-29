
import React from 'react';
import { Section, SectionId } from '../types';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  sections: Section[];
  currentSection: SectionId;
  onSelectSection: (sectionId: SectionId) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, sections, currentSection, onSelectSection }) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-sky-700 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Guía Interactiva: Programas de Segunda Especialización EESP</h1>
        <p className="text-sm">MINEDU - Orientaciones para la Implementación</p>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          sections={sections} 
          currentSection={currentSection} 
          onSelectSection={onSelectSection} 
        />
        <main className="flex-1 p-6 overflow-y-auto bg-slate-50">
          {children}
        </main>
      </div>
      <footer className="bg-slate-800 text-white text-center p-3 text-sm">
        Adaptado del OFICIO MÚLTIPLE N.º 00122-2024-MINEDU/VMGP-DIGEDD
      </footer>
    </div>
  );
};

export default Layout;
