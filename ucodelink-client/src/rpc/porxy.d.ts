import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import { BaseRPCAdapter } from './base';
export declare class ProxyRPCAdapter extends BaseRPCAdapter {
    constructor(rpcClient?: RpcClient);
    connect(url: string): Promise<void>;
    disconnect(): Promise<void>;
    rpcCloseHandler(): void;
}
