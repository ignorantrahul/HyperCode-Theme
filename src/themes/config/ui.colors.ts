import { IThemeColors } from '../interfaces/theme.interface';
import { createNordColor, NordColors } from '../colors/nord.colors';

export const uiColors: IThemeColors = {
    // Base Colors
    focusBorder: createNordColor('nord9'),
    foreground: createNordColor('nord6'),
    'icon.foreground': createNordColor('nord5'),
    'widget.shadow': createNordColor('nord0', 'alpha60'),
    descriptionForeground: createNordColor('nord4'),
    errorForeground: createNordColor('nord11'),

    // Button Control
    'button.background': NordColors.nord3,
    'button.foreground': createNordColor('nord6'),
    'button.hoverBackground': NordColors.nord2,
    'button.secondaryBackground': NordColors.nord1,
    'button.secondaryForeground': createNordColor('nord5'),
    'button.secondaryHoverBackground': NordColors.nord2,

    // Input Control
    'input.background': NordColors.nord1,
    'input.border': NordColors.nord2,
    'input.foreground': createNordColor('nord6'),
    'input.placeholderForeground': createNordColor('nord4', 'alpha66'),
    'inputValidation.errorBorder': createNordColor('nord11'),
    'inputOption.activeBorder': createNordColor('nord8'),
    'inputOption.activeBackground': createNordColor('nord8', 'alpha50'),
    'inputOption.activeForeground': createNordColor('nord6'),

    // Badge and Progress
    'badge.foreground': createNordColor('nord0'),
    'badge.background': createNordColor('nord8'),
    'progressBar.background': createNordColor('nord8'),

    // Title Bar
    'titleBar.activeBackground': createNordColor('nord0'),
    'titleBar.activeForeground': createNordColor('nord6'),
    'titleBar.inactiveBackground': createNordColor('nord1'),
    'titleBar.inactiveForeground': createNordColor('nord4'),
    'titleBar.border': NordColors.nord2,

    // Activity Bar
    'activityBar.background': createNordColor('nord0'),
    'activityBar.foreground': createNordColor('nord8'),
    'activityBar.inactiveForeground': createNordColor('nord3'),
    'activityBarBadge.background': createNordColor('nord8'),
    'activityBarBadge.foreground': createNordColor('nord0'),
    'activityBar.border': createNordColor('nord1'),
    'activityBar.activeBorder': createNordColor('nord8'),

    // Side Bar
    'sideBar.background': createNordColor('nord0'),
    'sideBar.foreground': createNordColor('nord6'),
    'sideBar.border': createNordColor('nord1'),
    'sideBarTitle.foreground': createNordColor('nord8'),
    'sideBarSectionHeader.background': createNordColor('nord1'),
    'sideBarSectionHeader.foreground': createNordColor('nord6'),
    'sideBarSectionHeader.border': NordColors.nord2,

    // Lists
    'list.activeSelectionBackground': NordColors.nord2,
    'list.activeSelectionForeground': createNordColor('nord6'),
    'list.hoverBackground': createNordColor('nord1'),
    'list.hoverForeground': createNordColor('nord6'),
    'list.inactiveSelectionBackground': createNordColor('nord1'),
    'list.inactiveSelectionForeground': createNordColor('nord5'),
    'list.errorForeground': createNordColor('nord11'),
    'list.warningForeground': createNordColor('nord13'),

    // Editor
    'editor.background': createNordColor('nord0'),
    'editor.foreground': createNordColor('nord6'),
    'editorLineNumber.foreground': createNordColor('nord3'),
    'editorLineNumber.activeForeground': createNordColor('nord8'),
    'editor.selectionBackground': createNordColor('nord2', 'alpha50'),
    'editor.selectionHighlightBackground': createNordColor('nord2', 'alpha40'),
    'editor.wordHighlightBackground': createNordColor('nord9', 'alpha60'),
    'editor.wordHighlightStrongBackground': createNordColor('nord9', 'alpha80'),
    'editorCursor.foreground': createNordColor('nord8'),
    'editorWhitespace.foreground': createNordColor('nord2', 'alpha50'),
    'editorIndentGuide.background': createNordColor('nord2', 'alpha40'),
    'editorIndentGuide.activeBackground': createNordColor('nord2', 'alpha50'),
    'editorLineHighlight.background': createNordColor('nord1', 'alpha50'),

    // Tabs
    'tab.activeBackground': createNordColor('nord1'),
    'tab.activeForeground': createNordColor('nord8'),
    'tab.activeBorder': createNordColor('nord1'),
    'tab.activeBorderTop': createNordColor('nord8'),
    'tab.inactiveBackground': createNordColor('nord0'),
    'tab.inactiveForeground': createNordColor('nord4'),
    'tab.border': createNordColor('nord1'),
    'tab.hoverBackground': NordColors.nord2,
    'editorGroupHeader.tabsBackground': createNordColor('nord0'),
    'editorGroupHeader.tabsBorder': createNordColor('nord1'),

    // Panel
    'panel.background': createNordColor('nord0'),
    'panel.border': createNordColor('nord1'),
    'panelTitle.activeForeground': createNordColor('nord8'),
    'panelTitle.inactiveForeground': createNordColor('nord4'),
    'panelTitle.activeBorder': createNordColor('nord8'),

    // Terminal
    'terminal.foreground': createNordColor('nord6'),
    'terminal.background': createNordColor('nord0'),
    'terminal.ansiBlack': createNordColor('nord1'),
    'terminal.ansiRed': createNordColor('nord11'),
    'terminal.ansiGreen': createNordColor('nord14'),
    'terminal.ansiYellow': createNordColor('nord13'),
    'terminal.ansiBlue': createNordColor('nord9'),
    'terminal.ansiMagenta': createNordColor('nord15'),
    'terminal.ansiCyan': createNordColor('nord8'),
    'terminal.ansiWhite': createNordColor('nord5'),
    'terminal.ansiBrightBlack': createNordColor('nord3'),
    'terminal.ansiBrightRed': createNordColor('nord11'),
    'terminal.ansiBrightGreen': createNordColor('nord14'),
    'terminal.ansiBrightYellow': createNordColor('nord13'),
    'terminal.ansiBrightBlue': createNordColor('nord9'),
    'terminal.ansiBrightMagenta': createNordColor('nord15'),
    'terminal.ansiBrightCyan': createNordColor('nord7'),
    'terminal.ansiBrightWhite': createNordColor('nord6'),

    // Status Bar
    'statusBar.background': createNordColor('nord1'),
    'statusBar.foreground': createNordColor('nord8'),
    'statusBar.border': NordColors.nord2,
    'statusBar.debuggingBackground': createNordColor('nord11'),
    'statusBar.debuggingForeground': createNordColor('nord6'),
    'statusBar.noFolderBackground': createNordColor('nord1'),

    // Scrollbar
    'scrollbar.shadow': createNordColor('nord0', 'alpha40'),
    'scrollbarSlider.background': createNordColor('nord2', 'alpha40'),
    'scrollbarSlider.hoverBackground': createNordColor('nord2', 'alpha60'),
    'scrollbarSlider.activeBackground': createNordColor('nord2', 'alpha80'),

    // Git Decorations
    'gitDecoration.modifiedResourceForeground': createNordColor('nord9'),
    'gitDecoration.deletedResourceForeground': createNordColor('nord11'),
    'gitDecoration.untrackedResourceForeground': createNordColor('nord14'),
    'gitDecoration.ignoredResourceForeground': createNordColor('nord3'),
    'gitDecoration.conflictingResourceForeground': createNordColor('nord13'),

    // Bracket Highlighting
    'editorBracketHighlight.foreground1': createNordColor('nord8'),
    'editorBracketHighlight.foreground2': createNordColor('nord9'),
    'editorBracketHighlight.foreground3': createNordColor('nord10'),
    'editorBracketHighlight.foreground4': createNordColor('nord8'),
    'editorBracketHighlight.foreground5': createNordColor('nord9'),
    'editorBracketHighlight.foreground6': createNordColor('nord10'),

    // Editor Widgets
    'editorError.foreground': createNordColor('nord11'),
    'editorWarning.foreground': createNordColor('nord13'),
    'editorInfo.foreground': createNordColor('nord8'),
    'editorHint.foreground': createNordColor('nord14'),
    'editorGutter.modifiedBackground': createNordColor('nord9'),
    'editorGutter.addedBackground': createNordColor('nord14'),
    'editorGutter.deletedBackground': createNordColor('nord11'),

    // Diff Editor
    'diffEditor.insertedTextBackground': createNordColor('nord14', 'alpha20'),
    'diffEditor.removedTextBackground': createNordColor('nord11', 'alpha20'),

    // Minimap
    'minimap.findMatchHighlight': createNordColor('nord8'),
    'minimap.selectionHighlight': createNordColor('nord8', 'alpha50'),
    'minimapGutter.addedBackground': createNordColor('nord14'),
    'minimapGutter.modifiedBackground': createNordColor('nord9'),
    'minimapGutter.deletedBackground': createNordColor('nord11'),

    // Overview Ruler
    'editorOverviewRuler.findMatchForeground': createNordColor('nord8'),
    'editorOverviewRuler.modifiedForeground': createNordColor('nord9'),
    'editorOverviewRuler.addedForeground': createNordColor('nord14'),
    'editorOverviewRuler.deletedForeground': createNordColor('nord11'),
    'editorOverviewRuler.errorForeground': createNordColor('nord11'),
    'editorOverviewRuler.warningForeground': createNordColor('nord13'),
    'editorOverviewRuler.infoForeground': createNordColor('nord8')
}; 