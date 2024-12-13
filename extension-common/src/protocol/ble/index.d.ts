/**
 * 蓝牙协议 统称 BLE，特指 4.0 以上的协议，3.0 或者 2.0 不支持
 *
 * 蓝牙协议包含了两种协议：
 *
 * - {@link UCodeBleProtocol}
 * - {@link UCodeBleProtocol}
 *
 * 这两种协议有什么区别？
 *
 * **UCodeBle** 是 uCode 自己依赖 `uCodeLink` 实现的蓝牙协议，它可以直接在程序中获取到蓝牙列表，进一步的可以获取一些额外的权限，但是缺陷就是必须依赖 `uCodeLink` ，而且 平台有所限制，PC 只支持 `Windows` 和 `MacOS`，移动端的只有 APP 版本的才支持
 *
 * **WebBle** 则是走的浏览器的默认的 [WebBluetooth](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API) 协议，但目前沙盒系统的问题，暂不支持开放，后续解决了权限问题，会重新开放
 *
 * 这两种协议都是继承自 {@link UCodeBleProtocol}
 *
 * 另外由于两种协议的扫描方式不一样:
 *
 * **UCodeBle** 的设备类型是 **扫描连接设备类型** 也就是 {@link DiscoverDeviceType}
 *
 * **Webble** 的设备类型是 **自动连接设备类型** 也就是 {@link AutoConnectDeviceType}
 *
 * 要注意的是，注册器也是分成了两个:
 *
 * - {@link getUCodeBleDeviceRegister}
 * - {@link getWebBleDeviceRegister}
 *
 *
 * @module BluetoothLE
 * @module
 */
export * from './ucodeble-protocol';
export * from './union-ble-protocol';
export * from './webble-protocol';
export * from './register';
export * from './interface';
export * from './constant';
export * from './common-ble-protocol';
