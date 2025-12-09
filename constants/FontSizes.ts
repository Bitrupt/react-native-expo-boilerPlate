// constants/FontSizes.ts
// Simple typography scale shared across components
import { wp } from '@/hooks/screenPercentage';

export const Fonts = {
  sizes: {
    xs: wp(3), // ~12px
    sm: wp(3.4), // ~13-14px
    md: wp(4), // ~15-16px
    lg: wp(5), // ~18-20px
    xl: wp(6), // ~22-24px
  },
  family: {
    light: 'Outfit_300Light',
    regular: 'Outfit_400Regular',
    medium: 'Outfit_500Medium',
    semiBold: 'Outfit_600SemiBold',
    bold: 'Outfit_700Bold',
  },
};
