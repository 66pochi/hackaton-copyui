import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const ScrollProgress: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 dark:bg-gray-800/50 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
};