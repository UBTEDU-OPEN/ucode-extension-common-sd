import { GeneratorDefinition } from '../../../../types/register';
export declare enum OperatorGeneratorKeys {
    operator_compare = "operator_compare",
    operator_add = "operator_add",
    operator_subtract = "operator_subtract",
    operator_multiply = "operator_multiply",
    operator_divide = "operator_divide",
    operator_lt = "operator_lt",
    operator_equals = "operator_equals",
    operator_gt = "operator_gt",
    operator_and = "operator_and",
    operator_or = "operator_or",
    operator_not = "operator_not",
    operator_random = "operator_random",
    operator_join = "operator_join",
    operator_letter_of = "operator_letter_of",
    operator_length = "operator_length",
    operator_contains = "operator_contains",
    operator_mod = "operator_mod",
    operator_mathop = "operator_mathop",
    operator_number = "operator_number",
    operator_arithmetic = "operator_arithmetic",
    operator_bit = "operator_bit",
    operator_left = "operator_left",
    operator_right = "operator_right",
    operator_to_int = "operator_to_int",
    operator_max_min = "operator_max_min",
    operator_operation = "operator_operation",
    operator_true_or_false_number = "operator_true_or_false_number",
    operator_true_or_false_boolean = "operator_true_or_false_boolean",
    operator_curr_system_time = "operator_curr_system_time"
}
export declare const OperatorGenerators: {
    [key in OperatorGeneratorKeys]: GeneratorDefinition.BlockGenerator;
};
