import { GeneratorDefinition } from '../../../../types/register';
export declare enum ControlGeneratorKeys {
    control_wait = "control_wait",
    control_repeat = "control_repeat",
    control_forever = "control_forever",
    control_for = "control_for",
    control_if = "control_if",
    control_if_else = "control_if_else",
    control_delay = "control_delay",
    control_while_until = "control_while_until",
    control_flow_statements = "control_flow_statements",
    control_system_millis = "control_system_millis",
    control_boolean = "control_boolean",
    control_not = "control_not"
}
export declare const ControlGenerators: {
    [key in ControlGeneratorKeys]: GeneratorDefinition.BlockGenerator;
};
