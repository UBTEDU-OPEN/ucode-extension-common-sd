export default class Gatt {
    constructor(device: any);
    connected: boolean;
    device: any;
    connect(): Promise<Gatt>;
    disconnect(): void;
    writeValue(data: any): void;
    startNotifications(): void;
    getPrimaryService(UUID: any): void;
    getPrimaryServices(UUID: any): void;
}
