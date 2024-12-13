/**
 * 获取指定目录文件列表
 * @param args
 * @returns
 */
export declare const ls: (args?: {
    directory: string;
    recursive: boolean;
    includeSha256: boolean;
}) => string;
/**
 * 获取文件内容
 * @param filename
 * @returns
 */
export declare const getFile: (filename: string) => string;
/**
 * 获取文件 hash 值
 * @param filename
 * @returns
 */
export declare const getFileHash: (filename: string) => string;
/**
 * 获取文件信息
 * @param path
 * @returns
 */
export declare const stat: (path: string) => string;
/**
 * 递归地删除所有文件
 * @param path
 * @returns
 */
export declare const deleteEverythingRecursive: (path: string) => string;
