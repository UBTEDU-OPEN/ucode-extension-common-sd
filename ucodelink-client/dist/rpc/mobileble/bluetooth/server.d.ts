export default class GATTServer {
    constructor(device: any, rpc: any);
    connected: boolean;
    device: any;
    _rpc: any;
    connect(): Promise<any>;
    disconnect(): any;
    getPrimaryService(UUID: any): Promise<any>;
    getPrimaryServices(UUID: any): void;
}
