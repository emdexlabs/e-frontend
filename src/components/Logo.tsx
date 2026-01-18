import React from "react";

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
  textColor = "text-foreground",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Generic Placeholder Icon */}
      <div
        className="relative flex items-center justify-center bg-primary/10 rounded-xl"
        style={{ width: iconSize, height: iconSize }}
      >
        <div className="w-1/2 h-1/2 bg-primary rounded-md" />
      </div>

      {/* Modern Wordmark - Bold & Wide */}
      {showText && (
        <div className="flex flex-col justify-center gap-0.5">
          <span
            className={`font-black tracking-widest uppercase leading-none ${textColor}`}
            style={{
              fontSize: iconSize * 0.6,
            }}
          >
            Emdex
          </span>
          <span
            className="text-primary font-medium uppercase tracking-[0.35em]"
            style={{
              fontSize: iconSize * 0.25,
              marginLeft: "2px",
            }}
          >
            Labs
          </span>
        </div>
      )}
    </div>
  );
}
