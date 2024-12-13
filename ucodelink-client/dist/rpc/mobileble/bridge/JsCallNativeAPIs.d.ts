/**
 * enforceSplitWrite(enforceSplit: BridegBoolean, splitSize: Number)

   2.14或以上控制器版本传enforceSplitWrite(True, 20)
   2.14以下控制器版本传enforceSplitWrite(False, 0)
 * @param enable
 * @returns
 */
export function enforceSplitWrite(mac: any, enforceSplit: any, splitSize: any): Promise<any>;
export default class JsCallNativeAPIs extends BaseBridgeAPI {
    constructor();
    _bridge: import("@ubt/bridge-adapter/dist/NativeBridge").default;
    getAvailability(callback: any): void;
    startScanning(callback: any, scanTime: any): void;
    stopScanning(): Promise<any>;
    requestMtu(mac: any, mtu: any): Promise<any>;
    connect(mac: any): Promise<any>;
    disconnect(mac: any): Promise<any>;
    discoverServices(mac: any): Promise<any>;
    discoverIncludedServices(): void;
    discoverCharacteristics(mac: any, serviceUuid: any): Promise<any>;
    readCharacteristic(mac: any, serviceUuid: any, characteristicUuid: any, callback: any): void;
    writeCharacteristic(mac: any, serviceUuid: any, characteristicUuid: any, data: any, withoutResponse: any): Promise<any>;
    notify(mac: any, serviceUuid: any, characteristicUuid: any, enbale: any): Promise<any>;
}
import { BaseBridgeAPI } from "@ubt/bridge-js";
