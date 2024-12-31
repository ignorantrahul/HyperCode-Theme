import { ISemanticTokenColors } from '../interfaces/theme.interface';
import { createNordColor, NordColors } from '../colors/nord.colors';

export const semanticTokenColors: ISemanticTokenColors = {
    // Types and Classes
    namespace: createNordColor('nord7'),
    class: createNordColor('nord7'),
    enum: createNordColor('nord9'),
    interface: createNordColor('nord8'),
    struct: createNordColor('nord7'),
    typeParameter: createNordColor('nord8'),
    type: createNordColor('nord7'),

    // Variables and Properties
    parameter: createNordColor('nord4'),
    variable: createNordColor('nord4'),
    property: createNordColor('nord4'),
    enumMember: createNordColor('nord9'),

    // Functions and Methods
    function: createNordColor('nord8'),
    method: createNordColor('nord8'),
    macro: createNordColor('nord15'),
    decorator: createNordColor('nord15'),

    // Language Constructs
    keyword: createNordColor('nord9'),
    comment: `${NordColors.nord3}`,
    string: createNordColor('nord14'),
    number: createNordColor('nord15'),
    regexp: createNordColor('nord13'),
    operator: createNordColor('nord9'),

    // Special Variables
    'variable.readonly': createNordColor('nord4'),
    'variable.constant': createNordColor('nord4'),
    'variable.global': createNordColor('nord4'),
    'variable.defaultLibrary': createNordColor('nord9'),
    'function.defaultLibrary': createNordColor('nord8'),

    // Events and Labels
    event: createNordColor('nord8'),
    label: createNordColor('nord9')
}; 