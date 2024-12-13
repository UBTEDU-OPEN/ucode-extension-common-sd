import { GeneratorDefinition } from '../../../../types/register';
export declare enum ArduinoStartGeneratorKeys {
    common_block_arduino_setup = "common_block_arduino_setup",
    common_block_arduino_loop = "common_block_arduino_loop"
}
export declare const ArduinoStartGenerators: {
    [ArduinoStartGeneratorKeys.common_block_arduino_setup]: GeneratorDefinition.BlockGenerator;
    [ArduinoStartGeneratorKeys.common_block_arduino_loop]: GeneratorDefinition.BlockGenerator;
};
