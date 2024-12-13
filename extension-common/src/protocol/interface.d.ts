import type { UBT, IDeviceDiscover, DeviceConnectionInterface } from '@ubt/ucode-common-types';
/**
 * 自动连接 **硬件设备** 连接类型
 *
 * _这种类型的硬件设备不需要提供 Discover_
 */
export declare type AutoConnectDeviceOptions<K> = {
    DeviceConnection: UBT.IType<DeviceConnectionInterface>;
    Options: K;
};
/**
 * 扫描 **硬件设备** 连接类型
 * _这种类型的硬件设备需要提供 Discover_
 */
export declare type DiscoverDeviceOptions<K> = {
    /**
     * 实现 {@link DeviceConnectionInterface} 的接口
     */
    DeviceConnection: UBT.IType<DeviceConnectionInterface>;
    /**
     * 实现 {@link IDeviceDiscover} 的接口
     */
    Discover?: UBT.IType<IDeviceDiscover>;
    /**
     * 这是实例化 Discover 和 HardwarDevice 的时候传递的参数，例如，串口协议可以传递 过滤器，波特率等，可以参考：{@link SerialPortRegisterOptions}
     */
    Options: K;
};
