import { BaseBridgeAPI } from '@ubt/bridge-js';
import type { CharacteristicInfo, DeviceInfo } from '../interface';
export default class JsCallNativeAPIs extends BaseBridgeAPI {
    private _bridge;
    constructor();
    getAvailability(callback: (enable: boolean) => void): void;
    startScanning(callback: (args: {
        deviceInfo?: DeviceInfo;
        err?: Error;
    }) => void, scanTime?: number): void;
    stopScanning(): Promise<void>;
    requestMtu(mac: string, mtu: number): Promise<void>;
    connect(mac: string): Promise<void>;
    disconnect(mac: string): Promise<void>;
    discoverServices(mac: string): Promise<string[]>;
    discoverIncludedServices(): void;
    discoverCharacteristics(mac: string, serviceUuid: string | number): Promise<CharacteristicInfo[]>;
    readCharacteristic(mac: string, serviceUuid: string, characteristicUuid: string, callback: (data: any, err?: Error) => void): void;
    writeCharacteristic(mac: string, serviceUuid: string, characteristicUuid: string, data: any, withoutResponse: boolean): Promise<void>;
    notify(mac: string, serviceUuid: string, characteristicUuid: string, enbale: boolean): Promise<void>;
}
/**
 * enforceSplitWrite(enforceSplit: BridegBoolean, splitSize: Number)

   2.14或以上控制器版本传enforceSplitWrite(True, 20)
   2.14以下控制器版本传enforceSplitWrite(False, 0)
 * @param enable
 * @returns
 */
export declare function enforceSplitWrite(mac: string, enforceSplit: boolean, splitSize: number): Promise<boolean>;
