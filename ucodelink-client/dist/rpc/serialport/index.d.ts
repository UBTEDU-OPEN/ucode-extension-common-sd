export const CurrentSerial: typeof WebSerial | typeof SerialPort;
import { SerialPortRPCAdapter as WebSerial } from "./webserial";
import { SerialPortRPCAdapter as SerialPort } from "./serialport";
