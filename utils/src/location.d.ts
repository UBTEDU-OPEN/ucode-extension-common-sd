export declare function useQuery(key: string): string | null;
/**
 * uCode使用hash路由，应当优先使用此函数，代替 useQuery
 */
export declare function useHashQuery(key: string): string;
/**
 * 从 hash 路由 URL 中获取 URLSearchParams
 */
export declare function getHashParams(url?: string): URLSearchParams;
export declare function replaceUrlParam(paramKey: string): void;
export declare function replaceUrlParams(paramKeys: string[]): void;
export declare function navigateTo(href: string, hash?: boolean): void;
