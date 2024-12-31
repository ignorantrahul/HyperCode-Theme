export type ColorAlpha = {
    readonly [key: string]: string;
};

export type ColorPalette = {
    readonly [key: string]: string;
};

export const createColor = (color: string, alpha: string = 'ff'): string => {
    return `${color}${alpha}`;
};

export const alpha = {
    100: 'ff',
    90: 'e6',
    80: 'cc',
    70: 'b3',
    60: '99',
    50: '80',
    40: '66',
    30: '4d',
    20: '33',
    10: '1a',
    0: '00'
} as const; 