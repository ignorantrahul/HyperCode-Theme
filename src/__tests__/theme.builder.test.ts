import { ThemeBuilder } from '../themes/config/theme.builder';

describe('ThemeBuilder', () => {
    let builder: ThemeBuilder;

    beforeEach(() => {
        builder = new ThemeBuilder('Test Theme', 'dark');
    });

    it('should create a theme with basic properties', () => {
        const theme = builder.build();
        expect(theme.name).toBe('Test Theme');
        expect(theme.type).toBe('dark');
        expect(theme.semanticHighlighting).toBe(true);
    });

    it('should add UI colors to the theme', () => {
        const theme = builder.withColors().build();
        expect(theme.colors).toBeDefined();
        expect(Object.keys(theme.colors).length).toBeGreaterThan(0);
    });

    it('should add semantic tokens to the theme', () => {
        const theme = builder.withSemanticTokens().build();
        expect(theme.semanticTokenColors).toBeDefined();
        expect(Object.keys(theme.semanticTokenColors).length).toBeGreaterThan(0);
    });

    it('should add syntax tokens to the theme', () => {
        const theme = builder.withSyntaxTokens().build();
        expect(theme.tokenColors).toBeDefined();
        expect(theme.tokenColors.length).toBeGreaterThan(0);
    });

    it('should build a complete theme with all components', () => {
        const theme = builder
            .withColors()
            .withSemanticTokens()
            .withSyntaxTokens()
            .build();

        expect(theme.colors).toBeDefined();
        expect(theme.semanticTokenColors).toBeDefined();
        expect(theme.tokenColors).toBeDefined();
        expect(Object.keys(theme.colors).length).toBeGreaterThan(0);
        expect(Object.keys(theme.semanticTokenColors).length).toBeGreaterThan(0);
        expect(theme.tokenColors.length).toBeGreaterThan(0);
    });
}); 