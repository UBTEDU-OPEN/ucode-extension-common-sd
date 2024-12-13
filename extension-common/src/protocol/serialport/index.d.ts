/**
 * SerialPort 串口协议 API 包括以下几个部分：
 * - {@link SerialPortDeviceType} 串口 设备类型
 * - {@link SerialPortHardwareDevice} 串口连接
 * - {@link SerialPortDiscover} 串口发现
 * - {@link getSerialPortDeviceRegister} 串口协议 注册器
 *
 * 下面是完整的代码使用案例：
 *
 * ```javascript
 * import { CommonDevices } from "@ubtech/ucode-extension-common-sdk";
 *
 * const { SerialPortHardwareDevice, getSerialPortDeviceRegister } = CommonDevices.SerialPort;
 *
 * class DemoSerialPortHardwareDevice extends SerialPortHardwareDevice { // 继承 SerialPortHardwareDevice
 *   say(data) {
 *     this.send(Buffer.from(data));
 *   }
 * }
 *
 * export const spRegister = getSerialPortDeviceRegister({
 *   DeviceConnection: DemoSerialPortHardwareDevice,
 *   // 以下配置均为可选配置
 *   Options: {
 *     openOptions: {
 *       baudRate: 115200, // 串口打开的波特率
 *       bufferSize: 12 * 1024 * 1024, // 缓冲区大小
 *     },
 *     queueOptions: {
 *       enable: true, // 数据发送是否启用队列
 *       interval: 70, // 启用队列时数据发送的间隔
 *     },
 *     // 发现设备时过滤用的vid和pid,配置后将只显示和配置id一致的串口设备
 *     filter: {
 *       vid: "0403",
 *       pid: "6001",
 *     },
 *     // 自定义显示串口设备名
 *     customDeviceName: (data) => `myRobot_${data?.comName}`,
 *   },
 * });
 * ```
 *
 *
 * 除了这些以外，还导出了一些 TypeScript 的类型定义，你都可以从下面找到对应的入口
 *
 * @module SerialPort
 * @module
 */
export * from './protocol';
export * from './discover';
export * from './register';
export * from './common';
