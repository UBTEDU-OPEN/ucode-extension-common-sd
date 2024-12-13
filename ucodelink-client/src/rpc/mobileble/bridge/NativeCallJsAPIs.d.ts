import { BaseBridgeAPI } from '@ubt/bridge-js';
export default class NativeCallJsAPIs extends BaseBridgeAPI {
    constructor();
    getNamespace(): string;
    onBluetoothEnableStateChanged(enable: number): void;
    onBluetoothDeviceConnectStateChanged(name: string, mac: string, connect: number): void;
    onCharacteristicValueChanged(mac: string, serviceUuid: string, characteristicUuid: string, data: any): void;
}
export declare function getNativeCallJsAPIs(): NativeCallJsAPIs;
