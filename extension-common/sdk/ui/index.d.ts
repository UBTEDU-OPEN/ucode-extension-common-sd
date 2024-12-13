/**
 * uCode Extension UI
 *
 * uCode 插件 UI 工具集
 * 可以通过该模块, 调用 uCode 一些通用的 UI 组件
 *
 * 我们已经集成到了 Common SDK 里面, 使用也特别简单:
 *
 * ```javascript
 * import { ExtensionUI } from "@ubtech/ucode-extension-common-sdk";
 *
 * const { Toast, showTipDialog, showInputDialog } = ExtensionUI;
 *
 * Toast(`Toast 测试, 默认时间`);
 *
 * Toast(`Toast 测试, 时间是 5秒`, { duration: 5000 });
 *
 * showTipDialog("提示对话框文字") // 提示对话框
 *   .then((data) => {
 *     let tips = "";
 *     if (data.onConfirm) {
 *       tips = "你点了确定";
 *     } else if (data.onCancel) {
 *       tips = "你点了取消";
 *     } else if (data.onClose) {
 *       tips = "你点了关闭";
 *     }
 *     Toast(tips);
 *   })
 *   .catch((e) => {
 *     Toast("出错了");
 *   });
 *
 * showInputDialog({
 *   // 输入文字对话框
 *   title: "标题",
 *   placeholder: "请输入文字",
 *   autofocus: true,
 * }).then((result) => {
 *   if (result.onConfirm) {
 *     Toast(`你输入了: ${result.data}`);
 *   } else {
 *     console.log(`取消了: ${JSON.stringify(result)}`);
 *   }
 * });
 * ```
 *
 * @module ExtensionUI
 * @module
 */
export * as ExtensionUI from '../../../worker-ui-apis/src/index';
