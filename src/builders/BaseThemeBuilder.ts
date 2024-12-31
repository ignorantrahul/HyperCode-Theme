import { ThemeBuilder, ThemeConfiguration, ThemeColors, TokenColor, ThemeType } from '../types/theme';

export abstract class BaseThemeBuilder implements ThemeBuilder {
    protected name: string;
    protected type: ThemeType;
    protected colors: Partial<ThemeColors>;
    protected tokenColors: TokenColor[];

    constructor(name: string, type: ThemeType) {
        this.name = name;
        this.type = type;
        this.colors = {};
        this.tokenColors = [];
    }

    public setColors(colors: Partial<ThemeColors>): this {
        this.colors = { ...this.colors, ...colors };
        return this;
    }

    public setTokenColors(tokens: TokenColor[]): this {
        this.tokenColors = [...this.tokenColors, ...tokens];
        return this;
    }

    protected abstract getDefaultColors(): ThemeColors;
    protected abstract getDefaultTokenColors(): TokenColor[];

    public build(): ThemeConfiguration {
        const defaultColors = this.getDefaultColors();
        const defaultTokens = this.getDefaultTokenColors();

        return {
            name: this.name,
            type: this.type,
            colors: { ...defaultColors, ...this.colors },
            tokenColors: [...defaultTokens, ...this.tokenColors],
        };
    }

    protected validateColors(colors: ThemeColors): void {
        const requiredColors: (keyof ThemeColors)[] = [
            'foreground',
            'background',
            'editor.background',
            'editor.foreground'
        ];

        for (const color of requiredColors) {
            if (!colors[color]) {
                throw new Error(`Missing required color: ${color}`);
            }
        }
    }
} 