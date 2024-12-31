import { BaseTheme } from './base.theme';
import { LightColors } from '../colors/light.colors';
import { createColor } from '../colors/base.colors';

export class LightTheme extends BaseTheme {
    protected colors = LightColors;
    protected name = 'HyperCode Light';
    protected type = 'light' as const;

    protected createSemanticTokenColors() {
        return {
            namespace: createColor(this.colors.primary),
            class: createColor(this.colors.primary),
            enum: createColor(this.colors.secondary),
            interface: createColor(this.colors.secondaryLight),
            struct: createColor(this.colors.primary),
            typeParameter: createColor(this.colors.secondaryLight),
            type: createColor(this.colors.primary),
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
            comment: createColor(this.colors.gray7),
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
                    foreground: createColor(this.colors.gray7),
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
                    foreground: createColor(this.colors.primary)
                }
            }
        ];
    }
} 