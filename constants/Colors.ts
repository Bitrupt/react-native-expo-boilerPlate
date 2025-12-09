/**
 * InvestWizz Color System based on Figma Design
 * Linear gradient: #649EFF (left) → #693C99 (right)
 */

 const tintColorLight = '#5F4587'; // Deep Purple
 const tintColorDark = '#649EFF';  // Light Blue
 
 export const Colors = {
   // Core Brand Colors
   primary: '#5F4587',   // Deep Purple - Main brand color
   secondary: '#649EFF', // Light Blue - Secondary brand color
   
   // Status Colors
   success: '#6DB529',   // Green - Success states
   warning: '#FF5D3D',   // Red Orange - Warning/Error states
   error: '#FF5D3D',     // Red Orange - Error states
   alert:'#FFBA19',        // yellow color
   
   // Gradient Colors
   gradient: {
     start: '#649EFF',   // Light Blue - Left side of gradient
     end: '#693C99',     // Dark Purple - Right side of gradient
   },
   
   // Grayscale (Dark to Light)
   grayscale: {
     900: '#191919',     // Almost Black - Input field color
     800: '#202020',     // Very Dark Gray - Darkest shade
     700: '#373737',     // Dark Gray - Social button background
     600: '#7F7F7F',     // Medium Gray - Mid-tone
     400: '#ADADAD',     // Light Gray - Lightest shade
   },
   
   // Background Colors with Opacity
   backgrounds: {
     primary: '#5F458733',   // Deep Purple with 20% opacity
     secondary: '#649EFF33', // Light Blue with 20% opacity
     white: '#FFFFFF',       // Pure White
     black: '#000000',       // Pure Black
   },
   
   // Light Theme
   light: {
     text: '#202020',              // Very Dark Gray - Primary text
     textSecondary: '#7F7F7F',     // Medium Gray - Secondary text
     textMuted: '#ADADAD',         // Light Gray - Muted/disabled text
     background: '#FFFFFF',        // Pure White - Main background
     backgroundSecondary: '#F9FAFB', // Off White - Secondary background
     surface: '#FFFFFF',           // Pure White - Card/surface background
     border: '#ADADAD',            // Light Gray - Border color
     borderLight: '#ADADAD50',     // Light Gray 50% - Subtle borders
     inputBackground: '#191919',   // Almost Black - Input field background
     socialButtonBg: '#373737',    // Dark Gray - Social button background
     tint: tintColorLight,         // Deep Purple - Tint color
     icon: '#7F7F7F',             // Medium Gray - Default icon color
     tabIconDefault: '#7F7F7F',    // Medium Gray - Inactive tab icons
     tabIconSelected: tintColorLight, // Deep Purple - Active tab icons
     
     // Status colors for light theme
     success: '#6DB529',           // Green - Success color
     warning: '#FF5D3D',           // Red Orange - Warning color
     error: '#FF5D3D',             // Red Orange - Error color
     
     // Gradient for light theme
     gradientStart: '#649EFF',     // Light Blue - Gradient start
     gradientEnd: '#693C99',       // Dark Purple - Gradient end
   },
   
   // Dark Theme
   dark: {
     text: '#FFFFFF',              // Pure White - Primary text
     textSecondary: '#ADADAD',     // Light Gray - Secondary text
     textMuted: '#7F7F7F',         // Medium Gray - Muted/disabled text
     background: '#191919',        // Almost Black - Main background
     backgroundSecondary: '#202020', // Very Dark Gray - Secondary background
     surface: '#373737',           // Dark Gray - Card/surface background
     border: '#7F7F7F',            // Medium Gray - Border color
     borderLight: '#7F7F7F50',     // Medium Gray 50% - Subtle borders
     inputBackground: '#202020',   // Very Dark Gray - Input field background
     socialButtonBg: '#373737',    // Dark Gray - Social button background
     tint: tintColorDark,          // Light Blue - Tint color
     icon: '#ADADAD',              // Light Gray - Default icon color
     tabIconDefault: '#ADADAD',    // Light Gray - Inactive tab icons
     tabIconSelected: tintColorDark, // Light Blue - Active tab icons
     
     // Status colors for dark theme
     success: '#6DB529',           // Green - Success color
     warning: '#FF5D3D',           // Red Orange - Warning color
     error: '#FF5D3D',             // Red Orange - Error color
     
     // Gradient for dark theme
     gradientStart: '#649EFF',     // Light Blue - Gradient start
     gradientEnd: '#693C99',       // Dark Purple - Gradient end
   },
   
   // Common colors (theme-independent)
   common: {
     white: '#FFFFFF',             // Pure White
     black: '#000000',             // Pure Black
     transparent: 'transparent',   // Transparent
     blue:'#649EFF',
     
     // Primary color variations
     primary: '#5F4587',           // Deep Purple - Main brand color
     primaryLight: '#5F458750',    // Deep Purple 50% - Light primary variant
     primaryDark: '#4A3669',       // Darker Purple - Dark primary variant
     
     // Secondary color variations
     secondary: '#649EFF',         // Light Blue - Secondary brand color
     secondaryLight: '#649EFF50',  // Light Blue 50% - Light secondary variant
     secondaryDark: '#5285CC',     // Darker Blue - Dark secondary variant
     
     // Status colors
     success: '#6DB529',           // Green - Success color
     successLight: '#6DB52950',    // Green 50% - Light success variant
     warning: '#FF5D3D',           // Red Orange - Warning color
     warningLight: '#FF5D3D50',    // Red Orange 50% - Light warning variant
     
     // Grayscale palette
     gray900: '#191919',           // Almost Black - Input field color
     gray800: '#202020',           // Very Dark Gray - Darkest shade
     gray700: '#373737',           // Dark Gray - Social button background
     gray600: '#7F7F7F',           // Medium Gray - Mid-tone
     gray400: '#ADADAD',           // Light Gray - Lightest shade
   },
 };
 
 // Helper function to get colors with opacity
 export const getColorWithOpacity = (color: string, opacity: number): string => {
   // Convert opacity (0-1) to hex (00-FF)
   const hex = Math.round(opacity * 255).toString(16).padStart(2, '0');
   return `${color}${hex}`;
 };
 
 // Gradient utility
 export const getLinearGradient = () => [Colors.gradient.start, Colors.gradient.end];
 
 // Theme-aware color getter
 export const getThemeColors = (isDark: boolean) => isDark ? Colors.dark : Colors.light;