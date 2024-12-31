import { BaseTheme } from './base.theme';
import { DarkColors } from '../colors/dark.colors';
import { createColor } from '../colors/base.colors';

export class DarkTheme extends BaseTheme {
    protected colors = DarkColors;
    protected name = 'HyperCode Dark';
    protected type = 'dark' as const;

    protected createSemanticTokenColors() {
        return {
            namespace: createColor(this.colors.primaryLight),
            class: createColor(this.colors.primaryLight),
            enum: createColor(this.colors.secondary),
            interface: createColor(this.colors.secondaryLight),
            struct: createColor(this.colors.primaryLight),
            typeParameter: createColor(this.colors.secondaryLight),
            type: createColor(this.colors.primaryLight),
            parameter: createColor(this.colors.foreground),
            variable: createColor(this.colors.foreground),
            property: createColor(this.colors.foreground),
            enumMember: createColor(this.colors.secondary),
            decorator: createColor(this.colors.accent3),
            event: createColor(this.colors.secondaryLight),
            function: createColor(this.colors.secondaryLight),
            method: createColor(this.colors.secondaryLight),
            macro: createColor(this.colors.accent3),
            label: createColor(this.colors.secondary),
            comment: createColor(this.colors.gray6),
            string: createColor(this.colors.accent1),
            keyword: createColor(this.colors.secondary),
            number: createColor(this.colors.accent3),
            regexp: createColor(this.colors.accent3),
            operator: createColor(this.colors.secondary)
        };
    }

    protected createTokenColors() {
        return [
            {
                scope: ['comment', 'punctuation.definition.comment'],
                settings: {
                    foreground: createColor(this.colors.gray6),
                    fontStyle: 'italic'
                }
            },
            {
                scope: ['string', 'string.quoted', 'string.template'],
                settings: {
                    foreground: createColor(this.colors.accent1)
                }
            },
            {
                scope: ['constant.numeric', 'constant.language', 'constant.character', 'constant.other'],
                settings: {
                    foreground: createColor(this.colors.accent3)
                }
            },
            {
                scope: ['keyword', 'storage.type', 'storage.modifier'],
                settings: {
                    foreground: createColor(this.colors.secondary)
                }
            },
            {
                scope: ['entity.name.function', 'support.function'],
                settings: {
                    foreground: createColor(this.colors.secondaryLight)
                }
            },
            {
                scope: ['variable.language', 'support.variable', 'support.constant'],
                settings: {
                    foreground: createColor(this.colors.secondary),
                    fontStyle: 'italic'
                }
            },
            {
                scope: ['entity.name.type', 'support.type', 'support.class'],
                settings: {
                    foreground: createColor(this.colors.primaryLight)
                }
            }
        ];
    }
} 