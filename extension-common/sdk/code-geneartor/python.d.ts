import { UCodeExternalHardwareDefinition, GeneratorDefinition, DeviceConnectionInterface, UCodeUploadMode } from '@ubt/ucode-common-types';
import { PythonCommonGeneratorKeys } from '../../../code-generator/src';
export * as PythonConstant from '../../../code-generator/src/language/python/constant';
export declare type PythonGeneratorType<P extends DeviceConnectionInterface> = {
    CommonGeneratorOverwrite?: Partial<Record<PythonCommonGeneratorKeys, GeneratorDefinition.BlockGenerator>>;
    CustomBlockGenerators: {
        [key: string]: GeneratorDefinition.BlockGenerator;
    };
    uploader: UCodeUploadMode.BaseDeviceUploaderClassType<P>;
};
export declare function getPythonCodeGenerators<P extends DeviceConnectionInterface>(args: PythonGeneratorType<P>): UCodeExternalHardwareDefinition.UploadModeRegister<any>;
