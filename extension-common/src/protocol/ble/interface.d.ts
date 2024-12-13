/// <reference types="web-bluetooth" />
import type { QueueConstructorType } from '@ubt/ucode-utils/dist/queue';
/**
 * 蓝牙过滤类型，和标准的 Webbluetooth 一致：[BluetoothLEScanFilter](https://webbluetoothcg.github.io/web-bluetooth/scanning.html#bluetoothlescanfilter)
 */
export declare type BleFilterType = BluetoothLEScanFilter[];
export declare type BleCharacteristic = {
    name?: string;
    uuid: BluetoothCharacteristicUUID;
    readable?: boolean;
} | BluetoothCharacteristicUUID;
/**
 * 蓝牙 Service 以及它下面的 characteristics
 */
export declare type BleServiceUUID = {
    serviceUUID: BluetoothServiceUUID;
    characteristics: BleCharacteristic[];
};
/**
 * 蓝牙注册 Options
 */
export declare type BleRegisterOptions = {
    filters?: BleFilterType;
    services: BleServiceUUID | BleServiceUUID[];
    /**
     * 需要提供了 **defaultWriteCharacteristicUUID**, {@link CommonBleHardwareDevice.send} 才会生效
     */
    defaultWriteCharacteristicUUID?: BluetoothCharacteristicUUID;
    /**
     * 队列参数
     */
    queueOptions?: QueueConstructorType;
    /**
     * requestDevices 的一个参数，uCodeBle 也适用
     * [参考](https://developer.mozilla.org/zh-CN/docs/Web/API/Bluetooth/requestDevice#%E5%8F%82%E6%95%B0)
     */
    optionalServices?: BluetoothServiceUUID[];
    /**
     * 扫描时间
     */
    scanTime?: number;
    /**
     * 自定义蓝牙设备名：可以通过一些数据，自己生成新的设备名
     *
     */
    customDeviceName?: (deviceName: string) => string;
};
/**
 * 蓝牙 onChange 的数据
 */
export declare type BleChangeDataValue = {
    buffer: ArrayBuffer;
    byteLength: number;
    byteOffest: number;
};
