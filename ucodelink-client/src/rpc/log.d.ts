import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import { BaseRPCAdapter } from './base';
export declare class LogRpcAdapter extends BaseRPCAdapter {
    constructor(rpcClient?: RpcClient);
    openLogdir(): Promise<unknown>;
    protected rpcCloseHandler(): void;
}
