import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import { BaseRPCAdapter } from '../base';
export declare type LibraryItem = {
    library: {
        name: string;
        version: string;
    };
};
export declare class ArduinoCompilerAdapter extends BaseRPCAdapter {
    private processorId;
    private fqbn;
    constructor(fqbn: string, rpcClient?: RpcClient);
    cancel(): Promise<unknown>;
    checkAndInstallRequireLibraries(options: {
        requireLibraries: string[];
    }): Promise<void>;
    listLibraires(): Promise<LibraryItem[]>;
    downloadLibrary(url: string, name: string, force?: boolean): Promise<string>;
    getInstallLibraryVersion(name: string): Promise<string | undefined>;
    compile(code: string, port?: string, verboseCallback?: (data: string) => void, compileOptions?: {
        requireLibraries: string[];
    }): Promise<void>;
    rpcCloseHandler(): void;
}
