export class ArduinoIdeAdapter extends BaseRPCAdapter {
    constructor(rpcClient: any);
    openIde(code: any, customPerference: any, idePath: any): Promise<any>;
}
import { BaseRPCAdapter } from "../base";
