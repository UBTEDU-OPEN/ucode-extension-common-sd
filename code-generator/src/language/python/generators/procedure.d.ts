import { GeneratorDefinition } from '../../../../types/register';
export declare enum ProcedureGeneratorKeys {
    procedures_definition = "procedures_definition",
    procedures_prototype = "procedures_prototype",
    procedures_call = "procedures_call",
    argument_reporter_string_number = "argument_reporter_string_number",
    argument_reporter_boolean = "argument_reporter_boolean"
}
export declare const ProcedureGenerators: {
    [key in ProcedureGeneratorKeys]: GeneratorDefinition.BlockGenerator;
};
