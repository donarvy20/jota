
import React, { useState, useCallback } from 'react';
import { SECTIONS } from './constants';
import { SectionId } from './types'; // Corrected import
import Layout from './components/Layout';
import ContentRenderer from './components/ContentRenderer';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionId>(SECTIONS[0].id);

  const handleSelectSection = useCallback((sectionId: SectionId) => {
    setCurrentSection(sectionId);
  }, []);

  return (
    <Layout
      sections={SECTIONS}
      currentSection={currentSection}
      onSelectSection={handleSelectSection}
    >
      <ContentRenderer currentSection={currentSection} />
    </Layout>
  );
};

export default App;
