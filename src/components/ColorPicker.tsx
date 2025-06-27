import React, { useState, useRef, useEffect } from 'react';
import { Palette, ChevronDown } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
  size?: 'sm' | 'md';
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
];

export const ColorPicker: React.FC<ColorPickerProps> = ({ selectedColor, onColorChange, size = 'md' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<'top' | 'bottom'>('top');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedColorData = colorPresets.find((color) => color.value === selectedColor) || colorPresets[0];
  const isSmall = size === 'sm';

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceAbove = buttonRect.top;
      const spaceBelow = viewportHeight - buttonRect.bottom;
      const dropdownHeight = 400;

      if (spaceAbove > dropdownHeight) {
        setDropdownPosition('top');
      } else {
        setDropdownPosition('bottom');
      }
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 ${isSmall ? 'px-3 py-2' : 'px-4 py-2'} bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md`}
      >
        {!isSmall && <Palette className="w-4 h-4 text-gray-600 dark:text-gray-400" />}
        <div className="flex items-center space-x-2">
          <div
            className={`${isSmall ? 'w-4 h-4' : 'w-5 h-5'} rounded-full border-2 border-gray-300 dark:border-gray-500 shadow-sm`}
            style={{ backgroundColor: selectedColorData.hex }}
          />
          {!isSmall && (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {selectedColorData.name}
            </span>
          )}
        </div>
        {!isSmall && (
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {isOpen && typeof document !== 'undefined' && createPortal(
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div
            ref={dropdownRef}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top:
                (buttonRef.current?.getBoundingClientRect().bottom ?? 0) + window.scrollY -
                200,
              left:
                (buttonRef.current?.getBoundingClientRect().left ?? 0) + window.scrollX +
                (buttonRef.current?.getBoundingClientRect().width ?? 0) / 2,
              transform: 'translateX(-50%)',
            }}
            className={`
              z-[1000] p-6 bg-white dark:bg-gray-800 rounded-2xl 
              shadow-2xl border border-gray-200 dark:border-gray-700
              ${isSmall ? 'min-w-[380px]' : 'min-w-[420px]'} max-h-[500px] overflow-y-auto
              transform origin-top animate-fadeIn
            `}
          >
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Choose a Color</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Select from our curated color palette</p>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {colorPresets.map((color) => (
                <button
                  key={color.value}
                  onClick={() => {
                    onColorChange(color.value);
                    setIsOpen(false);
                  }}
                  className={`group relative p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 ${selectedColor === color.value ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}`}
                  title={`${color.name} - ${color.hex}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl mx-auto mb-2 border-2 border-white dark:border-gray-600 shadow-lg group-hover:scale-110 transition-transform duration-200 ${selectedColor === color.value ? 'ring-2 ring-white ring-offset-2 ring-offset-blue-500' : ''}`}
                    style={{ backgroundColor: color.hex }}
                  />
                  <span
                    className={`text-xs font-medium block text-center transition-colors ${selectedColor === color.value
                      ? 'text-blue-700 dark:text-blue-300'
                      : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    {color.name}
                  </span>
                  {selectedColor === color.value && (
                    <div className="absolute top-1 right-1 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Selected: {selectedColorData.name}
                </span>
                <div className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded border border-gray-300 dark:border-gray-500"
                    style={{ backgroundColor: selectedColorData.hex }}
                  />
                  <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                    {selectedColorData.hex}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </div>
  );
};
