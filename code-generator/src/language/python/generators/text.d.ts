import { GeneratorDefinition } from '../../../../types/register';
export declare enum TextGeneratorKeys {
    log_text = "log_text",
    log_text_char = "log_text_char",
    log_join = "log_join",
    variables_get_text = "variables_get_text",
    variables_set_text = "variables_set_text"
}
export declare const TextGenerators: {
    [TextGeneratorKeys.log_text]: GeneratorDefinition.BlockGenerator;
    [TextGeneratorKeys.log_text_char]: GeneratorDefinition.BlockGenerator;
    [TextGeneratorKeys.log_join]: GeneratorDefinition.BlockGenerator;
    [TextGeneratorKeys.variables_get_text]: GeneratorDefinition.BlockGenerator;
    [TextGeneratorKeys.variables_set_text]: GeneratorDefinition.BlockGenerator;
};
