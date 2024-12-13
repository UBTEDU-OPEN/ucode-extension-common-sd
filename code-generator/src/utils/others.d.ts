export declare function addLoopTrap(constants: {
    INDENT: string;
    INFINITE_LOOP_TRAP: string;
}, branch: string, blockId: string): string;
export declare function prefixLines(text: string, prefix: string): string;
export declare function isValidateVariableName(name: string): boolean;
/** Blockly Util */
export declare function blocklyWrap(text: string, limit: number): string;
export declare function convertNonAsciiVariable(name: string, keyWords: string[]): string;
export declare function isNotKeyWord(name: string, keyWords: string[]): boolean;
/** 生成转义专用的注释
 * 例如:
 * 变量名: abc
 * 生成: [abc]
 *
 * 变量名: 我的变量
 * 生成: [peUDi0HytZ]-[我的变量]
 */
export declare function generateVariableComment(name: string, keyWords: string[]): string;
