export class ProxyWebsocketRPCAdapter extends BaseRPCAdapter {
    constructor(rpcClient: any);
    connect(url: any): Promise<any>;
    disconnect(): Promise<any>;
    getConnectState(): Promise<any>;
    _rpcListenFn(eventType: any, ...args: any[]): void;
}
import { BaseRPCAdapter } from "./base";
