export default function EmployAILogo({ className = "w-10 h-10" }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon ring - represents structure/framework */}
      <path 
        d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z" 
        stroke="currentColor" 
        strokeWidth="6" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Inner geometric person shape - represents employee */}
      <circle 
        cx="50" 
        cy="35" 
        r="8" 
        fill="currentColor"
      />
      
      {/* Body - abstract geometric form */}
      <path 
        d="M50 45 L35 65 M50 45 L65 65 M50 45 L50 70" 
        stroke="currentColor" 
        strokeWidth="5" 
        strokeLinecap="round"
      />
      
      {/* AI nodes/connections */}
      <circle cx="30" cy="50" r="3" fill="currentColor" />
      <circle cx="70" cy="50" r="3" fill="currentColor" />
      <circle cx="50" cy="75" r="3" fill="currentColor" />
      
      {/* Connecting lines - neural network style */}
      <line x1="35" y1="60" x2="30" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="65" y1="60" x2="70" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="50" y1="70" x2="50" y2="75" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    </svg>
  )
}
