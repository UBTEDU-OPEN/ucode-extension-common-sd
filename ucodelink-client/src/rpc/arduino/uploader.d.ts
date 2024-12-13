import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import { BaseRPCAdapter } from '../base';
export declare class ArduinoUploaderAdapter extends BaseRPCAdapter {
    private processorId;
    private fqbn;
    constructor(fqbn: string, rpcClient?: RpcClient);
    cancel(): Promise<unknown>;
    flash(port: string, hex: string | Uint8Array, verboseCallback?: (data: string) => void, progressCallback?: (progress: number) => void): Promise<void>;
    rpcCloseHandler(): void;
}
