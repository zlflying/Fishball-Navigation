import consola from "consola";
import {defu} from "defu";
import type {NitroFetchOptions} from "nitropack/types";
import type {LoadingOptions} from "element-plus";
import type {LoadingInstance} from "element-plus/es/components/loading/src/loading";
import {defaultLoadingOptions} from "~/composables/common/config";

/** 自定义封装的请求方法 */
export default async function fetchAPI<T = any>(
    url: string,
    opts?: NitroFetchOptions<any>,
    loadingOpts?: LoadingOptions,
) {
    const app = useNuxtApp();
    const config = useRuntimeConfig();
    /** 默认请求配置 */
    const defaultOptions: NitroFetchOptions<any> = {
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
        /** 默认请求缓存 */
        cache: 'default',
        /** 默认请求重试次数 */
        retry: 0,
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
    const options = defu(opts, defaultOptions) as NitroFetchOptions<any>;
    return new Promise<T>(async (resolve, reject): Promise<void> => {
        try {
            const data = await $fetch(url, options);

            // 处理


            // 解构返回值
            return resolve(data as T);
        } catch (e) {
            reject(e);
        } finally {
            loadingInstance && loadingInstance.close();
        }
    });
}