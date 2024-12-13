/// <reference types="web-bluetooth" />
import { IDiscoverDevice } from '@ubt/ucode-common-types';
import { BleCharacteristicsMap, CommonBleProtocol } from './common-ble-protocol';
export declare class UnionBleProtocol extends CommonBleProtocol {
    protected bleBeforeConnect(device: IDiscoverDevice): Promise<BluetoothDevice>;
    private withDiscoverBleBeforeConnect;
    private withoutDiscoverBleBeforeConnect;
    private _checkFeatureAndPermission;
    /**
     * @overwrite
     * @param server GATTServer
     * @param characteristics
     * @returns
     */
    protected bleAfterConnect(server: BluetoothRemoteGATTServer, characteristics: BleCharacteristicsMap): Promise<void>;
}
