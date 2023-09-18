import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const API_END_POINT = "http://localhost:3333";

export interface IMyApiHeader {
  [name: string]: any;
}

let myApiInstance: AxiosInstance;
const myApiOptions = { baseURL: `${API_END_POINT}/` };

export default class Api {
  static async post(url: string, data: any, options: AxiosRequestConfig = {}) {
    return Api.request({ url, data, method: "post", ...options });
  }

  static patch(url: string, data: any, options: AxiosRequestConfig = {}) {
    return Api.request({ url, data, method: "patch", ...options });
  }

  static put(url: string, data: any, options: AxiosRequestConfig = {}) {
    return Api.request({ url, data, method: "put", ...options });
  }

  static delete(url: string, options: AxiosRequestConfig = {}) {
    return Api.request({ url, method: "delete", ...options });
  }

  static instance() {
    if (!myApiInstance) {
      myApiInstance = axios.create(myApiOptions);
    }

    return myApiInstance;
  }

  static get(url: string, options: AxiosRequestConfig = {}) {
    return Api.request({ url, method: "get", ...options });
  }

  static async request(params: AxiosRequestConfig) {
    const myApiHeaders = { ...params.headers } as IMyApiHeader;

    const token = localStorage.getItem("jwt");
    if (token) {
      myApiHeaders.Authorization = `Bearer ${token}`;
    }

    const { url } = params;

    return Api.instance()
      .request({
        method: params.method,
        data: params.data,
        ...params,
        url,
        headers: myApiHeaders,
      })
      .then((response) => response.data);
  }
}
