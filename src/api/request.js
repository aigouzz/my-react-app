import axios from './index'

export function postRequest (url, data, config = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data, config).then((data) => {
            resolve(data);
        }, (err) => {
            reject(err);
        });
    });
}

export function getRequest (url, config = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, config).then((data) => {
            resolve(data);
        }, (err) => {
            reject(err);
        });
    });
}