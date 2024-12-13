export declare type BluetoothServiceUUID = number | string;
export declare type BluetoothCharacteristicUUID = number | string;
export declare type BluetoothDescriptorUUID = number | string;
export interface BluetoothRequestDeviceFilter {
    services?: BluetoothServiceUUID[];
    name?: string;
    namePrefix?: string;
    manufacturerId?: number;
    serviceDataUUID?: BluetoothServiceUUID;
}
export declare type RequestDeviceOptions = {
    filters: BluetoothRequestDeviceFilter[];
    optionalServices?: BluetoothServiceUUID[];
} | {
    acceptAllDevices: boolean;
    optionalServices?: BluetoothServiceUUID[];
};
export declare type BluetoothManufacturerData = Map<number, DataView>;
export declare type BluetoothServiceData = Map<BluetoothServiceUUID, DataView>;
export interface BluetoothDataFilter {
    readonly dataPrefix: DataView;
    readonly mask: DataView;
}
export interface BluetoothManufacturerDataFilter {
    readonly [manufacturerId: number]: BluetoothDataFilter;
}
export declare type BluetoothServiceDataFilter = {
    readonly [serviceUUID in BluetoothServiceUUID]: BluetoothDataFilter;
};
export interface BluetoothLEScanFilter {
    readonly name?: string;
    readonly namePrefix?: string;
    readonly services?: BluetoothServiceUUID[];
    readonly manufacturerData?: BluetoothManufacturerDataFilter;
    readonly serviceData?: BluetoothServiceDataFilter;
}
export interface RequestLEScanOptions {
    readonly filters?: BluetoothLEScanFilter[];
    readonly keepRepeatedDevices?: boolean;
    readonly acceptAllAdvertisements?: boolean;
}
export interface BluetoothLEScan extends RequestLEScanOptions {
    active: boolean;
    stop: () => void;
}
export interface BluetoothAdvertisementEvent extends Event {
    device: BluetoothDevice;
    rssi: number;
    txPower: number;
    manufacturerData?: BluetoothManufacturerData;
    serviceData?: BluetoothServiceData;
    uuids?: BluetoothServiceUUID[];
}
export interface BluetoothRemoteGATTDescriptor {
    readonly characteristic: BluetoothRemoteGATTCharacteristic;
    readonly uuid: string;
    readonly value?: DataView;
    readValue(): Promise<DataView>;
    writeValue(value: BufferSource): Promise<void>;
}
export interface BluetoothCharacteristicProperties {
    readonly broadcast: boolean;
    readonly read: boolean;
    readonly writeWithoutResponse: boolean;
    readonly write: boolean;
    readonly notify: boolean;
    readonly indicate: boolean;
    readonly authenticatedSignedWrites: boolean;
    readonly reliableWrite: boolean;
    readonly writableAuxiliaries: boolean;
}
export interface CharacteristicEventHandlers {
    oncharacteristicvaluechanged: (this: this, ev: Event) => any;
}
export interface BluetoothRemoteGATTCharacteristic extends EventTarget, CharacteristicEventHandlers {
    readonly service?: BluetoothRemoteGATTService;
    readonly uuid: string;
    readonly properties: BluetoothCharacteristicProperties;
    readonly value?: DataView;
    getDescriptor(descriptor: BluetoothDescriptorUUID): Promise<BluetoothRemoteGATTDescriptor>;
    getDescriptors(descriptor?: BluetoothDescriptorUUID): Promise<BluetoothRemoteGATTDescriptor[]>;
    readValue(): Promise<DataView>;
    writeValue(value: BufferSource): Promise<void>;
    writeValueWithResponse(value: BufferSource): Promise<void>;
    writeValueWithoutResponse(value: BufferSource): Promise<void>;
    startNotifications(): Promise<BluetoothRemoteGATTCharacteristic>;
    stopNotifications(): Promise<BluetoothRemoteGATTCharacteristic>;
    addEventListener(type: 'characteristicvaluechanged', listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}
export interface ServiceEventHandlers {
    onserviceadded: (this: this, ev: Event) => any;
    onservicechanged: (this: this, ev: Event) => any;
    onserviceremoved: (this: this, ev: Event) => any;
}
export interface BluetoothRemoteGATTService extends EventTarget, CharacteristicEventHandlers, ServiceEventHandlers {
    readonly device: BluetoothDevice;
    readonly uuid: string;
    readonly isPrimary: boolean;
    getCharacteristic(characteristic: BluetoothCharacteristicUUID): Promise<BluetoothRemoteGATTCharacteristic>;
    getCharacteristics(characteristic?: BluetoothCharacteristicUUID): Promise<BluetoothRemoteGATTCharacteristic[]>;
    getIncludedService(service: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService>;
    getIncludedServices(service?: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService[]>;
    addEventListener(type: 'serviceadded', listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: 'servicechanged', listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: 'serviceremoved', listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}
export interface BluetoothRemoteGATTServer {
    readonly device: BluetoothDevice;
    readonly connected: boolean;
    connect(): Promise<BluetoothRemoteGATTServer>;
    disconnect(): void;
    getPrimaryService(service: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService>;
    getPrimaryServices(service?: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService[]>;
}
export interface BluetoothDeviceEventHandlers {
    onadvertisementreceived: (this: this, ev: Event) => any;
    ongattserverdisconnected: (this: this, ev: Event) => any;
}
export interface BluetoothDevice extends EventTarget, BluetoothDeviceEventHandlers, CharacteristicEventHandlers, ServiceEventHandlers {
    readonly id: string;
    readonly name?: string;
    readonly gatt?: BluetoothRemoteGATTServer;
    readonly uuids?: string[];
    watchAdvertisements(): Promise<void>;
    unwatchAdvertisements(): void;
    readonly watchingAdvertisements: boolean;
    addEventListener(type: 'gattserverdisconnected', listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: 'advertisementreceived', listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}
export interface Bluetooth extends EventTarget, BluetoothDeviceEventHandlers, CharacteristicEventHandlers, ServiceEventHandlers {
    getAvailability(): Promise<boolean>;
    onavailabilitychanged: (this: this, ev: Event) => any;
    readonly referringDevice?: BluetoothDevice;
    requestDevice(options?: RequestDeviceOptions): Promise<BluetoothDevice>;
    requestLEScan(options?: RequestLEScanOptions): Promise<BluetoothLEScan>;
    addEventListener(type: 'availabilitychanged', listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: 'advertisementreceived', listener: (this: this, ev: BluetoothAdvertisementEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}
