import type { DiscoverDeviceType } from '@ubt/ucode-common-types';
import type { QueueConstructorType } from '@ubt/ucode-utils/dist/queue';
import type { OpenOptions } from '../../ucodelink';
export type { QueueConstructorType } from '@ubt/ucode-utils/dist/queue';
/**
 * 串口协议 **设备类型** 常量
 * 默认是输出：
 * ```javascript
 * {
 *  id: DeviceTypeId.serialport,
 *  connectType: 'discover',
 *  name: 'USB连接'
 * }
 * ```
 * - id: 如果要使用一些标准的 uCode 串口协议权限 `id` 必须和 {@link DeviceTypeID.serialport} 保持一致
 * - connectType: 串口的话必须指定为 `discover` 类型，否则无法正常搜索
 * - name: 显示名称可以自定义
 */
export declare const SerialPortDeviceType: DiscoverDeviceType;
/**
 * 串口过滤器类型
 *
 * 例如：
 *
 * ```javascript
 * const filer = {
 *  vid: "0403",
 *  pid: "6001",
 * };
 * ```
 *
 */
export declare type SerialPortFilterOptions = {
    /**
     * Product ID 产品 ID 十六进制显示
     */
    pid: string;
    /**
     * Vendor ID 厂商 ID 十六进制显示
     */
    vid: string;
};
/**
 * 串口构建函数参数类型
 */
export declare type SerialPortConstructorOptionType = {
    /**
     * 串口打开参数，可以设置 波特率 等
     *
     * ```javascript
     * const openOptions = {
     *   baudRate: 115200, // 串口打开的波特率
     *   bufferSize: 12 * 1024 * 1024, // 缓冲区大小
     * };
     * ```
     */
    openOptions?: OpenOptions;
    /**
     * 串口 队列参数，可以设置 队列 发送的 间隔 或者 数量
     */
    queueOptions?: QueueConstructorType;
};
/**
 * 自定义串口设备名字
 *
 * 可以通过传递一个函数，data 里面包含这些参数：
 *
 * - **comName**: 串口号
 * - **pid**: Product ID
 * - **vid**: Vendor ID
 * - **serial**: 串口序列号
 *
 * 下面是案例：
 *
 * ```javascript
 * const customDeviceName = (data) => `myRobot_${data?.comName}`;
 * ```
 */
export declare type SerialPortCustomDeviceName = (data?: {
    comName: string;
    pid?: string;
    vid?: string;
    serial?: string;
}) => string;
/**
 * 串口注册参数类型
 */
export declare type SerialPortRegisterOptions = {
    /**
     * 串口过滤器，这个参数是实例化 {@link SerialPortDiscover} 的时候作为第三个参数传递的
     */
    filter?: SerialPortFilterOptions;
    /**
     * 自定义串口设备名：可以通过一些数据，自己生成新的设备名
     *
     */
    customDeviceName?: SerialPortCustomDeviceName;
    /**
     * 串口打开参数，可以设置 波特率 等
     */
    openOptions?: OpenOptions;
    /**
     * 串口 队列参数，可以设置 队列 发送的 间隔 或者 数量
     */
    queueOptions?: QueueConstructorType;
    /**
     * 扫描时间
     */
    scanTime?: number;
};
