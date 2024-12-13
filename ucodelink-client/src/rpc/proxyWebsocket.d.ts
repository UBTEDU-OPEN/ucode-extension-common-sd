import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import { BaseRPCAdapter } from './base';
export declare class ProxyWebsocketRPCAdapter extends BaseRPCAdapter {
    constructor(rpcClient?: RpcClient);
    connect(url: string): Promise<void>;
    disconnect(): Promise<void>;
    getConnectState(): Promise<unknown>;
    private _rpcListenFn;
    rpcCloseHandler(): void;
}
