import { ITheme } from '../interfaces/theme.interface';
import { semanticTokenColors } from '../tokens/semantic.tokens';
import { tokenColors } from '../tokens/syntax.tokens';
import { uiColors } from './ui.colors';

export class ThemeBuilder {
    private theme: ITheme;

    constructor(name: string, type: 'light' | 'dark') {
        this.theme = {
            name,
            type,
            semanticHighlighting: true,
            colors: {},
            semanticTokenColors: {},
            tokenColors: []
        };
    }

    public withColors(): ThemeBuilder {
        this.theme.colors = uiColors;
        return this;
    }

    public withSemanticTokens(): ThemeBuilder {
        this.theme.semanticTokenColors = semanticTokenColors;
        return this;
    }

    public withSyntaxTokens(): ThemeBuilder {
        this.theme.tokenColors = tokenColors;
        return this;
    }

    public build(): ITheme {
        return this.theme;
    }
} 