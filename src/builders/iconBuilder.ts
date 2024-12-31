import * as fs from 'fs';
import * as path from 'path';
import { IconTheme } from '../types/icon';
import { iconDefinitions } from '../icons/definitions/iconDefinitions';
import { fileExtensions, fileNames } from '../icons/associations/fileAssociations';
import { languageIds } from '../icons/associations/languageAssociations';
import { folderNames, folderNamesExpanded } from '../icons/associations/folderAssociations';
import {
    DEFAULT_FILE,
    DEFAULT_FOLDER,
    DEFAULT_FOLDER_EXPANDED,
    DEFAULT_ROOT_FOLDER,
    DEFAULT_ROOT_FOLDER_EXPANDED,
    HIDE_EXPLORER_ARROWS,
    THEME_FILE_NAME
} from '../icons/constants/defaults';

class IconThemeGenerator {
    private readonly outputDir: string;
    private readonly iconTheme: IconTheme;

    constructor(outputDir: string) {
        this.outputDir = outputDir;
        this.ensureOutputDirExists();
        this.iconTheme = this.getDefaultIconTheme();
    }

    private ensureOutputDirExists(): void {
        if (!fs.existsSync(this.outputDir)) {
            fs.mkdirSync(this.outputDir, { recursive: true });
        }
    }

    private getDefaultIconTheme(): IconTheme {
        return {
            hidesExplorerArrows: HIDE_EXPLORER_ARROWS,
            iconDefinitions,
            file: DEFAULT_FILE,
            folder: DEFAULT_FOLDER,
            folderExpanded: DEFAULT_FOLDER_EXPANDED,
            rootFolder: DEFAULT_ROOT_FOLDER,
            rootFolderExpanded: DEFAULT_ROOT_FOLDER_EXPANDED,
            fileExtensions,
            fileNames,
            languageIds,
            folderNames,
            folderNamesExpanded
        };
    }

    private writeIconTheme(): void {
        const filePath = path.join(this.outputDir, THEME_FILE_NAME);

        fs.writeFileSync(
            filePath,
            JSON.stringify(this.iconTheme, null, 2),
            'utf8'
        );

        console.log(`Generated icon theme file: ${THEME_FILE_NAME}`);
    }

    public generate(): void {
        try {
            this.writeIconTheme();
            console.log('Icon theme generation completed successfully!');
        } catch (error) {
            console.error('Error generating icon theme:', error);
            process.exit(1);
        }
    }
}

// Execute icon theme generation
const generator = new IconThemeGenerator(path.join(__dirname, '../../themes'));
generator.generate(); 