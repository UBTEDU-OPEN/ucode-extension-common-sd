export function getNativeCallJsAPIs(): any;
export default class NativeCallJsAPIs extends BaseBridgeAPI {
    constructor();
    onBluetoothEnableStateChanged(enable: any): void;
    onBluetoothDeviceConnectStateChanged(name: any, mac: any, connect: any): void;
    onCharacteristicValueChanged(mac: any, serviceUuid: any, characteristicUuid: any, data: any): void;
}
import { BaseBridgeAPI } from "@ubt/bridge-js";
