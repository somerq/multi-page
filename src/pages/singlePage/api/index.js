import http from '@/utils/http'
const basePath = 'https://api.apiopen.top'

export default {
    news (params) {
        return http.post(`${basePath}/getWangYiNews`, params).then(res => res)
    },
    poetry (params) {
        return http.post(`${basePath}/getTangPoetry`, params).then(res => res)
    }
}
