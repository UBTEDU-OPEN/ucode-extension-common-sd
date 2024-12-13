export class ArduinoCompilerAdapter extends BaseRPCAdapter {
    constructor(fqbn: any, rpcClient: any);
    fqbn: any;
    cancel(): Promise<any>;
    checkAndInstallRequireLibraries(options: any): Promise<any>;
    listLibraires(): Promise<any>;
    downloadLibrary(url: any, name: any, force?: boolean): Promise<any>;
    getInstallLibraryVersion(name: any): Promise<undefined>;
    compile(code: any, port: any, verboseCallback: any, compileOptions: any): Promise<any>;
    processorId: any;
}
import { BaseRPCAdapter } from "../base";
