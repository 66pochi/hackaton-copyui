import React from 'react';

export const FreeUILogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        
        {/* Main circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#logoGradient)"
          className="drop-shadow-lg"
        />
        
        {/* Inner design - Abstract UI elements */}
        <g fill="url(#innerGradient)">
          {/* Top bar (like a navbar) */}
          <rect x="20" y="25" width="60" height="4" rx="2" />
          <circle cx="25" cy="27" r="1.5" />
          <circle cx="30" cy="27" r="1.5" />
          <circle cx="35" cy="27" r="1.5" />
          
          {/* Main content area */}
          <rect x="20" y="35" width="25" height="15" rx="3" opacity="0.8" />
          <rect x="50" y="35" width="30" height="8" rx="2" opacity="0.6" />
          <rect x="50" y="46" width="20" height="4" rx="1" opacity="0.4" />
          
          {/* Bottom elements */}
          <rect x="20" y="55" width="60" height="6" rx="3" opacity="0.7" />
          <rect x="20" y="65" width="40" height="4" rx="2" opacity="0.5" />
          <rect x="20" y="72" width="35" height="4" rx="2" opacity="0.3" />
        </g>
        
        {/* Floating elements for "free" concept */}
        <g fill="#FFFFFF" opacity="0.9">
          <circle cx="75" cy="20" r="2" className="animate-pulse" />
          <circle cx="85" cy="35" r="1.5" className="animate-pulse" style={{animationDelay: '0.5s'}} />
          <circle cx="15" cy="75" r="1.5" className="animate-pulse" style={{animationDelay: '1s'}} />
        </g>
      </svg>
    </div>
  );
};