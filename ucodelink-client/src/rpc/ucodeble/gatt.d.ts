import { BluetoothDevice, BluetoothServiceUUID } from './BlueTooth.interface';
export default class Gatt {
    readonly device: BluetoothDevice;
    connected: boolean;
    constructor(device: BluetoothDevice);
    connect(): Promise<any>;
    disconnect(): void;
    writeValue(data: any): void;
    startNotifications(): void;
    getPrimaryService(UUID: BluetoothServiceUUID): Promise<any>;
    getPrimaryServices(UUID?: BluetoothServiceUUID): Promise<any[]>;
}
