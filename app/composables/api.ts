import useFetchAPI from "~/composables/common/useFetchAPI";


export const captchaImage = async () => {

    return useFetchAPI('http://vue.ruoyi.vip/prod-api/captchaImage', {
        method: 'GET',
    }, {
        text: '获取验证码...'
    });
}