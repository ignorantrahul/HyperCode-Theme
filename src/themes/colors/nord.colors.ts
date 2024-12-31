import { ColorPalette } from './base.colors';

// Nord Color Palette
export const NordColors: ColorPalette = {
    // Polar Night
    nord0: '#2E3440', // Dark background
    nord1: '#3B4252', // Lighter background
    nord2: '#434C5E', // Selection background
    nord3: '#4C566A', // Comments, invisibles

    // Snow Storm
    nord4: '#D8DEE9', // Main text
    nord5: '#E5E9F0', // Secondary text
    nord6: '#ECEFF4', // Bright text

    // Frost
    nord7: '#8FBCBB', // Classes, types
    nord8: '#88C0D0', // Methods, functions
    nord9: '#81A1C1', // Keywords, operators
    nord10: '#5E81AC', // Info, links

    // Aurora
    nord11: '#BF616A', // Errors, deletions
    nord12: '#D08770', // Annotations
    nord13: '#EBCB8B', // Warnings, modified
    nord14: '#A3BE8C', // Strings, additions
    nord15: '#B48EAD'  // Numbers, macros
} as const;

export const createNordColor = (color: keyof typeof NordColors, alpha: string = 'ff'): string => {
    return `${NordColors[color]}${alpha}`;
}; 