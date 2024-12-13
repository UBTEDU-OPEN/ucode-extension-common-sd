import { ECmdType } from './constants';
/**
 * 广播消息。指定消息类型和数据。广播频道已内定。 远程调用core方法
 * @param cmd 消息类型、指令
 * @param data 该消息所需的数据
 * @returns 远程调用的回调，promise类型
 */
export default function coreMethodInvoker<SendDataType, RecvDataType>(cmd: ECmdType, data: SendDataType): Promise<RecvDataType>;
