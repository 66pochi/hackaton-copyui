import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  preview: React.ReactNode;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
}

export const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ items }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`overflow-hidden transition-all duration-1000 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex animate-scroll space-x-6">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {item.description}
            </p>
            <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              {item.preview}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};