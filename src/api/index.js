import Axios from 'axios'
import {baseURL} from './url.js'

let axios = Axios.create({
    baseURL,
    withCredentials: true,
});

axios.interceptors.request.use((config) => {
    // config.headers.withCredentials = true;
    return config;
});

axios.interceptors.response.use((response) => {
    if(response.status === 200) {
        console.log(`请求成功，message:${response.data.message}`)
    }
    return response;
});

export default axios;