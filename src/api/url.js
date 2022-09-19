import { getRequest, postRequest } from "./request";
import { extractObject } from "../util";

const PostHomePage = (data) => {
    return postRequest('/home/page', data);
}

const GetHomeSearch = (data) => {
    let url = '/home/search?' + extractObject(data);
    return getRequest(url);
}

const PostFormUpload = (data) => {
    return postRequest('/home/form/upload', data);
}

const PostLogin = (data) => {
    return postRequest('/login', data);
}

const PostImageUpload = (data) => {
    return postRequest('/upload', data);
}

export {
    PostHomePage,
    GetHomeSearch,
    PostFormUpload,
    PostLogin,
    PostImageUpload,
}