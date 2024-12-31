import * as fs from 'fs';
import * as path from 'path';
import { DarkTheme } from './themes/config/dark.theme';
import { LightTheme } from './themes/config/light.theme';
import { NordTheme } from './themes/config/nord.theme';
import { IconTheme } from './themes/config/icon.theme';

const generateThemes = (): void => {
    const themesDir = path.join(__dirname, '..', 'themes');
    
    // Generate Dark Theme
    const darkTheme = new DarkTheme().generateTheme();
    fs.writeFileSync(
        path.join(themesDir, 'hypercode-dark-theme.json'),
        JSON.stringify(darkTheme, null, 4)
    );
    console.log('✨ Dark theme generated successfully!');

    // Generate Light Theme
    const lightTheme = new LightTheme().generateTheme();
    fs.writeFileSync(
        path.join(themesDir, 'hypercode-light-theme.json'),
        JSON.stringify(lightTheme, null, 4)
    );
    console.log('✨ Light theme generated successfully!');

    // Generate Nord Theme
    const nordTheme = new NordTheme().generateTheme();
    fs.writeFileSync(
        path.join(themesDir, 'hypercode-nord-theme.json'),
        JSON.stringify(nordTheme, null, 4)
    );
    console.log('✨ Nord theme generated successfully!');

    // Generate Icon Theme
    const iconTheme = new IconTheme('themes/icons').generateTheme();
    fs.writeFileSync(
        path.join(themesDir, 'hypercode-file-icon-theme.json'),
        JSON.stringify(iconTheme, null, 4)
    );
    console.log('✨ File icon theme generated successfully!');
};

// Generate all themes
generateThemes(); 