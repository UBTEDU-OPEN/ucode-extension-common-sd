import { DiscoverRegister } from './discover';
import type { AutoConnectDeviceType, DiscoverDeviceType, InputIdDeviceType, HardwareDeviceRegister } from './hardware';

/**
 * 自动连接 设备类型的协议注册器
 *
 * 不需要提供 Discover
 */
export type AutoConnectDeviceRegister<T> = {
  /**
   * type 默认可以不提供，默认就是 'auto'
   */
  type?: 'auto';
  /**
   * 需要提供一个自动连接的设备类型
   */
  DeviceType: AutoConnectDeviceType;
  /**
   * 硬件设备类
   */
  DeviceConnection: HardwareDeviceRegister;
  /**
   * 注册参数，实例化 DeviceConnection 的时候作为第三个参数提供
   */
  Options?: T;
};

/**
 * 扫描 设备类型的协议注册器
 *
 * 需要提供 Discover
 */
export type DiscoverDeviceRegister<T> = {
  /**
   * 类型必须是: **discover**
   */
  type: 'discover';
  /**
   * 必须 提供一个 扫描 设备类型
   */
  DeviceType: DiscoverDeviceType;
  /**
   * 硬件设备类
   */
  DeviceConnection: HardwareDeviceRegister;
  /**
   * 硬件扫描类
   */
  Discover: DiscoverRegister;
  /**
   * 注册参数，实例化 Discover 或者 DeviceConnection 的时候作为第三个参数提供
   */
  Options?: T;
};

/**
 * 输入设备ID 设备类型的协议注册器
 *
 * 不需要提供 Discover
 */
export type InputDeviceIdRegister<T> = {
  /**
   * type 默认可以不提供，默认就是 'auto'
   */
  type?: 'inputDeviceId';
  /**
   * 需要提供一个自动连接的设备类型
   */
  DeviceType: InputIdDeviceType;
  /**
   * 硬件设备类
   */
  DeviceConnection: HardwareDeviceRegister;
  /**
   * 注册参数，实例化 DeviceConnection 的时候作为第三个参数提供
   */
  Options?: T;
};

/**
 * 硬件设备注册器目前包括：
 * - {@link AutoConnectDeviceRegister}
 * - {@link DiscoverDeviceRegister}
 * - {@link InputDeviceIdRegister}
 */
export type DeviceRegisterType = AutoConnectDeviceRegister<any> | DiscoverDeviceRegister<any> | InputDeviceIdRegister<any>;
