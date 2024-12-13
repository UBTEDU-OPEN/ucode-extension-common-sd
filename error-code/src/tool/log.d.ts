/**
 * 错误日志装饰器 Async 版本
 * 如果函数执行报错, 打印错误
 * @param target
 * @param propertyKey
 * @param descriptor
 * @returns
 */
export declare function errorLogDecoratorAsync(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => Promise<any>>): TypedPropertyDescriptor<(...args: any[]) => Promise<any>>;
/**
 * 错误日志装饰器
 * 如果函数执行报错, 打印错误
 * @param target
 * @param propertyKey
 * @param descriptor
 * @returns
 */
export declare function errorLogDecorator(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>): TypedPropertyDescriptor<(...args: any[]) => any>;
