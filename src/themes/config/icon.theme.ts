import { IIconTheme, IIconDefinition } from '../interfaces/icon.interface';
import * as path from 'path';

export class IconTheme {
    private iconDefinitions: { [key: string]: IIconDefinition } = {};
    private fileExtensions: { [key: string]: string } = {};
    private fileNames: { [key: string]: string } = {};
    private folderNames: { [key: string]: string } = {};
    private languageIds: { [key: string]: string } = {};

    constructor(private readonly iconPath: string = 'icons') {}

    public addIcon(name: string, iconPath: string): void {
        this.iconDefinitions[name] = {
            iconPath: path.join(this.iconPath, iconPath)
        };
    }

    public addFileExtension(extension: string, iconName: string): void {
        this.fileExtensions[extension] = iconName;
    }

    public addFileName(fileName: string, iconName: string): void {
        this.fileNames[fileName] = iconName;
    }

    public addFolderName(folderName: string, iconName: string): void {
        this.folderNames[folderName] = iconName;
    }

    public addLanguageId(languageId: string, iconName: string): void {
        this.languageIds[languageId] = iconName;
    }

    public generateTheme(): IIconTheme {
        // Add default icons
        this.addIcon('file', 'file.svg');
        this.addIcon('folder', 'folder.svg');
        this.addIcon('folder-expanded', 'folder-expanded.svg');
        this.addIcon('root-folder', 'root-folder.svg');
        this.addIcon('root-folder-expanded', 'root-folder-expanded.svg');

        // Add programming language icons
        this.addIcon('typescript', 'typescript.svg');
        this.addFileExtension('ts', 'typescript');
        this.addFileExtension('tsx', 'typescript');
        this.addFileExtension('d.ts', 'typescript');
        
        this.addIcon('javascript', 'javascript.svg');
        this.addFileExtension('js', 'javascript');
        this.addFileExtension('jsx', 'javascript');
        this.addFileExtension('mjs', 'javascript');
        
        this.addIcon('python', 'python.svg');
        this.addFileExtension('py', 'python');
        this.addFileExtension('pyw', 'python');
        this.addFileExtension('ipynb', 'python');
        
        this.addIcon('java', 'java.svg');
        this.addFileExtension('java', 'java');
        this.addFileExtension('jar', 'java');
        
        // Add web development icons
        this.addIcon('html', 'html.svg');
        this.addFileExtension('html', 'html');
        this.addFileExtension('htm', 'html');
        
        this.addIcon('css', 'css.svg');
        this.addFileExtension('css', 'css');
        this.addFileExtension('scss', 'css');
        this.addFileExtension('sass', 'css');
        
        // Add config file icons
        this.addIcon('json', 'json.svg');
        this.addFileExtension('json', 'json');
        
        this.addIcon('yaml', 'yaml.svg');
        this.addFileExtension('yml', 'yaml');
        this.addFileExtension('yaml', 'yaml');
        
        this.addIcon('toml', 'toml.svg');
        this.addFileExtension('toml', 'toml');
        
        // Add markdown and documentation
        this.addIcon('markdown', 'markdown.svg');
        this.addFileExtension('md', 'markdown');
        this.addFileExtension('mdx', 'markdown');
        
        // Add git-related icons
        this.addIcon('git', 'git.svg');
        this.addFileName('.gitignore', 'git');
        this.addFileName('.gitattributes', 'git');
        this.addFileName('.gitmodules', 'git');
        
        // Add package manager icons
        this.addIcon('npm', 'npm.svg');
        this.addFileName('package.json', 'npm');
        this.addFileName('package-lock.json', 'npm');
        
        this.addIcon('yarn', 'yarn.svg');
        this.addFileName('yarn.lock', 'yarn');
        
        // Add test file icons
        this.addIcon('test', 'test.svg');
        this.addFileExtension('spec.ts', 'test');
        this.addFileExtension('test.ts', 'test');
        this.addFileExtension('spec.js', 'test');
        this.addFileExtension('test.js', 'test');
        
        // Add special folder icons
        this.addIcon('folder_src', 'folder-src.svg');
        this.addFolderName('src', 'folder_src');
        this.addFolderName('source', 'folder_src');
        
        this.addIcon('folder_dist', 'folder-dist.svg');
        this.addFolderName('dist', 'folder_dist');
        this.addFolderName('build', 'folder_dist');
        this.addFolderName('out', 'folder_dist');
        
        this.addIcon('folder_node', 'folder-node.svg');
        this.addFolderName('node_modules', 'folder_node');
        
        this.addIcon('folder_test', 'folder-test.svg');
        this.addFolderName('test', 'folder_test');
        this.addFolderName('tests', 'folder_test');
        this.addFolderName('__tests__', 'folder_test');
        
        this.addIcon('folder_github', 'folder-github.svg');
        this.addFolderName('.github', 'folder_github');
        
        this.addIcon('folder_vscode', 'folder-vscode.svg');
        this.addFolderName('.vscode', 'folder_vscode');
        
        return {
            hidesExplorerArrows: false,
            iconDefinitions: this.iconDefinitions,
            file: 'file',
            folder: 'folder',
            folderExpanded: 'folder-expanded',
            rootFolder: 'root-folder',
            rootFolderExpanded: 'root-folder-expanded',
            fileExtensions: this.fileExtensions,
            fileNames: this.fileNames,
            folderNames: this.folderNames,
            languageIds: this.languageIds
        };
    }
} 