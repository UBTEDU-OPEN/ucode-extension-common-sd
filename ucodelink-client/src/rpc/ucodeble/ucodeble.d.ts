/// <reference types="web-bluetooth" />
/// <reference types="node" />
import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import { BaseRPCAdapter } from '../base';
import Device from './device';
import { BluetoothRequestDeviceFilter } from './BlueTooth.interface';
declare type RequestDeviceOptions = {
    filters: BluetoothRequestDeviceFilter[];
    optionalServices?: BluetoothServiceUUID[];
} | {
    acceptAllDevices: boolean;
    optionalServices?: BluetoothServiceUUID[];
};
export declare class UcodeBleRPCAdapter extends BaseRPCAdapter {
    _url: string;
    private requestDeviceOptions;
    private _devices;
    private _device;
    private _clientId;
    private _openRequests;
    private _requestID;
    private _discovering;
    constructor(rpcClient?: RpcClient);
    requestDevice(options: RequestDeviceOptions): Promise<any>;
    destroy(): void;
    stopDiscover(): Promise<any>;
    connect(options: {
        peripheralId: number | string;
    }): Promise<Device | undefined>;
    disconnect(options: {
        peripheralId: number;
    }): Promise<void>;
    getServices(): Promise<BluetoothServiceUUID[]>;
    writeValue(serviceId: number | string, characteristicId: number | string, message: Buffer, encoding?: null, withResponse?: null): Promise<any>;
    startNotifications(serviceId: number | string, characteristicId: number | string, optStartNotifications?: boolean): Promise<any>;
    stopNotifications(serviceId: number | string, characteristicId: number | string): Promise<void>;
    onDeviceDiscovered(devices: Device[]): void;
    didReceiveCall(method: string, params: any): void;
    _handleRequest(json: any): void;
    _sendResponse(id: number, result: any, error?: any): void;
    private _handleMessage;
    private _handleResponse;
    close(): Promise<void>;
    send(data: {
        method: string;
        params?: any;
        clientId?: any | undefined;
    }, async?: boolean): Promise<any>;
    open(): Promise<void>;
    _subcribe(): void;
    private _rpcListenFn;
    rpcCloseHandler(): void;
}
export {};
