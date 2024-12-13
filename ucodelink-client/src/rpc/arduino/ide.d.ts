import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import { BaseRPCAdapter } from '../base';
export declare class ArduinoIdeAdapter extends BaseRPCAdapter {
    constructor(rpcClient?: RpcClient);
    openIde(code: string, customPerference?: string, idePath?: string): Promise<unknown>;
    rpcCloseHandler(): void;
}
