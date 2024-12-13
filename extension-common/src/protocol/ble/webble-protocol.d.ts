/// <reference types="web-bluetooth" />
import { IDiscoverDevice } from '@ubt/ucode-common-types';
import { BleCharacteristicsMap, CommonBleProtocol } from './common-ble-protocol';
/**
 * 流程中不需要discover device
 */
/**
 * WebBle 走的是标准的 [WebBluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API) 接口
 *
 * 需要注意的是，目前只有部分浏览器支持（具体的点击上面的链接查看）
 *
 * 另外，当前 **Worker** 无法使用 **Webbluetooth API** 后面我们会做一个中转器解决这个问题
 *
 */
export declare class WebBleProtocol extends CommonBleProtocol {
    /**
     * WebBle 请求设备调用的是
     * ```javascript
     *  navigator.bluetooth.requestDevice();
     * ```
     * @param device webble 为空，不需要传递
     * @returns
     */
    protected bleBeforeConnect(device?: IDiscoverDevice): Promise<BluetoothDevice>;
    private _checkFeatureAndPermission;
    /**
     * 该方法覆写了 {@link CommonBleHardwareDevice.bleAfterConnect} 但实际上标准的 Webbluetooth 不需要做什么，如果你有需要可以重写该方法
     * @virtual
     * @overwrite
     * @param server GATTServer
     * @param characteristics
     * @returns
     */
    protected bleAfterConnect(server: BluetoothRemoteGATTServer, characteristics: BleCharacteristicsMap): Promise<void>;
}
