import React, { useState } from 'react';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'filled' | 'outlined' | 'gradient';
  color?: string;
  loading?: boolean;
}

export const RippleButton: React.FC<RippleButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'filled',
  color = 'blue',
  loading = false
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    onClick?.();
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return `border-2 border-${color}-500 text-${color}-500 hover:bg-${color}-50 dark:hover:bg-${color}-900/20`;
      case 'gradient':
        return `bg-gradient-to-r from-${color}-500 to-${color}-600 text-white hover:from-${color}-600 hover:to-${color}-700`;
      default:
        return `bg-${color}-500 text-white hover:bg-${color}-600`;
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`
        relative overflow-hidden px-6 py-3 rounded-lg font-medium transition-all duration-200 
        transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        ${getVariantClasses()} ${className}
      `}
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
      
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};