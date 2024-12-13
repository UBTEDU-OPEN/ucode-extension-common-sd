export class LogRpcAdapter extends BaseRPCAdapter {
    constructor(rpcClient: any);
    openLogdir(): Promise<any>;
}
import { BaseRPCAdapter } from "./base";
