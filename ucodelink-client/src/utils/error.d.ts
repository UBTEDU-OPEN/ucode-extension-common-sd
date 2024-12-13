export declare class UCodeLinkAPIError extends Error {
    code: number;
    constructor(code: number, message: string);
    toString(): string;
}
