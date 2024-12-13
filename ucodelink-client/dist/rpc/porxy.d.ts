export class ProxyRPCAdapter extends BaseRPCAdapter {
    constructor(rpcClient: any);
    connect(url: any): Promise<any>;
    disconnect(): Promise<any>;
}
import { BaseRPCAdapter } from "./base";
