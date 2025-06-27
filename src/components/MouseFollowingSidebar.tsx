import React, { useState, useEffect } from 'react';
import { BookOpen, Hash } from 'lucide-react';

interface SidebarSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  subsections?: { id: string; title: string }[];
}

interface MouseFollowingSidebarProps {
  sections: SidebarSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export const MouseFollowingSidebar: React.FC<MouseFollowingSidebarProps> = ({
  sections,
  activeSection,
  onSectionClick
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed left-4 top-1/2 transform -translate-y-1/2 w-64 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-40 transition-all duration-300 hover:bg-white dark:hover:bg-gray-800"
      style={{
        transform: `translate(${Math.min(mousePosition.x * 0.02, 20)}px, ${Math.min(mousePosition.y * 0.02 - window.innerHeight / 2, 20)}px)`
      }}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          Documentation
        </h3>
        <nav className="space-y-1 max-h-96 overflow-y-auto">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => onSectionClick(section.id)}
                className={`w-full flex items-center space-x-2 px-3 py-2 text-sm rounded-lg transition-colors text-left ${
                  activeSection === section.id
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {section.icon}
                <span className="font-medium">{section.title}</span>
              </button>
              {section.subsections && activeSection === section.id && (
                <div className="ml-6 mt-1 space-y-1">
                  {section.subsections.map((subsection) => (
                    <button
                      key={subsection.id}
                      onClick={() => onSectionClick(subsection.id)}
                      className="w-full flex items-center space-x-2 px-2 py-1 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                    >
                      <Hash className="w-3 h-3" />
                      <span>{subsection.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};