import Axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production'
? 'http://127.0.0.1:3002'
: 'http://127.0.0.1:3001';

let axios = Axios.create({
    baseURL,
    withCredentials: true,
});

axios.interceptors.request.use((config) => {
    // config.headers.withCredentials = true;
    return config;
});

axios.interceptors.response.use((response) => {
    if (response.status === 200) {
        console.log(`请求成功，message:${response.data.message}`)
    }
    return response;
});

export default axios;