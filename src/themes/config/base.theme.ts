import { ColorPalette, createColor, alpha } from '../colors/base.colors';
import { ITheme, IThemeColors } from '../interfaces/theme.interface';

export abstract class BaseTheme {
    protected abstract colors: ColorPalette;
    protected abstract name: string;
    protected abstract type: 'light' | 'dark';

    protected createThemeColors(): IThemeColors {
        return {
            // Base UI
            focusBorder: createColor(this.colors.focusBorder),
            foreground: createColor(this.colors.foreground),
            'icon.foreground': createColor(this.colors.foreground),
            'widget.shadow': createColor(this.colors.shadow, alpha[40]),
            descriptionForeground: createColor(this.colors.inactiveText),
            errorForeground: createColor(this.colors.error),

            // Button Control
            'button.background': this.colors.primary,
            'button.foreground': this.colors.activeText,
            'button.hoverBackground': this.colors.primaryLight,
            'button.secondaryBackground': this.colors.gray3,
            'button.secondaryForeground': this.colors.foreground,
            'button.secondaryHoverBackground': this.colors.gray4,

            // Input Control
            'input.background': this.colors.gray2,
            'input.border': this.colors.border,
            'input.foreground': this.colors.foreground,
            'input.placeholderForeground': createColor(this.colors.inactiveText, alpha[70]),
            'inputValidation.errorBorder': this.colors.error,
            'inputOption.activeBorder': this.colors.primary,
            'inputOption.activeBackground': createColor(this.colors.primary, alpha[50]),
            'inputOption.activeForeground': this.colors.foreground,

            // Editor
            'editor.background': this.colors.background,
            'editor.foreground': this.colors.foreground,
            'editorLineNumber.foreground': this.colors.inactiveText,
            'editorLineNumber.activeForeground': this.colors.activeText,
            'editor.selectionBackground': createColor(this.colors.selection, alpha[40]),
            'editor.selectionHighlightBackground': createColor(this.colors.highlight, alpha[30]),
            'editor.wordHighlightBackground': createColor(this.colors.highlight, alpha[30]),
            'editor.wordHighlightStrongBackground': createColor(this.colors.highlight, alpha[50]),
            'editorCursor.foreground': this.colors.primary,
            'editorWhitespace.foreground': createColor(this.colors.inactiveText, alpha[30]),
            'editorIndentGuide.background': createColor(this.colors.border, alpha[40]),
            'editorIndentGuide.activeBackground': createColor(this.colors.border, alpha[70]),

            // Status Bar
            'statusBar.background': this.colors.gray2,
            'statusBar.foreground': this.colors.foreground,
            'statusBar.border': this.colors.border,
            'statusBar.debuggingBackground': this.colors.warning,
            'statusBar.debuggingForeground': this.colors.activeText,
            'statusBar.noFolderBackground': this.colors.gray2,

            // Title Bar
            'titleBar.activeBackground': this.colors.background,
            'titleBar.activeForeground': this.colors.foreground,
            'titleBar.inactiveBackground': this.colors.gray1,
            'titleBar.inactiveForeground': this.colors.inactiveText,
            'titleBar.border': this.colors.border,

            // Activity Bar
            'activityBar.background': this.colors.background,
            'activityBar.foreground': this.colors.primary,
            'activityBar.inactiveForeground': this.colors.inactiveText,
            'activityBarBadge.background': this.colors.primary,
            'activityBarBadge.foreground': this.colors.activeText,
            'activityBar.border': this.colors.border,
            'activityBar.activeBorder': this.colors.primary,

            // Side Bar
            'sideBar.background': this.colors.gray1,
            'sideBar.foreground': this.colors.foreground,
            'sideBar.border': this.colors.border,
            'sideBarTitle.foreground': this.colors.foreground,
            'sideBarSectionHeader.background': this.colors.gray1,
            'sideBarSectionHeader.foreground': this.colors.foreground,
            'sideBarSectionHeader.border': this.colors.border,

            // Lists
            'list.activeSelectionBackground': this.colors.gray3,
            'list.activeSelectionForeground': this.colors.foreground,
            'list.hoverBackground': this.colors.gray2,
            'list.hoverForeground': this.colors.foreground,
            'list.inactiveSelectionBackground': this.colors.gray2,
            'list.inactiveSelectionForeground': this.colors.foreground,
            'list.errorForeground': this.colors.error,
            'list.warningForeground': this.colors.warning,

            // Git Decorations
            'gitDecoration.modifiedResourceForeground': this.colors.info,
            'gitDecoration.deletedResourceForeground': this.colors.error,
            'gitDecoration.untrackedResourceForeground': this.colors.success,
            'gitDecoration.ignoredResourceForeground': this.colors.inactiveText,
            'gitDecoration.conflictingResourceForeground': this.colors.warning
        };
    }

    public generateTheme(): ITheme {
        return {
            name: this.name,
            type: this.type,
            semanticHighlighting: true,
            colors: this.createThemeColors(),
            semanticTokenColors: this.createSemanticTokenColors(),
            tokenColors: this.createTokenColors()
        };
    }

    protected abstract createSemanticTokenColors(): { [key: string]: string };
    protected abstract createTokenColors(): Array<{ scope: string | string[]; settings: { foreground?: string; fontStyle?: string } }>;
} 