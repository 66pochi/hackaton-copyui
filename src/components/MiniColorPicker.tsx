import React, { useState, useRef, useEffect } from 'react';
import { Palette, ChevronDown } from 'lucide-react';

interface MiniColorPickerProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const colorPresets = [
  { name: 'Blue', value: 'blue', hex: '#3B82F6' },
  { name: 'Purple', value: 'purple', hex: '#8B5CF6' },
  { name: 'Pink', value: 'pink', hex: '#EC4899' },
  { name: 'Green', value: 'green', hex: '#10B981' },
  { name: 'Red', value: 'red', hex: '#EF4444' },
  { name: 'Orange', value: 'orange', hex: '#F97316' },
  { name: 'Teal', value: 'teal', hex: '#14B8A6' },
  { name: 'Indigo', value: 'indigo', hex: '#6366F1' },
  { name: 'Yellow', value: 'yellow', hex: '#EAB308' },
  { name: 'Emerald', value: 'emerald', hex: '#059669' },
  { name: 'Cyan', value: 'cyan', hex: '#06B6D4' },
  { name: 'Rose', value: 'rose', hex: '#F43F5E' },
  { name: 'Violet', value: 'violet', hex: '#7C3AED' },
  { name: 'Amber', value: 'amber', hex: '#F59E0B' },
  { name: 'Lime', value: 'lime', hex: '#84CC16' },
  { name: 'Sky', value: 'sky', hex: '#0EA5E9' },
  { name: 'Fuchsia', value: 'fuchsia', hex: '#D946EF' },
];

export const MiniColorPicker: React.FC<MiniColorPickerProps> = ({ selectedColor, onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const selectedColorData = colorPresets.find(color => color.value === selectedColor) || colorPresets[0];

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <div 
          className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500 shadow-sm"
          style={{ backgroundColor: selectedColorData.hex }}
        />
        <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          ref={popupRef}
          className="absolute top-full left-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-[9999] min-w-[320px]"
          style={{ zIndex: 9999 }}
        >
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Choose Color</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Select from available colors</p>
          </div>
          
          <div className="grid grid-cols-6 gap-2 mb-4">
            {colorPresets.map((color) => (
              <button
                key={color.value}
                onClick={() => {
                  onColorChange(color.value);
                  setIsOpen(false);
                }}
                className={`group relative p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 ${
                  selectedColor === color.value ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''
                }`}
                title={`${color.name} - ${color.hex}`}
              >
                <div 
                  className={`w-8 h-8 rounded-lg mx-auto border-2 border-white dark:border-gray-600 shadow-md group-hover:scale-110 transition-transform duration-200 ${
                    selectedColor === color.value ? 'ring-2 ring-white ring-offset-2 ring-offset-blue-500' : ''
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
                
                {selectedColor === color.value && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
          
          <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Selected: {selectedColorData.name}
              </span>
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded border border-gray-300 dark:border-gray-500"
                  style={{ backgroundColor: selectedColorData.hex }}
                />
                <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                  {selectedColorData.hex}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};