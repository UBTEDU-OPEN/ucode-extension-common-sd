export const BLUETOOTH_NAMESPACE: "bluetooth";
export namespace NativeAPIs {
    const isBluetoothEnable: string;
    const startScanning: string;
    const stopScanning: string;
    const connect: string;
    const disconnect: string;
    const updateRssi: string;
    const discoverServices: string;
    const discoverIncludedServices: string;
    const discoverCharacteristics: string;
    const readCharacteristic: string;
    const writeCharacteristic: string;
    const broadcast: string;
    const notify: string;
    const discoverDescriptors: string;
    const readValue: string;
    const writeValue: string;
    const readHandle: string;
    const writeHandle: string;
    const requestMtu: string;
    const enforceSplitWrite: string;
}
export namespace JsForNativeApis {
    const ON_CHARACTERISTIC_VALUE_CHANGED: string;
    const ON_BLUETOOTH_DEVICE_CONNECT_STATE_CHANGED: string;
    const ON_BLUETOOTH_ENABLE_STATE_CHANGED: string;
}
