import { ColorPalette } from './base.colors';

export const DarkColors: ColorPalette = {
    // Base Colors
    background: '#171f2b',
    foreground: '#d9dfe7',
    
    // Primary Colors
    primary: '#8964e8',
    primaryLight: '#a87ffb',
    primaryDark: '#603bce',
    
    // Secondary Colors
    secondary: '#5173f1',
    secondaryLight: '#708fff',
    secondaryDark: '#264dcb',
    
    // Accent Colors
    accent1: '#17975f',
    accent2: '#df4047',
    accent3: '#df8128',
    
    // Grayscale
    gray0: '#080a0e',
    gray1: '#10151d',
    gray2: '#1f2939',
    gray3: '#333e4f',
    gray4: '#475365',
    gray5: '#5d6a7d',
    gray6: '#738295',
    gray7: '#8b98a9',
    gray8: '#a4afbd',
    gray9: '#bfc7d2',
    
    // Semantic Colors
    success: '#17b877',
    warning: '#ffa23e',
    error: '#f76769',
    info: '#25a6e9',
    
    // UI Enhancement Colors
    shadow: '#080a0e',
    border: '#333e4f',
    highlight: '#264dcb',
    selection: '#4d21bb',
    focusBorder: '#8964e8',
    activeText: '#ffffff',
    inactiveText: '#8b98a9',

    // Additional Colors
    link: '#b895fd',
    linkActive: '#c8aaff',
    findMatch: '#834314',
    findMatchHighlight: '#ffa23e',
    diffInserted: '#17975f33',
    diffRemoved: '#df404733',
    diffInsertedLine: '#17975f33',
    diffRemovedLine: '#df404733'
} as const; 