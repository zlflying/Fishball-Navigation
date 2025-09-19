import type {BaseResponseData} from "~/types/common/type";
import useFetchAPI from "~/composables/common/useFetchAPI";
import fetchAPI from "~/composables/common/fetchAPI";
import consola from "consola";


export const captchaImage = async () => {

    return useFetchAPI('http://vue.ruoyi.vip/prod-api/captchaImage', {
        method: 'GET',
    },{
        text: '获取验证码...'
    });
}

export const login = async (data: any) => {
    consola.info(useRuntimeConfig().public)
    return fetchAPI<BaseResponseData<any>>('/api/login/login', {
        method: 'POST',
        body: data,
        baseURL: useRuntimeConfig().public.jscApiBase,
    },{
        text: '登录中...'
    });
}
