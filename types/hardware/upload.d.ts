import { UCodeCustomError } from '@ubt/ucode-error-code';
import { UCode } from '../common';
import { DeviceConnectionInterface } from './hardware';

export declare namespace UCodeUploadMode {
  export interface UploaderInterface<P extends DeviceConnectionInterface> {
    /**
     * 切换模式的时候会触发这里
     *
     * > 注意, 如果用户没有初始化烧录模式, 点击在线模式, 是不会到这里的
     *
     * @param mode 模式 **Upload** 或者 **Online**
     */
    switchMode?(mode: UCode.WorkingModeType): Promise<void>;
    /**
     * 环境准备
     */
    prepareEnv?(debugCallback?: (data: string) => void, progressCallback?: (progress: number) => void): Promise<void>;
    /**
     * 烧录代码
     *
     * @param code 代码字符串
     * @param debugCallback 调试窗口 callback
     * @param progressCallback 进度 callback
     */
    uploadCode(code: string, debugCallback?: (data: string) => void, progressCallback?: (progress: number) => void): Promise<void>;
    /**
     * @hook
     *
     * 烧录代码前的钩子, 可以做一些检查操作, 或者对代码进行二次加工, 如果返回的 **code** 非空, 会直接作为 {@link DeviceUploadInterface.uploadCode} 的参数传入
     */
    beforeUploadCode?(code: string): Promise<{ code: string } | void>;
    /**
     * 烧录代码之后的钩子, 可以作为一些释放操作, 例如: 释放掉串口, 检查是否完成, 脚本是否正在运行等
     *
     * 📢注意!!!:
     * - **无论 {@link DeviceUploadInterface.uploadCode} 是否执行成功, 该钩子都会执行**
     * - **烧录流程不会等待 该钩子执行完成, 阻塞该该钩子可能无法完成操作, 如果有需要阻塞的, 请放到 {@link DeviceUploadInterface.uploadCode} 里面处理**
     *
     * @hook
     * @param code 代码字符串 会把 {@link DeviceUploadInterface.uploadCode} 代码作为参数传入
     * @param error 如果前面的操作有报错, 会把错误传到这里
     */
    afterUploadCode?(code: string, error?: UCodeCustomError | unknown): Promise<void>;

    /**
     * 当烧录或者运行过程中, 用户点击强制取消, 会执行该函数, 如果中断需要执行某些 销毁动作, 请在这个钩子处理
     *
     * 📢注意: 如果用户选择取消等待, 会直接退出
     *
     * @param action 中断的行为, 烧录是: 'upload', 运行是: 'run'
     */
    interrupt?(action: 'run' | 'upload'): Promise<void>;
    /**
     * 运行代码 可以和 upload 作为两个不同类型
     */
    runCode?(code: string, debugCallback?: (data: string) => void, progressCallback?: (progress: number) => void): Promise<void>;
    /**
     * 运行代码 之前的钩子
     *
     * 可以做一些检查操作 或者对代码进行二次加工, 如果返回的 **code** 非空, 会直接作为 {@link DeviceUploadInterface.runCode} 的参数传入
     *
     * 📢注意: 如果 {@link DeviceUploadInterface.runCode} 不存在的话, 不会执行这个钩子
     *
     * @hook
     * @param code 代码
     */
    beforeRunCode?(code: string): Promise<{ code: string } | void>;
    /**
     * 运行代码之后的钩子, 可以作为一些释放操作, 例如: 释放掉串口, 检查是否完成
     *
     * 📢注意!!!:
     * - **无论 {@link DeviceUploadInterface.runCode} 是否执行成功, 该钩子都会执行**
     * - **运行流程不会等待 该钩子执行完成, 阻塞该该钩子可能无法完成操作, 如果有需要阻塞的, 请放到 {@link DeviceUploadInterface.runCode} 里面处理**
     *
     * @param code 代码
     */
    afterRunCode?(code: string, error?: UCodeCustomError | unknown): Promise<void>;

    /**
     * 销毁
     */
    destroy?(): Promise<void>;
  }

  export interface BaseDeviceUploaderClassType<P extends DeviceConnectionInterface> {
    new (getDevice: () => P | undefined): UploaderInterface<P>;
  }

  export type BaseUploadModeRegister<P extends DeviceConnectionInterface> = {
    generatorLanguage: UCode.GeneratorLanguageType;
    uploader: UCodeUploadMode.BaseDeviceUploaderClassType<P>;
  };
}

export { GeneratorDefinition } from '../../code-generator/types/register';
export { LanguageGenerator } from '../../code-generator/types/language';
export { UcdBlock } from '../../code-generator/types/ucd';
