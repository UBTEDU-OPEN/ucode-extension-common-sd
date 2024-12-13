import { Bridge } from '@ubt/bridge-js';
import { RpcClient } from '@ubt/ucode-link-adapter';
export default class RpcBridge extends Bridge {
    private rpc?;
    constructor();
    setRpcClient(rpc: RpcClient): void;
    getRpc(): RpcClient | undefined;
    register(): void;
}
