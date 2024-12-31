import { ITokenColor } from '../interfaces/theme.interface';
import { createNordColor, NordColors } from '../colors/nord.colors';

export const tokenColors: ITokenColor[] = [
    // Comments
    {
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
            foreground: `${NordColors.nord3}`,
            fontStyle: 'italic'
        }
    },

    // Strings
    {
        scope: ['string', 'string.quoted', 'string.template'],
        settings: {
            foreground: createNordColor('nord14')
        }
    },

    // Constants
    {
        scope: ['constant.numeric', 'constant.language', 'constant.character', 'constant.other'],
        settings: {
            foreground: createNordColor('nord15')
        }
    },

    // Variables
    {
        scope: ['variable.other.readwrite', 'variable.other.object', 'variable.other.property'],
        settings: {
            foreground: createNordColor('nord4')
        }
    },

    // Keywords
    {
        scope: ['keyword', 'storage.type', 'storage.modifier'],
        settings: {
            foreground: createNordColor('nord9')
        }
    },

    // Functions
    {
        scope: ['entity.name.function', 'support.function'],
        settings: {
            foreground: createNordColor('nord8')
        }
    },

    // Types
    {
        scope: ['entity.name.type', 'support.type', 'support.class'],
        settings: {
            foreground: createNordColor('nord7')
        }
    },

    // Language Variables
    {
        scope: ['variable.language', 'support.variable', 'support.constant'],
        settings: {
            foreground: createNordColor('nord9'),
            fontStyle: 'italic'
        }
    },

    // HTML/XML Tags
    {
        scope: ['entity.name.tag', 'punctuation.definition.tag'],
        settings: {
            foreground: createNordColor('nord9')
        }
    },

    // HTML/XML Attributes
    {
        scope: ['entity.other.attribute-name'],
        settings: {
            foreground: createNordColor('nord8')
        }
    },

    // Markdown
    {
        scope: ['markup.heading'],
        settings: {
            foreground: createNordColor('nord8'),
            fontStyle: 'bold'
        }
    },
    {
        scope: ['markup.inline.raw', 'markup.fenced_code'],
        settings: {
            foreground: createNordColor('nord14')
        }
    },
    {
        scope: ['markup.bold'],
        settings: {
            foreground: createNordColor('nord9'),
            fontStyle: 'bold'
        }
    },
    {
        scope: ['markup.italic'],
        settings: {
            foreground: createNordColor('nord9'),
            fontStyle: 'italic'
        }
    },
    {
        scope: ['markup.list'],
        settings: {
            foreground: createNordColor('nord9')
        }
    },
    {
        scope: ['markup.quote'],
        settings: {
            foreground: createNordColor('nord14'),
            fontStyle: 'italic'
        }
    },
    {
        scope: ['markup.link'],
        settings: {
            foreground: createNordColor('nord8')
        }
    },

    // Punctuation
    {
        scope: ['meta.brace'],
        settings: {
            foreground: createNordColor('nord6')
        }
    },
    {
        scope: ['punctuation.definition', 'punctuation.separator', 'punctuation.terminator'],
        settings: {
            foreground: createNordColor('nord4')
        }
    },

    // Decorators
    {
        scope: ['meta.decorator', 'meta.decorator punctuation.decorator'],
        settings: {
            foreground: createNordColor('nord15')
        }
    },

    // Invalid
    {
        scope: ['invalid', 'invalid.illegal'],
        settings: {
            foreground: createNordColor('nord11')
        }
    },
    {
        scope: ['invalid.deprecated'],
        settings: {
            foreground: createNordColor('nord13')
        }
    }
]; 