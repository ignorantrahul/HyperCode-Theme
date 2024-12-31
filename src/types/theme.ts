export type ThemeType = 'light' | 'dark' | 'nord';

export interface TokenColor {
    name?: string;
    scope: string | string[];
    settings: {
        foreground?: string;
        fontStyle?: string;
    };
}

export interface ThemeColors {
    // Base colors
    foreground: string;
    background: string;

    // Editor colors
    'editor.background': string;
    'editor.foreground': string;
    'editor.lineHighlightBackground': string;
    'editor.selectionBackground': string;

    // Syntax highlighting
    'editor.findMatchBackground': string;
    'editor.findMatchHighlightBackground': string;

    // Sidebar and activity bar
    'activityBar.background': string;
    'activityBar.foreground': string;
    'sideBar.background': string;
    'sideBar.foreground': string;

    // Status bar
    'statusBar.background': string;
    'statusBar.foreground': string;

    // Title bar
    'titleBar.activeBackground': string;
    'titleBar.activeForeground': string;

    // Additional colors can be added as needed
    [key: string]: string | undefined;
}

export interface ThemeConfiguration {
    name: string;
    type: ThemeType;
    colors: ThemeColors;
    tokenColors: TokenColor[];
}

export interface ThemeBuilder {
    build(): ThemeConfiguration;
    setColors(colors: Partial<ThemeColors>): this;
    setTokenColors(tokens: TokenColor[]): this;
} 