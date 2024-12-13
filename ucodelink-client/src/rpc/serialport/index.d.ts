import { SerialPortRPCAdapter as SerialPort } from './serialport';
import { SerialPortRPCAdapter as WebSerial } from './webserial';
declare const CurrentSerial: typeof SerialPort | typeof WebSerial;
export { CurrentSerial };
