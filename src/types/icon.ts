export interface IconDefinition {
    iconPath: string;
    fontCharacter?: string;
    fontColor?: string;
    fontSize?: string;
    fontId?: string;
}

export interface IconDefinitions {
    [key: string]: IconDefinition;
}

export interface IconAssociation {
    icon: string;
    extensions?: string[];
    filenamePatterns?: string[];
    filenames?: string[];
    languages?: string[];
    folders?: string[];
}

export interface IconTheme {
    hidesExplorerArrows?: boolean;
    fonts?: {
        [key: string]: {
            ttf: string;
            woff?: string;
            woff2?: string;
            eot?: string;
            svg?: string;
        };
    };
    iconDefinitions: IconDefinitions;
    file: string;
    folder: string;
    folderExpanded: string;
    rootFolder: string;
    rootFolderExpanded: string;
    fileExtensions: {
        [key: string]: string;
    };
    fileNames: {
        [key: string]: string;
    };
    languageIds: {
        [key: string]: string;
    };
    folderNames: {
        [key: string]: string;
    };
    folderNamesExpanded: {
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
        folder?: string;
        folderExpanded?: string;
        rootFolder?: string;
        rootFolderExpanded?: string;
    };
    highContrast?: {
        file: string;
        fileExtensions?: {
            [key: string]: string;
        };
        fileNames?: {
            [key: string]: string;
        };
        folder?: string;
        folderExpanded?: string;
        rootFolder?: string;
        rootFolderExpanded?: string;
    };
} 