export declare function urlJoin(...args: string[]): string;
/**
 * 判断是否是合法的 URL
 * reference: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
 *
 * Note: Per RFC 3886, URL must begin with a scheme (not limited to http/https), e. g.:
 * www.example.com is not valid URL (missing scheme)
 * javascript:void(0) is valid URL, although not an HTTP one
 * http://.. is valid URL with the host being .. (whether it resolves depends on your DNS)
 * https://example..com is valid URL, same as above
 * @param url string
 */
export declare function urlValidate(url: string): boolean;
