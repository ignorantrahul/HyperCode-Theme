import { ThemeColors, TokenColor } from '../types/theme';
import { BaseThemeBuilder } from './BaseThemeBuilder';

export class LightThemeBuilder extends BaseThemeBuilder {
    constructor() {
        super('HyperCode Light', 'light');
    }

    protected getDefaultColors(): ThemeColors {
        return {
            // Base colors
            foreground: '#1f2939',
            background: '#ffffff',

            // Focus and borders
            focusBorder: '#8964e8',

            // Editor colors
            'editor.background': '#ffffff',
            'editor.foreground': '#1f2939',
            'editor.lineHighlightBackground': '#f4f7fd',
            'editor.selectionBackground': '#c7d3ff99',
            'editor.inactiveSelectionBackground': '#c7d3ff66',
            'editor.findMatchBackground': '#df812866',
            'editor.findMatchBorder': '#df8128',
            'editor.findMatchHighlightBackground': '#ffc26e66',
            'editor.findMatchHighlightBorder': '#ffc26e',

            // Activity Bar
            'activityBar.background': '#ffffff',
            'activityBar.foreground': '#333e4f',
            'activityBar.inactiveForeground': '#8b98a9',
            'activityBar.border': '#d9dfe7',
            'activityBar.activeBorder': '#a87ffb',
            'activityBarBadge.background': '#6f4cde',
            'activityBarBadge.foreground': '#ffffff',

            // Sidebar
            'sideBar.background': '#f4f7fd',
            'sideBar.foreground': '#475365',
            'sideBar.border': '#d9dfe7',
            'sideBarTitle.foreground': '#333e4f',
            'sideBarSectionHeader.background': '#f4f7fd',
            'sideBarSectionHeader.foreground': '#333e4f',
            'sideBarSectionHeader.border': '#d9dfe7',

            // Status Bar
            'statusBar.background': '#ffffff',
            'statusBar.foreground': '#5d6a7d',
            'statusBar.border': '#d9dfe7',
            'statusBar.debuggingBackground': '#fc8f8e',
            'statusBar.debuggingForeground': '#000000',
            'statusBar.noFolderBackground': '#ffffff',

            // Title Bar
            'titleBar.activeBackground': '#ffffff',
            'titleBar.activeForeground': '#333e4f',
            'titleBar.inactiveBackground': '#f4f7fd',
            'titleBar.inactiveForeground': '#5d6a7d',
            'titleBar.border': '#d9dfe7',

            // Input controls
            'input.background': '#ffffff',
            'input.border': '#bfc7d2',
            'input.foreground': '#333e4f',
            'input.placeholderForeground': '#8b98a9',
            'inputValidation.errorBorder': '#c1313b',
            'inputOption.activeBorder': '#a87ffb',
            'inputOption.activeBackground': '#a87ffb4d',
            'inputOption.activeForeground': '#1f2939',

            // Buttons
            'button.background': '#6f4cde',
            'button.foreground': '#ffffff',
            'button.hoverBackground': '#603bce',
            'button.secondaryBackground': '#d9dfe7',
            'button.secondaryForeground': '#000000',
            'button.secondaryHoverBackground': '#a4afbd',

            // Dropdown
            'dropdown.background': '#ffffff',
            'dropdown.border': '#bfc7d2',
            'dropdown.foreground': '#333e4f',
            'dropdown.listBackground': '#f4f7fd'
        };
    }

    protected getDefaultTokenColors(): TokenColor[] {
        return [
            {
                scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
                settings: {
                    foreground: '#637083'
                }
            },
            {
                scope: ['constant', 'entity.name.constant', 'variable.other.constant', 'variable.language'],
                settings: {
                    foreground: '#264dcb'
                }
            },
            {
                scope: ['entity', 'entity.name'],
                settings: {
                    foreground: '#6f4cde'
                }
            },
            {
                scope: 'variable.parameter.function',
                settings: {
                    foreground: '#1f2939'
                }
            },
            {
                scope: 'entity.name.tag',
                settings: {
                    foreground: '#007b49'
                }
            },
            {
                scope: 'keyword',
                settings: {
                    foreground: '#c43058'
                }
            },
            {
                scope: ['storage', 'storage.type'],
                settings: {
                    foreground: '#c43058'
                }
            },
            {
                scope: ['string', 'string.template', 'punctuation.definition.string'],
                settings: {
                    foreground: '#007b49'
                }
            },
            {
                scope: ['support.type.property-name', 'meta.object-literal.key'],
                settings: {
                    foreground: '#0075a2'
                }
            },
            {
                scope: 'variable',
                settings: {
                    foreground: '#d07826'
                }
            },
            {
                scope: ['support.function', 'support.class', 'support.type'],
                settings: {
                    foreground: '#264dcb'
                }
            }
        ];
    }
} 