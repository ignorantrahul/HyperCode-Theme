export interface IIconDefinition {
    iconPath: string;
    fontCharacter?: string;
    fontColor?: string;
    fontSize?: string;
    fontId?: string;
}

export interface IIconTheme {
    hidesExplorerArrows?: boolean;
    fonts?: Array<{
        id: string;
        src: Array<{ path: string; format: string }>;
        weight?: string;
        style?: string;
        size?: string;
    }>;
    iconDefinitions: {
        [key: string]: IIconDefinition;
    };
    file: string;
    folder: string;
    folderExpanded: string;
    rootFolder: string;
    rootFolderExpanded: string;
    fileExtensions?: {
        [key: string]: string;
    };
    fileNames?: {
        [key: string]: string;
    };
    folderNames?: {
        [key: string]: string;
    };
    folderNamesExpanded?: {
        [key: string]: string;
    };
    languageIds?: {
        [key: string]: string;
    };
    light?: {
        file: string;
        fileExtensions?: {
            [key: string]: string;
        };
        fileNames?: {
            [key: string]: string;
        };
    };
    highContrast?: {
        file: string;
        fileExtensions?: {
            [key: string]: string;
        };
        fileNames?: {
            [key: string]: string;
        };
    };
} 