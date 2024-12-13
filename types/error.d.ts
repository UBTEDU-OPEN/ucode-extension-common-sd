import { UBT } from './common';

export namespace UCodeErrorType {
  interface CustomError extends Error {
    errorCode: string;
    errorMessage: string;
    extraData?: ExtraData;
  }
  type ErrorAction = {
    id: string;
    type?: 'cancel' | 'confirm'; // 样式
    name?: string;
  };

  /** 用于支持 UCode 错误的新特性 */
  type ExtraData = MarkdownErrorType | ImageErrorType | TextErrorType;

  type CommonErrorType = {
    /** 错误标题, 用于优化错误弹窗的标题显示 */
    errorTitle?: string;
    /** 错误动作, 用于做一些错误处理, 例如, 断开重连, 或者返回给插件用于自定义错误处理(例如, wifi 配网等) */
    errorAction?: ErrorAction | ErrorAction[];
  };

  type MarkdownErrorType = CommonErrorType & {
    type: 'markdown';
    content: string;
  };

  type ImageErrorType = CommonErrorType & {
    type: 'image';
    image: string;
  };

  type TextErrorType = CommonErrorType & {
    type?: 'text';
  };

  type ErrorMessageTemplate =
    | {
        type: 'image';
        src?: string;
        text?: string;
      }
    | {
        type: 'markdown';
        content: string;
      };

  interface Disposable {
    dispose(): () => void;
  }
}
