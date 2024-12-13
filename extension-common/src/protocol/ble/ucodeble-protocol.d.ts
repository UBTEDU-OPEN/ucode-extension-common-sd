/// <reference types="web-bluetooth" />
import type { IDiscoverDevice } from '@ubt/ucode-common-types';
import { BleCharacteristicsMap, CommonBleProtocol } from './common-ble-protocol';
/**
 * 流程中需要discover device
 */
export declare class UCodeBleProtocol extends CommonBleProtocol {
    protected bleBeforeConnect(device: IDiscoverDevice): Promise<BluetoothDevice>;
    /**
     * @overwrite
     * @param server GATTServer
     * @param characteristics
     * @returns
     */
    protected bleAfterConnect(server: BluetoothRemoteGATTServer, characteristics: BleCharacteristicsMap): Promise<void>;
}
