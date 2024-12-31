import * as fs from 'fs';
import * as path from 'path';
import { DarkThemeBuilder } from './DarkThemeBuilder';
import { LightThemeBuilder } from './LightThemeBuilder';
import { ThemeConfiguration } from '../types/theme';

class ThemeGenerator {
    private readonly outputDir: string;

    constructor(outputDir: string) {
        this.outputDir = outputDir;
        this.ensureOutputDirExists();
    }

    private ensureOutputDirExists(): void {
        if (!fs.existsSync(this.outputDir)) {
            fs.mkdirSync(this.outputDir, { recursive: true });
        }
    }

    private writeThemeFile(theme: ThemeConfiguration): void {
        const fileName = `hypercode-${theme.type}-theme.json`;
        const filePath = path.join(this.outputDir, fileName);

        fs.writeFileSync(
            filePath,
            JSON.stringify(theme, null, 2),
            'utf8'
        );

        console.log(`Generated theme file: ${fileName}`);
    }

    public generateThemes(): void {
        try {
            // Generate Dark theme
            const darkTheme = new DarkThemeBuilder().build();
            this.writeThemeFile(darkTheme);

            // Generate Light theme
            const lightTheme = new LightThemeBuilder().build();
            this.writeThemeFile(lightTheme);

            // TODO: Add Nord theme builder when implemented
            console.log('Theme generation completed successfully!');
        } catch (error) {
            console.error('Error generating themes:', error);
            process.exit(1);
        }
    }
}

// Execute theme generation
const generator = new ThemeGenerator(path.join(__dirname, '../../themes'));
generator.generateThemes(); 