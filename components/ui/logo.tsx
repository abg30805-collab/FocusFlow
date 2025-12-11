'use client';

/**
 * Logo Component with Multiple Variants
 * 
 * Usage Examples:
 * - Default (FF Monogram): <Logo size={80} />
 * - App Icon Style: <Logo size={64} rounded variant="gradient-circle" />
 * - Switch Variants: <Logo variant="concentric-rings" />
 * 
 * Available Variants:
 * - 'ff-monogram' (default): Minimal "FF" monogram with flowing design
 * - 'concentric-rings': Multiple concentric circles representing flow and focus
 * - 'layered-paths': Overlapping curved paths creating depth
 * - 'focus-target': Target/bullseye with flowing elements
 * - 'geometric-blocks' (defaults to Option E): Minimal corner formation
 * - 'geometric-blocks-a': Aligned grid with clean lines
 * - 'geometric-blocks-b': Minimal stack with single flow
 * - 'geometric-blocks-c': Balanced composition
 * - 'geometric-blocks-d': Organized row with subtle flow
 * - 'geometric-blocks-e': Minimal corner formation (L-shape)
 * - 'gradient-circle': Bold gradient circle with flowing lines
 */

type LogoVariant = 
  | 'concentric-rings'      // Option 1
  | 'layered-paths'         // Option 2
  | 'focus-target'          // Option 3
  | 'geometric-blocks'      // Option 4 (defaults to Option E)
  | 'geometric-blocks-a'    // Option 4A: Aligned Grid
  | 'geometric-blocks-b'    // Option 4B: Minimal Stack
  | 'geometric-blocks-c'    // Option 4C: Balanced Composition
  | 'geometric-blocks-d'    // Option 4D: Organized Row
  | 'geometric-blocks-e'    // Option 4E: Minimal Corner (default)
  | 'gradient-circle'       // Option 5
  | 'ff-monogram';          // Option 6 (default)

interface LogoProps {
  size?: number;
  className?: string;
  variant?: LogoVariant;
  rounded?: boolean; // For app icon style with rounded corners
}

export function Logo({ 
  size = 80, 
  className = '', 
  variant = 'geometric-blocks',
  rounded = false 
}: LogoProps) {
  // Pastel colors matching the brand
  const colors = {
    teal: 'rgb(144, 224, 216)',      // Soft teal/mint green
    purple: 'rgb(200, 180, 220)',    // Light purple/lavender
    pink: 'rgb(255, 192, 203)',       // Light pink
    primary: 'rgb(72, 187, 180)',     // Primary teal
    darkBlue: 'rgb(30, 50, 70)',     // Dark blue for app icon background
  };

  // Rounded corner radius for app icon style (typically 20-25% of size)
  const cornerRadius = rounded ? size * 0.22 : 0;
  
  // Unique ID for gradients to avoid conflicts
  const uniqueId = `logo-${variant}-${size}-${Math.random().toString(36).substr(2, 9)}`;

  const renderLogo = () => {
    switch (variant) {
      case 'concentric-rings':
        return (
          <>
            <defs>
              <linearGradient id={`gradient-teal-purple-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.teal} />
                <stop offset="100%" stopColor={colors.purple} />
              </linearGradient>
            </defs>
            {/* Concentric Flow Rings - Option 1 */}
            <circle cx="50" cy="50" r="40" fill={`url(#gradient-teal-purple-${uniqueId})`} opacity="0.3" />
            <circle cx="50" cy="50" r="30" fill="none" stroke={colors.teal} strokeWidth="2" opacity="0.6" />
            <circle cx="50" cy="50" r="20" fill="none" stroke={colors.purple} strokeWidth="2" opacity="0.6" />
            <circle cx="50" cy="50" r="10" fill="none" stroke={colors.pink} strokeWidth="2" opacity="0.6" />
            <circle cx="50" cy="50" r="4" fill={colors.primary} />
          </>
        );

      case 'layered-paths':
        return (
          <>
            {/* Layered Flow Paths - Option 2 */}
            <path
              d="M 20 50 Q 50 20, 80 50"
              stroke={colors.teal}
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M 20 50 Q 50 40, 80 50"
              stroke={colors.purple}
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M 20 50 Q 50 60, 80 50"
              stroke={colors.pink}
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M 20 50 Q 50 30, 80 50"
              stroke={colors.primary}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M 20 50 Q 50 70, 80 50"
              stroke={colors.primary}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
          </>
        );

      case 'focus-target':
        return (
          <>
            {/* Focus Target with Flow - Option 3 */}
            <circle cx="50" cy="50" r="35" fill="none" stroke={colors.teal} strokeWidth="2" opacity="0.4" />
            <circle cx="50" cy="50" r="25" fill="none" stroke={colors.purple} strokeWidth="2" opacity="0.5" />
            <circle cx="50" cy="50" r="15" fill="none" stroke={colors.pink} strokeWidth="2" opacity="0.6" />
            <circle cx="50" cy="50" r="8" fill={colors.primary} />
            {/* Flowing lines around target */}
            <path
              d="M 15 50 Q 35 30, 50 20"
              stroke={colors.teal}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M 85 50 Q 65 30, 50 20"
              stroke={colors.purple}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M 15 50 Q 35 70, 50 80"
              stroke={colors.pink}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M 85 50 Q 65 70, 50 80"
              stroke={colors.teal}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </>
        );

      case 'geometric-blocks':
      case 'geometric-blocks-e':
        // Option E: Minimal Corner Formation (Default)
        return (
          <>
            {/* 3 blocks forming L-shape corner */}
            <rect x="20" y="25" width="20" height="20" rx="2.5" fill={colors.teal} opacity="0.7" />
            <rect x="50" y="25" width="20" height="20" rx="2.5" fill={colors.purple} opacity="0.7" />
            <rect x="20" y="55" width="20" height="20" rx="2.5" fill={colors.pink} opacity="0.7" />
            {/* Two clean lines forming the corner */}
            <path
              d="M 30 35 L 60 35"
              stroke={colors.primary}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M 30 35 L 30 65"
              stroke={colors.primary}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </>
        );

      case 'geometric-blocks-a':
        // Option A: Aligned Grid with Clean Lines
        return (
          <>
            {/* 3 blocks in clean horizontal row */}
            <rect x="25" y="40" width="14" height="14" rx="2" fill={colors.teal} opacity="0.7" />
            <rect x="43" y="40" width="14" height="14" rx="2" fill={colors.purple} opacity="0.7" />
            <rect x="61" y="40" width="14" height="14" rx="2" fill={colors.pink} opacity="0.7" />
            {/* Single smooth curve connecting blocks */}
            <path
              d="M 32 47 Q 50 35, 68 47"
              stroke={colors.primary}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </>
        );

      case 'geometric-blocks-b':
        // Option B: Minimal Stack with Single Flow
        return (
          <>
            {/* 3 blocks in flowing diagonal line */}
            <rect x="30" y="30" width="14" height="14" rx="2" fill={colors.teal} opacity="0.7" transform="rotate(5 37 37)" />
            <rect x="43" y="43" width="14" height="14" rx="2" fill={colors.purple} opacity="0.7" transform="rotate(10 50 50)" />
            <rect x="56" y="56" width="14" height="14" rx="2" fill={colors.pink} opacity="0.7" transform="rotate(15 63 63)" />
            {/* One elegant curved path following the flow */}
            <path
              d="M 37 37 Q 50 50, 63 63"
              stroke={colors.primary}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </>
        );

      case 'geometric-blocks-c':
        // Option C: Balanced Composition
        return (
          <>
            {/* 3 blocks in triangular/arc formation */}
            <rect x="40" y="30" width="14" height="14" rx="2" fill={colors.teal} opacity="0.7" />
            <rect x="25" y="55" width="14" height="14" rx="2" fill={colors.purple} opacity="0.7" />
            <rect x="55" y="55" width="14" height="14" rx="2" fill={colors.pink} opacity="0.7" />
            {/* Smooth arc connecting all three points */}
            <path
              d="M 47 37 Q 20 60, 32 62 Q 50 65, 62 62"
              stroke={colors.primary}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </>
        );

      case 'geometric-blocks-d':
        // Option D: Organized Row with Subtle Flow
        return (
          <>
            {/* 3 blocks in row with subtle vertical offset */}
            <rect x="25" y="38" width="14" height="14" rx="2" fill={colors.teal} opacity="0.7" />
            <rect x="43" y="42" width="14" height="14" rx="2" fill={colors.purple} opacity="0.7" />
            <rect x="61" y="38" width="14" height="14" rx="2" fill={colors.pink} opacity="0.7" />
            {/* Gentle wave connecting blocks */}
            <path
              d="M 32 45 Q 50 49, 68 45"
              stroke={colors.primary}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </>
        );

      case 'gradient-circle':
        return (
          <>
            <defs>
              <linearGradient id={`gradient-circle-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.teal} />
                <stop offset="50%" stopColor={colors.purple} />
                <stop offset="100%" stopColor={colors.pink} />
              </linearGradient>
            </defs>
            {/* Gradient Circle with Flow Lines - Option 5 */}
            <circle cx="50" cy="50" r="38" fill={`url(#gradient-circle-${uniqueId})`} />
            {/* Flowing lines overlay */}
            <path
              d="M 20 50 Q 50 25, 80 50"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
            <path
              d="M 20 50 Q 50 75, 80 50"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
            <circle cx="50" cy="50" r="5" fill="white" />
          </>
        );

      case 'ff-monogram':
      default:
        return (
          <>
            {/* Minimal "FF" Monogram - Option 6 (Default) */}
            {/* First F */}
            <path
              d="M 25 20 L 25 80 M 25 20 L 45 20 M 25 45 L 40 45 M 25 45 L 25 80"
              stroke={colors.primary}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Second F - flowing into first */}
            <path
              d="M 55 20 L 55 80 M 55 20 Q 70 20, 75 30 M 55 45 Q 70 45, 75 55 M 55 45 L 55 80"
              stroke={colors.purple}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Connecting flow line between F's */}
            <path
              d="M 45 45 Q 50 50, 55 45"
              stroke={colors.teal}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
          </>
        );
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={rounded ? { borderRadius: `${cornerRadius}px` } : {}}
    >
      <defs>
        {rounded && (
          <linearGradient id={`bg-gradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.teal} stopOpacity="0.1" />
            <stop offset="100%" stopColor={colors.purple} stopOpacity="0.1" />
          </linearGradient>
        )}
      </defs>
      {/* Rounded square background for app icon style */}
      {rounded && (
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx={cornerRadius * (100 / size)}
          fill={`url(#bg-gradient-${uniqueId})`}
        />
      )}
      {renderLogo()}
    </svg>
  );
}
