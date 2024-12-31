export interface IThemeColors {
    [key: string]: string;
}

export interface ITokenSetting {
    foreground?: string;
    fontStyle?: string;
    background?: string;
}

export interface ITokenColor {
    scope: string | string[];
    settings: ITokenSetting;
}

export interface ISemanticTokenColors {
    [key: string]: string;
}

export interface ITheme {
    name: string;
    type: 'light' | 'dark';
    semanticHighlighting: boolean;
    colors: IThemeColors;
    semanticTokenColors: ISemanticTokenColors;
    tokenColors: ITokenColor[];
} 