import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import { BaseRPCAdapter } from './base';
export declare class MDnsBrowserRPCAdapter extends BaseRPCAdapter {
    protected rpcCloseHandler(): void;
    private _serviceName;
    constructor(serviceName: string, rpcClient?: RpcClient);
    private _prepare;
    init(): Promise<void>;
    discover(): Promise<void>;
    stop(): Promise<void>;
    destroy(): Promise<void>;
}
