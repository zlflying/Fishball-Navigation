import devEnv from "./env.dev";
import prodEnv from "./env.prod";


/** 环境变量 */
export interface Env {
    // 未知环境变量 根据实际需要调整类型
    [key: string]: string | number | boolean;

    /** 网站名称 */
    appName: string,
    /** 网站描述 */
    appDesc: string,
    /** 网站关键词 */
    appKeywords: string,
}

/** 获取环境变量 */
export function getEnvConfig(): Env {
    const envMode = process.env.NODE_ENV;
    if (envMode === 'production') {
        return prodEnv()
    } else {
        return devEnv()
    }
}
