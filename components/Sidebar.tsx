
import React from 'react';
import { Section, SectionId } from '../types';

interface SidebarProps {
  sections: Section[];
  currentSection: SectionId;
  onSelectSection: (sectionId: SectionId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, currentSection, onSelectSection }) => {
  const renderSections = (parentId?: SectionId, level: number = 0) => {
    return sections
      .filter(s => s.level === level && (level === 0 ? !s.parentId : s.parentId === parentId))
      .map((section) => (
        <li key={section.id} className={`my-1 ${level > 0 ? 'ml-4' : ''}`}>
          <button
            onClick={() => onSelectSection(section.id)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-150 ease-in-out
              ${section.id === currentSection 
                ? 'bg-sky-600 text-white font-semibold shadow-sm' 
                : 'text-slate-100 hover:bg-sky-500 hover:text-white'
              }
            `}
          >
            {section.icon}
            {section.title}
          </button>
          {/* Render subsections if current section is this one or a parent of current section */}
          {(section.id === currentSection || sections.find(s => s.id === currentSection && s.parentId === section.id)) && 
            sections.some(s => s.parentId === section.id) && (
            <ul className="mt-1">
              {renderSections(section.id, level + 1)}
            </ul>
          )}
        </li>
      ));
  };

  return (
    <aside className="w-72 bg-sky-700 text-white p-4 space-y-2 overflow-y-auto shadow-lg">
      <nav>
        <ul className="space-y-1">
          {renderSections()}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
