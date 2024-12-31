import { ThemeColors, TokenColor } from '../types/theme';
import { BaseThemeBuilder } from './BaseThemeBuilder';

export class DarkThemeBuilder extends BaseThemeBuilder {
    constructor() {
        super('HyperCode Dark', 'dark');
    }

    protected getDefaultColors(): ThemeColors {
        return {
            // Base colors
            foreground: '#d9dfe7',
            background: '#171f2b',
            focusBorder: '#8964e8',

            // Editor colors
            'editor.background': '#171f2b',
            'editor.foreground': '#d9dfe7',
            'editor.lineHighlightBackground': '#1f2939',
            'editor.selectionBackground': '#264dcb80',
            'editor.inactiveSelectionBackground': '#264dcb4d',
            'editor.findMatchBackground': '#83431466',
            'editor.findMatchBorder': '#ffa23e',
            'editor.findMatchHighlightBackground': '#83431499',
            'editor.findMatchHighlightBorder': '#834314',

            // Activity Bar
            'activityBar.background': '#171f2b',
            'activityBar.foreground': '#d9dfe7',
            'activityBar.inactiveForeground': '#738295',
            'activityBar.border': '#333e4f',
            'activityBar.activeBorder': '#a87ffb',
            'activityBarBadge.background': '#a87ffb',
            'activityBarBadge.foreground': '#000000',

            // Sidebar
            'sideBar.background': '#10151d',
            'sideBar.foreground': '#d9dfe7',
            'sideBar.border': '#333e4f',
            'sideBarTitle.foreground': '#d9dfe7',
            'sideBarSectionHeader.background': '#10151d',
            'sideBarSectionHeader.foreground': '#d9dfe7',
            'sideBarSectionHeader.border': '#333e4f',

            // Status Bar
            'statusBar.background': '#1f2939',
            'statusBar.foreground': '#a4afbd',
            'statusBar.border': '#333e4f',
            'statusBar.debuggingBackground': '#891524',
            'statusBar.debuggingForeground': '#ffffff',
            'statusBar.noFolderBackground': '#1f2939',

            // Title Bar
            'titleBar.activeBackground': '#171f2b',
            'titleBar.activeForeground': '#d9dfe7',
            'titleBar.inactiveBackground': '#10151d',
            'titleBar.inactiveForeground': '#738295',
            'titleBar.border': '#333e4f',

            // Input controls
            'input.background': '#1f2939',
            'input.border': '#3d495a',
            'input.foreground': '#d9dfe7',
            'input.placeholderForeground': '#8b98a9',
            'inputValidation.errorBorder': '#f76769',
            'inputOption.activeBorder': '#8964e8',
            'inputOption.activeBackground': '#6f4cde80',
            'inputOption.activeForeground': '#f4f7fd',

            // Buttons
            'button.background': '#a87ffb',
            'button.foreground': '#000000',
            'button.hoverBackground': '#b895fd',
            'button.secondaryBackground': '#475365',
            'button.secondaryForeground': '#ffffff',
            'button.secondaryHoverBackground': '#5d6a7d',

            // Dropdown
            'dropdown.background': '#1f2939',
            'dropdown.border': '#3d495a',
            'dropdown.foreground': '#d9dfe7',
            'dropdown.listBackground': '#10151d'
        };
    }

    protected getDefaultTokenColors(): TokenColor[] {
        return [
            {
                scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
                settings: {
                    foreground: '#7f8d9f'
                }
            },
            {
                scope: ['constant', 'entity.name.constant', 'variable.other.constant', 'variable.language'],
                settings: {
                    foreground: '#92a9ff'
                }
            },
            {
                scope: ['entity', 'entity.name'],
                settings: {
                    foreground: '#bd9cfe'
                }
            },
            {
                scope: 'variable.parameter.function',
                settings: {
                    foreground: '#d9dfe7'
                }
            },
            {
                scope: 'entity.name.tag',
                settings: {
                    foreground: '#77d5a3'
                }
            },
            {
                scope: 'keyword',
                settings: {
                    foreground: '#fd8da3'
                }
            },
            {
                scope: ['storage', 'storage.type'],
                settings: {
                    foreground: '#fd8da3'
                }
            },
            {
                scope: ['string', 'string.template', 'punctuation.definition.string'],
                settings: {
                    foreground: '#77d5a3'
                }
            },
            {
                scope: ['support.type.property-name', 'meta.object-literal.key'],
                settings: {
                    foreground: '#85cdf1'
                }
            },
            {
                scope: 'variable',
                settings: {
                    foreground: '#ffd395'
                }
            },
            {
                scope: ['support.function', 'support.class', 'support.type'],
                settings: {
                    foreground: '#92a9ff'
                }
            }
        ];
    }
} 