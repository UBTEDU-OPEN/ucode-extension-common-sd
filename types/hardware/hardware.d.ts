import type { Disposable } from '@ubt/typedevent';
import { UCodeCustomError } from '@ubt/ucode-error-code';
import { UcdType } from '../ucd';
import { UBT, UCode } from '../common';
import { UCodeErrorType } from '../error';

export type ExternalHardwareExtensionOrigin = 'development' | 'external' | 'internal';

/**
 * 通用的 设备类型 定义
 */
type CommonDeviceType = {
  /**
   * 唯一 ID
   */
  id: string;
  /**
   * 名字
   */
  name: string;
  /**
   * 图标 支持 base64 或者 url, 大小在 128x128 或者 256x256 512x512 更佳
   */
  icon?: string;
  /**
   * 连接提示
   */
  tip?: DeviceConnectionTip;
};

/**
 * 自动连接 设备类型
 */
export type AutoConnectDeviceType = CommonDeviceType & {
  readonly connectType?: 'auto';
};

/**
 * 扫描 设备类型
 */
export type DiscoverDeviceType = CommonDeviceType & {
  readonly connectType: 'discover';
  /**
   * 扫描超时时间, 到达时间自动停止
   */
  scanTime?: number;
  /**
   * 是否要过滤已经连接过的设备, device.id 作为唯一标识, 默认过滤
   */
  skipDuplicate?: boolean;
};

export type InputDeviceIdConfigType = {
  inputPlaceholder?: string;
  // verify?: (text: string) => boolean;
  verifyRegex?: string | RegExp;
  invalidInputTip?: string;
};

/**
 * 输入设备id
 */
export type InputIdDeviceType = CommonDeviceType & {
  readonly connectType: 'inputDeviceId';
  configInfo?: InputDeviceIdConfigType;
};

export type DeviceType = AutoConnectDeviceType | DiscoverDeviceType | InputIdDeviceType;

export interface IDiscoverDevice {
  id: string;
  name: string;
  signal?: number;
  connectStatus: UCode.DeviceConnectStatusUnionType;
  deviceType: DeviceType;
  data?: any;
}

export interface DeviceEventbusInterface {
  dispatchConnect(): void;
  dispatchError(error: Error): void;
  dispatchDisconnect(): void;
  onConnect(listener: () => void): Disposable;
  onDisconnect(listener: () => void): Disposable;
  onceDisconnect(listener: () => void): Disposable;
  onError(listener: (args: { error: UCodeCustomError }) => void): Disposable;
  destroy(): void;
}

/**
 * Device Extension DeviceConnection Interface
 *
 * 这是最核心的 **硬件设备** 接口
 */
export interface DeviceConnectionInterface {
  /**
   * 扫描的时候选中的设备
   */
  discoverDevice?: IDiscoverDevice;
  /**
   * 连接状态 是一个枚举类型
   * ```javascript
   *  enum EConnectStatus {
   *    Connected = 0,
   *    Disconnected = 1,
   *    Connecting = 2,
   *    Disconnecting = 3,
   *    ConnectFail = 4,
   *    DisconnectFail = 5,
   *  }
   * ```
   */
  connectStatus: UCode.DeviceConnectStatusUnionType;
  /**
   * 硬件协议的事件 bus，会在 DeviceConnection 实例化的时候被注入
   */
  eventbus?: DeviceEventbusInterface;
  /**
   * 硬件协议的设备类型，会在 DeviceConnection 实例化的时候被注入
   */
  deviceType?: DeviceType;
  /**
   * 是否正在连接，由 DeviceConnection 提供
   */
  isConnected(): boolean;
  /**
   * 销毁动作
   */
  destroy(): Promise<void>;
  /**
   * 连接前的钩子
   * @deprecated before/after 打头的API 由于早期设计问题, 都不是真正的钩子, 因为它不对行为造成影响, 也没有感知, 我们不建议继续使用
   * @hook
   * @param device 扫描设备
   */
  beforeConnect?(device: IDiscoverDevice): Promise<void>;
  /**
   * 连接后的钩子
   * @deprecated before/after 打头的API 由于早期设计问题, 都不是真正的钩子, 因为它不对行为造成影响, 也没有感知, 我们不建议继续使用
   * @hook
   * @param device 扫描设备
   */
  afterConnect?(device: IDiscoverDevice): Promise<{ deviceName: string } | void>;
  /**
   * 断开连接前的钩子
   * @deprecated before/after 打头的API 由于早期设计问题, 都不是真正的钩子, 因为它不对行为造成影响, 也没有感知, 我们不建议继续使用
   * @hook
   */
  beforeDisconnect?(): Promise<void>;
  /**
   * 断开连接后的钩子
   * @deprecated before/after 打头的API 由于早期设计问题, 都不是真正的钩子, 因为它不对行为造成影响, 也没有感知, 我们不建议继续使用
   * @hook
   */
  afterDisconnect?(): Promise<void>;
  /**
   * 设备连接标准接口
   * @param device 扫描设备，注意，在自动连接的时候，这个值可能是空的
   */
  connect(device: IDiscoverDevice): Promise<void>;
  /**
   * 设备断开连接标准接口
   */
  disconnect(): Promise<void>;
  /**
   * 重新绑定设备，主要是针对模式不匹配需要重连的情况
   */
  reBindDevice?(): Promise<void>;
  /**
   * 是否开启环境检测
   *
   * 📢 注意: 该接口仅在 **checkEnv** 不为空的时候有效
   *
   * - 如果该接口为空, 默认认为开启环境检测
   *
   * - 如果该接口不为空, 返回的值是 false, uCode 执行的时候会跳过 (不会显示环检测的接口)
   *
   * 主要用于同步处理
   * 例如: 第一次连接硬件设备的时候, 需要检测 uCodeLink 是否开启, 一旦开启了之后, socket 的判断是同步的, 则可以显示 **环境检测中** 的界面
   */
  enableCheckEnv?(): boolean;
  /**
   * 环境检测接口
   */
  checkEnv?(): Promise<void>;
  /**
   * 错误处理
   * 如果 reject 抛出的是一个 `UCodeCustomError` `subErrorCode` 是 "timeout" 的错误, 会报超时 Toast (停留在当前窗口)
   * @returns 返回 Promise<true> 才会继续下一步, 返回 Promise<false> 会停留在当前窗口
   */
  handleError?(errorActionId: string): Promise<boolean>;
}

export type HardwareDeviceConstructorArgumentType<T = any> = {
  deviceType: DeviceType;
  eventbus: DeviceEventbusInterface;
  getWorkingMode: () => UCode.WorkingModeType;
  options?: T;
};

export interface HardwareDeviceRegister<T = any> {
  new (injectArgs: HardwareDeviceConstructorArgumentType<T>): DeviceConnectionInterface;
}

export type DeviceTargetCustomData = {
  extId: string;
  extType: string;
  extensionInfo?: {
    version: string;
    origin: ExternalHardwareExtensionOrigin;
    USV?: string;
  };
};

export type DeviceTargetSerializedData = UcdType.SerializedTargetJson<'device', DeviceTargetCustomData>;

export type DeserializeData =
  | {
      json: DeviceTargetSerializedData;
    }
  | undefined;

export type DefaultTargetData =
  | {
      json: UcdType.CommonSerializeTargetJson & {
        ucode?: {
          assets?: UcdType.SerializedTargetAssetList;
        };
      };
    }
  | undefined;

export interface SetBlockWarningText {
  (args: SetBlockWarningTextArguments): void;
}

export type SetBlockWarningTextArguments = { targetId: string; blockId: string; text: Error | string | UBT.IntlMessage | unknown };

export type DeviceConnectionTip =
  | {
      type: 'text';
      data: string;
    }
  | {
      type: 'image';
      data: {
        src: string;
        text: string;
      }[];
    }
  | {
      type: 'video';
      src: string;
    }
  | {
      type: 'gif';
      src: string;
    }
  | {
      type: 'markdown';
      data: string;
    };
