declare var _default: {
    input: string;
    output: ({
        file: string;
        format: string;
        name: string;
    } | {
        file: string;
        format: string;
        name?: undefined;
    })[];
    plugins: (import("rollup").Plugin | {
        name: string;
        resolveId(importee: string, importer: string): {
            id: any;
            moduleSideEffects: boolean;
        } | null;
        load(id: string): string | undefined;
        transform(code: string, id: string): any;
    })[];
}[];
export default _default;
