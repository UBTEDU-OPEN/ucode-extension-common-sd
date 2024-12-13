import { GeneratorDefinition } from '../../../../types/register';
export declare enum CustomFieldGeneratorKeys {
    rgb_color = "rgb_color",
    matrix = "matrix",
    custom_matrix = "custom_matrix"
}
export declare const CustomFieldGenerators: {
    [CustomFieldGeneratorKeys.rgb_color]: GeneratorDefinition.BlockGenerator;
    [CustomFieldGeneratorKeys.matrix]: GeneratorDefinition.BlockGenerator;
    [CustomFieldGeneratorKeys.custom_matrix]: GeneratorDefinition.BlockGenerator;
};
