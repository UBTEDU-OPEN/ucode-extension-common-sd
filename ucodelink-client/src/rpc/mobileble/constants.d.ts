declare const BLUETOOTH_NAMESPACE = "bluetooth";
declare const NativeAPIs: {
    /**
     * @deprecated 统一使用hasFeature替代
     */
    isBluetoothEnable: string;
    startScanning: string;
    stopScanning: string;
    connect: string;
    disconnect: string;
    updateRssi: string;
    discoverServices: string;
    discoverIncludedServices: string;
    discoverCharacteristics: string;
    readCharacteristic: string;
    writeCharacteristic: string;
    broadcast: string;
    notify: string;
    discoverDescriptors: string;
    readValue: string;
    writeValue: string;
    readHandle: string;
    writeHandle: string;
    requestMtu: string;
    /**
     * android专用，修复联想android9问题
     */
    enforceSplitWrite: string;
};
declare const JsForNativeApis: {
    ON_CHARACTERISTIC_VALUE_CHANGED: string;
    ON_BLUETOOTH_DEVICE_CONNECT_STATE_CHANGED: string;
    ON_BLUETOOTH_ENABLE_STATE_CHANGED: string;
};
export { BLUETOOTH_NAMESPACE, NativeAPIs, JsForNativeApis };
