import type { DeviceType, IDiscoverDevice } from './hardware';
import { UCode } from '../common';
import { UCodeErrorType } from '../error';

export interface IDeviceDiscover {
  eventbus?: DiscoverEventBus;
  isDiscovering: boolean;
  start(): Promise<void>;
  stop(userCancel?: Boolean): Promise<void>;
  destroy(): Promise<void>;
  beforeStart?(): Promise<void>;
  afterStart?(): Promise<void>;
  beforeStop?(): Promise<void>;
  afterStop?(): Promise<void>;
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

export interface DiscoverEventBus {
  dispatchDiscover(devices: IDiscoverDevice[]): void;
  dispatchError(error: UCodeErrorType.CustomError | unknown): void;
  dispatchStartDiscover(): void;
  onDiscover(listener: (args: { devices: IDiscoverDevice[] }) => void): UCodeErrorType.Disposable;
  onStart(listener: () => void): UCodeErrorType.Disposable;
  onError(listener: (args: { error: UCodeErrorType.CustomError | unknown }) => void): UCodeErrorType.Disposable;
  destroy(): void;
}

export type DiscoverConstructorArgumentType<T = any> = {
  deviceType: DeviceType;
  eventbus: DiscoverEventBus;
  getWorkingMode: () => UCode.WorkingModeType;
  options?: T;
};

export interface DiscoverRegister {
  new (injectArgs: DiscoverConstructorArgumentType): IDeviceDiscover;
}
