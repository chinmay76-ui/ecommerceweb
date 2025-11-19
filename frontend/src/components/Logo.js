import React from "react";

const Logo = ({ w = 140, h = 40 }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 370 155"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LUXE logo"
      role="img"
    >
      {/* symbol / mark on left - simplified and scalable */}
    {/* put this inside your <svg> element (JSX-friendly) */}
<defs>
  {/* soft drop shadow */}
  <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
    <feOffset in="SourceAlpha" dx="0" dy="4" result="off" />
    <feGaussianBlur in="off" stdDeviation="6" result="blur" />
    <feColorMatrix in="blur" type="matrix"
      values="0 0 0 0 0
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 0.25" result="shadow"/>
    <feBlend in="SourceGraphic" in2="shadow" mode="normal"/>
  </filter>

  {/* subtle ring gradient */}
  <radialGradient id="ringGrad" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.0" />
    <stop offset="60%" stopColor="#ffffff" stopOpacity="0.05" />
    <stop offset="100%" stopColor="#000000" stopOpacity="0.08" />
  </radialGradient>

  {/* main glossy gradient */}
  <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#FF6B6B" />
    <stop offset="55%" stopColor="#FF3D7F" />
    <stop offset="100%" stopColor="#9B2BFF" />
  </linearGradient>

  {/* accent shine gradient */}
  <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stopColor="#ffffff" stopOpacity="0.7"/>
    <stop offset="1" stopColor="#ffffff" stopOpacity="0.0"/>
  </linearGradient>
</defs>

<g transform="translate(8,18) scale(0.9)" filter="url(#dropShadow)" style={{transformOrigin: 'center'}}>
  {/* outer stroke ring */}
  <circle cx="30" cy="30" r="31.5"
    fill="url(#ringGrad)"
    stroke="#111111"
    strokeWidth={2}
    opacity={0.9}
  />

  {/* main shape with glossy gradient */}
  <path
    d="M10 28c0-6 8-10 14-10s14 4 14 10-8 10-14 10S10 34 10 28z"
    fill="url(#mainGrad)"
    stroke="#220022"
    strokeWidth={1.2}
    strokeLinejoin="round"
    fillOpacity={0.98}
  />

  {/* subtle shine overlay */}
  <path
    d="M12 20c6 -6 16 -6 24 0"
    fill="none"
    stroke="url(#shine)"
    strokeWidth={4}
    strokeLinecap="round"
    opacity={0.6}
  />

  {/* inner highlight circle for depth */}
  <circle cx="30" cy="22" r="6" fill="#ffffff" fillOpacity={0.12} />

  {/* sparkle accents */}
  <g transform="translate(52,6) rotate(12)">
    <rect x="-1" y="-6" width="2" height="12" rx="1" fill="#fff" opacity="0.9" transform="rotate(45)"/>
    <rect x="-6" y="-1" width="12" height="2" rx="1" fill="#fff" opacity="0.9"/>
  </g>

  <g transform="translate(8,48) rotate(-30)">
    <rect x="-1" y="-5" width="2" height="10" rx="1" fill="#fff" opacity="0.7" transform="rotate(25)"/>
  </g>
</g>


      {/* Brand name: LUXE */}
      {/* Using serif-like appearance by opting for 'Georgia, Times, serif' fallback */}
      <text
        x="110"
        y="80"
        fill="#111"
        fontFamily="Georgia, 'Times New Roman', Times, serif"
        fontWeight="700"
        fontSize="76"
        letterSpacing="2"
      >
        LUXE
      </text>

      {/* Optional small slogan (comment out if not wanted) */}
      {/* <text x="110" y="102" fill="#555" fontFamily="Arial, sans-serif" fontSize="12">shop here</text> */}
    </svg>
  );
};

export default Logo;
