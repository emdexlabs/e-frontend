import React from 'react';

interface LogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
  textColor?: string;
}

export default function Logo({ 
  className = "", 
  iconSize = 40, 
  showText = true,
  textColor = "text-[#4A4A4A]"
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Circuit-based Logo Icon */}
      <div className="relative" style={{ width: iconSize, height: iconSize }}>
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circuit Board Background */}
          <rect
            x="4"
            y="4"
            width="40"
            height="40"
            rx="8"
            fill="url(#circuitGradient)"
          />
          
          {/* Circuit Lines - Horizontal */}
          <line x1="8" y1="16" x2="20" y2="16" stroke="#FEEEE3" strokeWidth="1.5" opacity="0.6" />
          <line x1="28" y1="16" x2="40" y2="16" stroke="#FEEEE3" strokeWidth="1.5" opacity="0.6" />
          <line x1="8" y1="24" x2="16" y2="24" stroke="#FEEEE3" strokeWidth="1.5" opacity="0.6" />
          <line x1="32" y1="24" x2="40" y2="24" stroke="#FEEEE3" strokeWidth="1.5" opacity="0.6" />
          <line x1="8" y1="32" x2="20" y2="32" stroke="#FEEEE3" strokeWidth="1.5" opacity="0.6" />
          <line x1="28" y1="32" x2="40" y2="32" stroke="#FEEEE3" strokeWidth="1.5" opacity="0.6" />
          
          {/* Circuit Lines - Vertical */}
          <line x1="16" y1="8" x2="16" y2="20" stroke="#FEEEE3" strokeWidth="1.5" opacity="0.6" />
          <line x1="16" y1="28" x2="16" y2="40" stroke="#FEEEE3" strokeWidth="1.5" opacity="0.6" />
          <line x1="32" y1="8" x2="32" y2="20" stroke="#FEEEE3" strokeWidth="1.5" opacity="0.6" />
          <line x1="32" y1="28" x2="32" y2="40" stroke="#FEEEE3" strokeWidth="1.5" opacity="0.6" />
          
          {/* Circuit Nodes */}
          <circle cx="16" cy="16" r="2.5" fill="#FEEEE3" />
          <circle cx="32" cy="16" r="2.5" fill="#FEEEE3" />
          <circle cx="24" cy="24" r="3" fill="#FEEEE3" />
          <circle cx="16" cy="32" r="2.5" fill="#FEEEE3" />
          <circle cx="32" cy="32" r="2.5" fill="#FEEEE3" />
          
          {/* Central "E" Shape */}
          <path
            d="M20 18 L28 18 L28 20 L22 20 L22 23 L27 23 L27 25 L22 25 L22 28 L28 28 L28 30 L20 30 Z"
            fill="#FEEEE3"
            opacity="0.95"
          />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="circuitGradient" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6D8196" />
              <stop offset="100%" stopColor="#5A6B7E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Bold Typography */}
      {showText && (
        <div className="flex items-baseline gap-2">
          <span 
            className={`font-black tracking-tight ${textColor}`}
            style={{ 
              fontFamily: "'Inter', 'Geist', sans-serif", 
              fontSize: iconSize * 0.5,
              letterSpacing: '-0.03em',
              fontWeight: 900
            }}
          >
            EMDEX
          </span>
          <span 
            className="font-black tracking-tight text-[#6D8196]"
            style={{ 
              fontFamily: "'Inter', 'Geist', sans-serif", 
              fontSize: iconSize * 0.5,
              letterSpacing: '-0.03em',
              fontWeight: 900
            }}
          >
            LABS
          </span>
        </div>
      )}
    </div>
  );
}
