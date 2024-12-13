export class MDnsBrowserRPCAdapter extends BaseRPCAdapter {
    constructor(serviceName: any, rpcClient: any);
    _serviceName: any;
    _prepare(): Promise<void>;
    init(): Promise<any>;
    discover(): Promise<any>;
    stop(): Promise<any>;
}
import { BaseRPCAdapter } from "./base";
