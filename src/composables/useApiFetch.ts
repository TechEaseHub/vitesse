import type { AfterFetchContext, BeforeFetchContext, OnFetchErrorContext } from '@vueuse/core'
import { createFetch } from '@vueuse/core'

enum ApiCode {
  SUCCESS = 0,
}

interface ApiResponse<T> {
  code: number
  message?: string
  data: T
}
console.log('baseUrl', import.meta.env.VITE_SERVER_PROXY)

export const useApiFetch = createFetch({
  baseUrl: import.meta.env.VITE_SERVER_PROXY,
  options: {
    immediate: false,
    timeout: 10000,

    beforeFetch(ctx: BeforeFetchContext) {
      // console.log('beforeFetch', ctx)
      const { url, options, cancel } = ctx

      return {
        url,
        options: {
          ...options,
          headers: {
            Authorization: 'Bearer xxx',
          },
        },
        cancel,
      }
    },

    afterFetch(ctx: AfterFetchContext<ApiResponse<unknown>>) {
      // console.log('afterFetch', ctx)
      const { data: raw, response, context, execute } = ctx

      if (raw && typeof raw === 'object') {
        if ('code' in raw) {
          const res = raw
          if (res.code === ApiCode.SUCCESS) {
            return {
              data: res.data ?? null,
              response,
              context,
              execute,
            }
          }
          else {
            throw new ApiError(res.code, res.message || '接口返回失败')
          }
        }
        // 处理没有 code 字段的情况，比如直接返回数据
        return {
          data: raw,
          response,
        }
      }

      throw new Error('接口响应格式不正确')
    },

    onFetchError(ctx: OnFetchErrorContext) {
      console.error('[请求错误]', ctx)

      const { error, data, response, context, execute } = ctx

      if (error?.message?.includes('timeout')) {
        console.warn('请求超时，请重试')
      }

      return {
        data,
        error,
        response,
        context,
        execute,
      }
    },
  },
})
