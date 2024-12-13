/**  硬件连接相关错误码 11 开头, 总共 5位, 如果出现错误码不够用, 后面加一位 */
export declare enum DeviceConnectionErrorCode {
    /** COMMON ERROR CODE 110 开头, 后面接两位或三位 xx(x) */
    /** 需要硬件连接, 硬件未连接 */ COMMON_REQUEST_CONNECTION = "11001",
    /** 获取 DeviceType 失败 */ COMMON_DEVICE_TYPE_REQUEST_FAILED = "11002",
    /** 设备注册初始化失败 */ COMMON_DEVICE_INIT_FAILED = "11003",
    /** 目标 DeviceType 不存在 */ COMMON_DEVICE_TYPE_NOT_FOUND = "11004",
    /** 设备连接实例销毁失败 */ CONNECTION_DESTROY_ERROR = "11005",
    /** DISCOVER ERROR CODE 1101x(x) */
    /** DISCOVER 初始化失败 */ DISCOVER_INIT_FAILED = "11010",
    /** DISCOVER 开始失败 */ DISCOVER_START_FAILED = "11011",
    /** DISCOVER 开始 接口 前钩子 失败 */ DISCOVER_BEFORE_START_FAILED = "11012",
    /** DISCOVER 开始 接口 后钩子 失败 */ DISCOVER_AFTER_START_FAILED = "11013",
    /** DISCOVER 停止 接口 失败 */ DISCOVER_STOP_FAILED = "11014",
    /** DISCOVER 停止 接口 前钩子 失败 */ DISCOVER_BEFORE_STOP_FAILED = "11015",
    /** DISCOVER 停止 接口 后钩子 失败 */ DISCOVER_AFTER_STOP_FAILED = "11016",
    /** DISCOVER 设备类型未找到 */ DISCOVER_DEVICE_TYPE_NOT_FOUND = "11017",
    /** DISCOVER 销毁失败 */ DISCOVER_DESTROY_ERROR = "11018",
    /** DISCOVER 错误事件上报 */ DISCOVER_ERROR_EVENT = "11019",
    /** CONNECT 连接 接口 执行失败  */ CONNECTION_CONNECT_FAILED = "11020",
    /** CONNECT 连接 接口 前钩子 执行失败 */ CONNECTION_BEFORE_CONNECT_FAILED = "11021",
    /** CONNECT 连接 接口 后钩子 执行失败 */ CONNECTION_AFTER_CONNECT_FAILED = "11022",
    /** CONNECT 断开连接 接口 执行失败 */ CONNECTION_DISCONNECT_FAILED = "11023",
    /** CONNECT 断开连接 接口 前钩子 执行失败 */ CONNECTION_BEFORE_DISCONNECT_FAILED = "11024",
    /** CONNECT 断开连接 接口 后钩子 执行失败 */ CONNECTION_AFTER_DISCONNECT_FAILED = "11025",
    /** 重新(绑定)设备失败 */ CONNECTION_REBIND_DEVICE_FAILED = "11026",
    /** 重新(绑定)设备不存在 */ CONNECTION_REBIND_DEVICE_NOT_FOUND = "11027",
    /** 环检检测执行失败 */ CONNECTION_CHECK_ENV = "11028",
    /** 错误处理执行失败 */ CONNECTION_HANDLE_ERROR_FAILED = "11029",
    /** CONNECT 连接失败 已经绑定过该设备  */ CONNECTION_BINDING_DEVICE_EXIST = "11030"
}
/** 插件注册 相关错误码 12 开头, 总共 5位, 如果出现错误码不够用, 后面加一位 */
export declare enum ExtensionErrorCode {
    /** COMMON ERROR CODE 120 开头 后面接两位或三位 xx(x) */
    /** 插件没有初始化 */ EXTENSION_NOT_READY = "12000",
    /** 插件没找到 */ EXTENSION_NOT_FOUND = "12001",
    /** 插件列表获取失败 */ EXTENSION_GET_LIST_FAILED = "12002",
    /** 安装插件 失败 */ EXTENSION_INSTALL_FAILED = "12003",
    /** 下载插件 失败 */ EXTENSION_DOWNLOAD_FAILED = "12004",
    /** 删除插件 失败 */ EXTENSION_DELETE_FAILED = "12005",
    /** 内置插件不存在 */ INTERNAL_EXTENSION_NOT_EXIST = "12006",
    /** 不支持的uCode3拓展 */ NOT_SUPPORT_UCODE3_EXTENSION = "12007",
    /** 不支持的uCode3烧录模式 */ NOT_SUPPORT_UCODE3_UPLOAD = "12008",
    /** 暂不支持的插件类型 */ EXTENSION_NOT_SUPPORT_TYPE = "12009",
    /** Manifest 相关 错误码 121 开头 后面接两位或三位 xx(x) */
    /** Manifest 加载失败 */ MANIFEST_LOAD_FAILED = "12100",
    /** Manifest 解析失败 (JSON 格式错误) */ MANIFEST_DECODE_FAILED = "12101",
    /** Manifest 校验失败 (JSON 字段校验错误 JSON Schema)*/ MANIFEST_VALIDATE_FAILED = "12102",
    /** Manifest 校验失败 字段不合法 (JSON 字段校验错误 JSON Schema)*/ MANIFEST_FIELD_INVALID = "12103",
    /** Manifest 保存在 DB 出错 */ MANIFEST_SAVE_FAILED = "12105",
    /** Entry 相关 错误码 122 开头 后面接两位或三位 xx(x) */
    /** js 加载失败 */ ENTRY_LOAD_FAILED = "12200",
    /** 积木块注册失败 */ ENTRY_BLOCK_LOAD_FAILED = "12201",
    /** 设备连接注册失败 */ ENTRY_DEVICE_LOAD_FAILED = "12202",
    /** 翻译 相关 错误码 123 开头 后面接两位或三位 xx(x) */
    /** 翻译文件 加载失败 */ I18N_LOAD_FAILED = "12300",
    /** 翻译文件 转义失败 */ I18N_DECODE_FAILED = "12301",
    /** EXTENSION URL ERROR CODE 123 开头 后面接两位或三位 xx(x) */
    /** EXTENSION URL 未提供 */ EXTENSION_URL_REQUIRED = "12301",
    /** EXTENSION URL 不合法 */ EXTENSION_URL_INVALID = "12302",
    /** EXTENSION LOGO URL 未提供 */ EXTENSION_LOGO_URL_REQUIRED = "12302",
    /** EXTENSION LOGO URL 不合法 */ EXTENSION_LOGO_URL_INVALID = "12303"
}
/** 烧录模式相关错误码 13 开头, 总共 5位, 如果出现错误码不够用, 后面补一位 */
export declare enum DeviceUploadErrorCode {
    /** 烧录器 初始化失败 */
    UPLOAD_INIT_FAILED = "13000",
    /** 目标转换代码 找不到 或者不支持 */
    LANGUAGE_NOT_SUPPORTED = "13001",
    /** 烧录代码 执行失败 */
    UPLOAD_CODE_FAILED = "13002",
    /** 烧录代码 Before 钩子执行失败 */
    BEFORE_UPLOAD_CODE_FAILED = "13003",
    /** 烧录代码 After 钩子执行失败 */
    AFTER_UPLOAD_CODE_FAILED = "13004",
    /** 环境准备 执行失败 */
    PREPARE_ENV_FAILED = "13005",
    /** 运行代码 执行失败 */
    BEFORE_RUN_CODE_FAILED = "13006",
    /** 运行代码 Before 钩子执行失败 */
    RUN_CODE_FAILED = "13007",
    /** 运行代码 After 钩子执行失败 */
    AFTER_RUN_CODE_FAILED = "13008",
    /** 模式切换失败 */
    MODE_SWITCH_FAILED = "13009",
    /** RunCode 不支持 */
    RUN_CODE_NOT_SUPPORT = "13010",
    /** 中断失败 */
    INTERRUPT_FAILED = "13011",
    /** 烧录接口没有提供 */
    UPLOADER_NOT_FOUND = "13012",
    /** 积木块转代码初始化失败 */
    BLOCK_GENERATORS_INIT_FAILED = "13013",
    /** 不支持 烧录模式 */
    UPLOAD_MODE_NOT_SUPPORT = "13014",
    /** 没有可用的语言 */
    LANGUAGE_NOT_AVAILABLE = "13015"
}
/** 自定义 UI 错误码
 * 14 开头, 总共5位, 不足后面补一位
 */
export declare enum CustomUiErrorCode {
    /** 关闭窗口失败 */
    CLOSE_FAILED = "14001",
    /** 关闭窗口失败 */
    DESTROY_FAILED = "14002"
}
/** Storage 错误码
 * 15 开头, 总共5位, 不足后面补一位
 */
export declare enum StorageErrorCode {
    /** 初始化失败 */
    INIT_FAILED = "15001",
    /** 读取失败 */
    READ_FAILED = "15002",
    /** 写入失败 */
    WRITE_FAILED = "15003",
    /** 名字不唯一 */
    NAME_CONSTRAINT_ERROR = "15004",
    /** origin id 不唯一  */
    ORIGIN_ID_CONSTRAINT_ERROR = "15005"
}
/** 项目加载 错误码
 * 16 开头, 总共5位
 */
export declare enum ProjectErrorCode {
    /** 项目不存在 */
    PROJECT_NOT_FOUND = "16001",
    /** 项目 保存 失败 */
    PROJECT_SAVED_FAILED = "16002",
    /** 项目 拷贝 失败 */
    PROJECT_COPY_FAILED = "16003",
    /** 项目 重命名 失败 */
    PROJECT_RENAME_FAILED = "16004",
    /** 项目 更新 失败 */
    PROJECT_UPDATE_FAILED = "16005",
    /** 项目 版本不支持 */
    PROJECT_VERSION_NOT_SUPPORT = "16006",
    /** UCD 版本不支持 */
    PROJECT_UCD_VERSION_NOT_SUPPORT = "16007"
}
/** UCode 通用 错误码, 10 开头, 总共 5位 */
export declare enum UCodeCommonErrorCode {
    /** 超时 */
    TIMEOUT = "10001",
    /** 用户取消 */
    USER_CANCEL = "10002",
    /** 权限被拒绝 */
    PERMISSION_DENIED = "10003",
    /** 需要 uCodelink 连接 */
    UCODELINK_REQUEST_CONNECTION = "10004",
    /** 未知错误 */
    UNKNOWN_ERROR = "10005",
    /** 网络错误 */
    NETWORK_ERROR = "10006"
}
/** 自定义错误码
 * @internal
 */
export declare type CustomErrorCode = '99999';
/** uCode 错误码 集合
 * @internal
 */
export declare type UCodeErrorCode = `${DeviceConnectionErrorCode | ExtensionErrorCode | UCodeCommonErrorCode | DeviceUploadErrorCode | CustomUiErrorCode | StorageErrorCode | ProjectErrorCode}`;
