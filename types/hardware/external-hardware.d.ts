import type { UBT, UCode } from '../common';
import type { DeviceConnectionInterface, DeviceType, DefaultTargetData } from './hardware';
import type { UCodeScratchDefinition } from '../scratch';
import type { DeviceRegisterType } from './register';
import type { UCodeUploadMode, GeneratorDefinition, LanguageGenerator } from './upload';
import type { UCodeCustomUI } from './custom-ui';

export declare namespace UCodeExternalHardwareDefinition {
  type Manifest = {
    id: string;
    USV: string;
    version: string;
    icon?: string;
    name: string | UBT.IntlMessage;
    description?: string | UBT.IntlMessage;
    author?: string | UBT.IntlMessage;
    supportModes: UCode.WorkingModeType[];
  };

  type BlockInfo = UCodeScratchDefinition.BlockInfo & {
    onlySupportUploadMode?: boolean;
  };
  export type GetInfo = UCodeScratchDefinition.GetInfoInterface<BlockInfo>;

  /**
   * 硬件插件带有构造函数的类型
   */
  export interface ExtensionClassType {
    getInfo(): GetInfo | GetInfo[];
  }

  export type ExtensionSettingUtil = {
    getDevice: <T extends DeviceConnectionInterface>() => T | undefined;
    targetId: string;
  };

  type CommonSettingMenuItem<T = any> = {
    /**
     * 菜单名
     */
    name: string;
    /**
     * 菜单图标
     */
    icon: string;
    /**
     * 支持的设备连接类型，不支持将被禁用。比如一个菜单只能在串口下使用，在蓝牙连接方式下，会被禁用
     */
    availableDeviceTypes?: DeviceType[];
    /**
     * 支持的工作模式，不支持将被禁用。比如一个菜单只能在在线模式下使用，在烧录模式下，会被禁用
     */
    availableWorkingModes?: UCode.WorkingModeType[];
    /**
     * UI显示的额外参数
     */
    additionalData?: T;
  };

  export type CallbackSettingMenuItem = CommonSettingMenuItem & {
    type: 'callback';
    callback: (util: ExtensionSettingUtil) => void;
  };

  type ReactComponentPropType = ExtensionSettingUtil & {
    menuName: string;
    menuId: string;
  };

  export interface ReactComponent {
    (props: ReactComponentPropType): JSX.Element;
  }

  type ReactComponentRegisterData = {
    title?: string;
    size?: UCodeCustomUI.ModalSizeType;
    radius?: string | number; // 弹窗的圆角
  };

  export type ReactSettingMenuItem = CommonSettingMenuItem<ReactComponentRegisterData> & {
    type: 'component';
    component: ReactComponent;
  };

  export type SettingMenuItem = CallbackSettingMenuItem | ReactSettingMenuItem;

  export type SettingMenuRegisterType = { [key: string]: Omit<SettingMenuItem, 'callback' | 'component'> };

  export type ExtensionRegister = {
    BlockRegister: UBT.IType<ExtensionClassType>;
    DeviceRegister: DeviceRegisterType[] | DeviceRegisterType;
    UploadModeRegister?: UploadModeRegister<any>[] | UploadModeRegister<any>;
    SettingMenuRegister?: UBT.KeyValueOf<SettingMenuItem>;
    DefaultTargetDataRegister?: DefaultTargetData;
  };

  type LanguageGeneratorClassType = {
    new (): LanguageGenerator;
  };

  export type UploadModeRegister<P extends DeviceConnectionInterface> = UCodeUploadMode.BaseUploadModeRegister<P> & {
    CommonBlockGenerators: { [key: string]: GeneratorDefinition.BlockGenerator };
    CustomBlockGenerators: { [key: string]: GeneratorDefinition.BlockGenerator };
    LanguageGenerator: LanguageGeneratorClassType;
  };
}

/**
 * 插件的全局上下文 声明文件
 */
export declare namespace UCodeWorkerScope {
  /**
   * 硬件插件全局上下文
   *
   * 通过 `self.UCode` 访问
   *
   * 例如：
   *
   * ```javascript
   * self.UCode.ArgumentType.ANGLE
   * ```
   */
  type ExternalExtensionGlobalVariable = {
    /**
     * 翻译文件格式化
     */
    formatMessage: (msg: UBT.IntlMessage) => string;
    /**
     * 积木块可用的参数类型 常量
     */
    ArgumentType: UCode.ArgumentTypeDef;
    /**
     * 可用的积木块类型 常量
     */
    BlockType: UCode.BlockTypeDef;
    /**
     * 插件上下文
     */
    extensions: {
      /**
       * 注册入口，可以通过这个函数注入整个插件
       */
      register: (extensionRegister: UCodeExternalHardwareDefinition.ExtensionRegister) => void;
      /**
       * 获取硬件协议的函数，需要通过 `TargetId` 角色的ID (角色ID每次加载都会重新生成，需要实时运行)
       */
      getDevice: <T extends DeviceConnectionInterface>(targetId: string) => T | undefined;
    };
    /**
     * 常量上下文
     */
    Constant: {
      /**
       * 连接状态常量
       */
      ConnectStatus: UCode.DeviceConnectStatusType;
    };
    /**
     * 环境变量
     */
    Env: {
      /**
       * 系统环境
       */
      PlatformType: UCode.PlatformType;
      /**
       * 宿主环境
       */
      HostType: UCode.HostType;
      /**
       * Locale
       */
      Locale: string;
    };
  };
}
