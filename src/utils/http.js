import axios from 'axios'
export default {
    all (arr) {
        return axios.all(arr)
    },
    get (url, params, config) {
        let configObj = {}
        if (config !== undefined) {
            Object.assign(configObj, config)
        }
        if (params !== undefined) {
            configObj['params'] = params
        }
        return axios.get(url, configObj)
    },
    delete (url, params, config) {
        let configObj = {}
        if (config !== undefined) {
            Object.assign(configObj, config)
        }
        if (params !== undefined) {
            // axios中delete方法的参数需要放到config中的data字段
            // 最终是放到请求的body中
            configObj['data'] = params
        }
        return axios.delete(url, configObj)
    },
    post (url, data, config) {
        return axios.post(url, data, config)
    },
    uploadFile (url, data, config = {}) {
        const form = new FormData()
        for (const key of Object.keys(data)) {
            form.append(key, data[key])
        }
        config = Object.assign(config, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        return axios.post(url, form, config)
    },
    put (url, data, config) {
        return axios.put(url, data, config)
    },
    patch (url, data, config) {
        return axios.patch(url, data, config)
    }
}
