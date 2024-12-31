import { ColorPalette } from './base.colors';

export const LightColors: ColorPalette = {
    // Base Colors
    background: '#ffffff',
    foreground: '#1f2939',
    
    // Primary Colors
    primary: '#6f4cde',
    primaryLight: '#8964e8',
    primaryDark: '#4d21bb',
    
    // Secondary Colors
    secondary: '#3c60dd',
    secondaryLight: '#5173f1',
    secondaryDark: '#002487',
    
    // Accent Colors
    accent1: '#007b49',
    accent2: '#c1313b',
    accent3: '#c16f23',
    
    // Grayscale
    gray0: '#ffffff',
    gray1: '#fafbfe',
    gray2: '#f4f7fd',
    gray3: '#e7ebf2',
    gray4: '#d9dfe7',
    gray5: '#bfc7d2',
    gray6: '#a4afbd',
    gray7: '#8b98a9',
    gray8: '#738295',
    gray9: '#5d6a7d',
    
    // Semantic Colors
    success: '#17975f',
    warning: '#df8128',
    error: '#df4047',
    info: '#3c60dd',
    
    // UI Enhancement Colors
    shadow: '#1f2939',
    border: '#d9dfe7',
    highlight: '#c7d3ff',
    selection: '#e0ccff',
    focusBorder: '#8964e8',
    activeText: '#1f2939',
    inactiveText: '#5d6a7d',

    // Additional Colors
    link: '#6f4cde',
    linkActive: '#4d21bb',
    findMatch: '#df8128',
    findMatchHighlight: '#ffc26e',
    diffInserted: '#b2edca',
    diffRemoved: '#ffc8c7',
    diffInsertedLine: '#daf8e4',
    diffRemovedLine: '#ffe5e4'
} as const; 