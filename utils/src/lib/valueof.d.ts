export interface SelectItem {
    key: string;
    value: string | number;
}
declare type ExtractValue<T, K> = T extends {
    value: K;
    label: infer R;
} ? R : never;
export declare const genMapObject: <T extends readonly SelectItem[]>(originData: T) => { [K in T[number]["value"]]: ExtractValue<T[number], K>; };
export {};
