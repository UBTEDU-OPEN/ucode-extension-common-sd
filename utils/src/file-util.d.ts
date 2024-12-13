/// <reference types="node" />
export declare function downloadFile(blob: Blob, fileName?: string): void;
export declare function openFileRaw(accept: string): Promise<FileList>;
export declare function openFile(accept: string, startLoad?: () => void): Promise<{
    content: Buffer;
    fileName: string;
}>;
export declare function fileToDataUri(file: File): Promise<string | ArrayBuffer | null | undefined>;
export declare type VideoCoverType = {
    width: number;
    height: number;
    cover: string;
};
export declare function getVideoCover(file: File): Promise<VideoCoverType>;
/**
 * 加载video
 */
export declare function loadVideo(url: string): Promise<void>;
/**
 * 获取文件后缀
 */
export declare function getSuffix(file: File): string;
export declare function getNewName(list: Array<any>, prefix: string): string;
