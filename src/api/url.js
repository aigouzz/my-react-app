import { getRequest, postRequest } from "./request";
import { extractObject } from "../util";

const PostHomePage = (data) => {
    return new Promise((resolve, reject) => {
        postRequest('/home/page', data).then(resolve, reject);
    });
};

const GetHomeSearch = (data) => {
    let url = '/home/search?' + extractObject(data);
    return new Promise((resolve, reject) => {
        getRequest(url).then(resolve, reject);
    });
}

const PostFormUpload = (data) => {
    return new Promise((resolve, reject) => {
        postRequest('/home/form/upload', data).then(resolve, reject);
    });
}

export {
    PostHomePage,
    GetHomeSearch,
    PostFormUpload,
}