import { GeneratorDefinition } from '../../../../types/register';
export declare enum MathGeneratorKeys {
    number_input = "number_input",
    math_number = "math_number",
    colour_picker = "colour_picker",
    text = "text",
    math_whole_number = "math_whole_number",
    math_positive_number = "math_positive_number",
    math_integer = "math_integer",
    note = "note",
    math_angle = "math_angle"
}
export declare const MathGenerators: {
    [key in MathGeneratorKeys]: GeneratorDefinition.BlockGenerator;
};
