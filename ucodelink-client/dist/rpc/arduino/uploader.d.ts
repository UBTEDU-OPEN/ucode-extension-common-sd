export class ArduinoUploaderAdapter extends BaseRPCAdapter {
    constructor(fqbn: any, rpcClient: any);
    fqbn: any;
    cancel(): Promise<any>;
    flash(port: any, hex: any, verboseCallback: any, progressCallback: any): Promise<any>;
    processorId: any;
}
import { BaseRPCAdapter } from "../base";
