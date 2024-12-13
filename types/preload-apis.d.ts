interface WebBluetoothIntercept {
  setOnDiscoverDevices: (onDiscoverDevices: (devices: Electron.BluetoothDevice[]) => void) => void;
  selectDevice: (deviceId: string) => void;
}

export type IDesktopApis = {
  ipcApis: {
    send: (channel: string, ...args: any) => void;
    listen: (channel: string, callback: (event: any, ...args: any[]) => void) => void;
  };
  getWebBluetoothIntercept: () => WebBluetoothIntercept;
};
