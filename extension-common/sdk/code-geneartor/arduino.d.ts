import { UCodeExternalHardwareDefinition, GeneratorDefinition, DeviceConnectionInterface, UCodeUploadMode } from '@ubt/ucode-common-types';
import { ArduinoCommonGeneratorKeys } from '../../../code-generator/src';
export * as ArduinoConstant from '../../../code-generator/src/language/arduino/constant';
export declare type ArduinoGeneratorType<P extends DeviceConnectionInterface> = {
    CommonGeneratorOverwrite?: Partial<Record<ArduinoCommonGeneratorKeys, GeneratorDefinition.BlockGenerator>>;
    CustomBlockGenerators: {
        [key: string]: GeneratorDefinition.BlockGenerator;
    };
    uploader: UCodeUploadMode.BaseDeviceUploaderClassType<P>;
};
export declare function getArduinoCodeGenerators<P extends DeviceConnectionInterface>(args: ArduinoGeneratorType<P>): UCodeExternalHardwareDefinition.UploadModeRegister<any>;
