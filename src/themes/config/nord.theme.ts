import { BaseTheme } from './base.theme';
import { NordColors, createNordColor } from '../colors/nord.colors';

export class NordTheme extends BaseTheme {
    protected colors = NordColors;
    protected name = 'HyperCode Nord';
    protected type = 'dark' as const;

    protected createSemanticTokenColors() {
        return {
            namespace: createNordColor('nord7'),
            class: createNordColor('nord7'),
            enum: createNordColor('nord9'),
            interface: createNordColor('nord8'),
            struct: createNordColor('nord7'),
            typeParameter: createNordColor('nord8'),
            type: createNordColor('nord7'),
            parameter: createNordColor('nord4'),
            variable: createNordColor('nord4'),
            property: createNordColor('nord4'),
            enumMember: createNordColor('nord9'),
            decorator: createNordColor('nord15'),
            event: createNordColor('nord8'),
            function: createNordColor('nord8'),
            method: createNordColor('nord8'),
            macro: createNordColor('nord15'),
            label: createNordColor('nord9'),
            comment: createNordColor('nord3'),
            string: createNordColor('nord14'),
            keyword: createNordColor('nord9'),
            number: createNordColor('nord15'),
            regexp: createNordColor('nord13'),
            operator: createNordColor('nord9')
        };
    }

    protected createTokenColors() {
        return [
            {
                scope: ['comment', 'punctuation.definition.comment'],
                settings: {
                    foreground: createNordColor('nord3'),
                    fontStyle: 'italic'
                }
            },
            {
                scope: ['string', 'string.quoted', 'string.template'],
                settings: {
                    foreground: createNordColor('nord14')
                }
            },
            {
                scope: ['constant.numeric', 'constant.language', 'constant.character', 'constant.other'],
                settings: {
                    foreground: createNordColor('nord15')
                }
            },
            {
                scope: ['keyword', 'storage.type', 'storage.modifier'],
                settings: {
                    foreground: createNordColor('nord9')
                }
            },
            {
                scope: ['entity.name.function', 'support.function'],
                settings: {
                    foreground: createNordColor('nord8')
                }
            },
            {
                scope: ['variable.language', 'support.variable', 'support.constant'],
                settings: {
                    foreground: createNordColor('nord9'),
                    fontStyle: 'italic'
                }
            },
            {
                scope: ['entity.name.type', 'support.type', 'support.class'],
                settings: {
                    foreground: createNordColor('nord7')
                }
            }
        ];
    }
} 