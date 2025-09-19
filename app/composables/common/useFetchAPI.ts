import type {FetchError} from 'ofetch'
import consola from "consola";
import {defu} from "defu";
import type {UseFetchOptions} from "nuxt/app";
import type {LoadingOptions} from "element-plus";
import type {LoadingInstance} from "element-plus/es/components/loading/src/loading";
import {defaultLoadingOptions} from "~/composables/common/config";

/** 错误类型 */
interface CustomError {
    message: string
    statusCode: number
}

/** 自定义封装的请求方法 */
export default async function useFetchAPI<T = any>(
    url: string | (() => string),
    opts?: UseFetchOptions<T>,
    loadingOpts?: LoadingOptions,
) {
    const app = useNuxtApp();
    const config = useRuntimeConfig();
    /** 默认请求配置 */
    const defaultOptions: UseFetchOptions<T> = {
        /** 默认请求方式 */
        method: 'GET',
        /** 默认请求头 **/
        headers: {
            'Content-Type': 'application/json',
        },
        /** 默认baseUrl */
        baseURL: config.public.apiBase,
        /** 默认请求超时时间 */
        timeout: 8000,
        /** 默认请求不懒加载 */
        lazy: false,
        /** 默认请求缓存 */
        cache: 'default',
        /** 默认请求重试次数 */
        retry: 0,
        /** 默认请求在服务端渲染 */
        server: true,
        /** 默认请求拦截 **/
        onRequest({request, options}) {
            let headers = options.headers;
            headers.append("www", "33333333333")
            // consola.info(request);
            // consola.info(options);
        },
        /** 处理请求错误 **/
        onRequestError({error}) {
            error && consola.error('Sorry, The Data Request Failed');
        },
        /** 处理响应数据 **/
        onResponse({response}) {
            // consola.info(response);
        },
        /** 处理响应错误 **/
        onResponseError({response}) {
            // consola.error(response);
        }
    }
    // 合并配置
    let loadingInstance: LoadingInstance;
    if (loadingOpts) loadingInstance = ElLoading.service(defu(loadingOpts, defaultLoadingOptions));
    const options = defu(opts, defaultOptions) as UseFetchOptions<any>;
    return new Promise<T>(async (resolve, reject) => {
        try {
            // @ts-ignore
            const {data, status, error, refresh, clear} = await useFetch<T, FetchError<CustomError>>(url, options);

            // 处理
            if (error.value){
                reject(error.value);
            }


            // 解构返回值
            return resolve(data.value as T);
        } catch (e) {
            reject(e);
        } finally {
            loadingInstance && loadingInstance.close();
        }
    });
}