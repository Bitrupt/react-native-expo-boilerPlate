import { Colors } from '@/constants/Colors';

export const theme = {
  // Use Colors.ts as the single source of truth for colors
  colors: {
    // Core Brand Colors
    primary: Colors.primary,              // #5F4587 - Deep Purple
    secondary: Colors.secondary,          // #649EFF - Light Blue
    
    // Status Colors
    success: Colors.success,              // #6DB529 - Green
    warning: Colors.warning,              // #FF5D3D - Red Orange
    error: Colors.error,                  // #FF5D3D - Red Orange
    
    // Common Colors
    white: Colors.common.white,           // #FFFFFF
    black: Colors.common.black,           // #000000
    transparent: Colors.common.transparent,
    
    // Background Colors
    background: Colors.light.background,         // #FFFFFF
    backgroundSecondary: Colors.light.backgroundSecondary, // #F9FAFB
    surface: Colors.light.surface,               // #FFFFFF
    
    // Text Colors
    text: Colors.light.text,                     // #202020 - Very Dark Gray
    textSecondary: Colors.light.textSecondary,   // #7F7F7F - Medium Gray
    textMuted: Colors.light.textMuted,           // #ADADAD - Light Gray
    
    // Border Colors
    border: Colors.light.border,                 // #ADADAD
    borderLight: Colors.light.borderLight,       // #ADADAD50
    
    // Grayscale
    gray900: Colors.grayscale[900],       // #191919 - Almost Black
    gray800: Colors.grayscale[800],       // #202020 - Very Dark Gray
    gray700: Colors.grayscale[700],       // #373737 - Dark Gray
    gray600: Colors.grayscale[600],       // #7F7F7F - Medium Gray
    gray400: Colors.grayscale[400],       // #ADADAD - Light Gray
    
    // Background with Opacity
    primaryBackground: Colors.backgrounds.primary,     // #5F458733
    secondaryBackground: Colors.backgrounds.secondary, // #649EFF33
    
    // Dark Theme Colors (for future use)
    dark: {
      background: Colors.dark.background,         // #191919
      backgroundSecondary: Colors.dark.backgroundSecondary, // #202020
      surface: Colors.dark.surface,               // #373737
      text: Colors.dark.text,                     // #FFFFFF
      textSecondary: Colors.dark.textSecondary,   // #ADADAD
      border: Colors.dark.border,                 // #7F7F7F
    }
  },
  
  // Spacing System
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  // Border Radius System
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  
  // Typography System
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  // Shadow System
  shadow: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 8,
    },
  },
  
  // Component-Specific Styles
  button: {
    primary: Colors.primary,              // #5F4587
    secondary: Colors.secondary,          // #649EFF
    height: 48,
  },
  
  // Gradient Helper
  gradient: {
    start: Colors.gradient.start,         // #649EFF
    end: Colors.gradient.end,             // #693C99
  },
};