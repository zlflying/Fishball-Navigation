import type {LoadingOptions} from "element-plus";

/** 加载全局loading */
export function useLoading(loadingOpts?: LoadingOptions) {
    return ElLoading.service(loadingOpts);
}