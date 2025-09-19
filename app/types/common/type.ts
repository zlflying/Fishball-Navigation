/** 响应数据类型 */
export interface BaseResponseData<T> {
    code: number
    msg: string
    data: T
}
