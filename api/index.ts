import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { METHOD } from "../types/methods";

class Api {
  baseURL: string;
  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;
  }

  initializeInstance = () => {
    let baseURL = this.baseURL;
    console.log(baseURL);

    const instance = axios.create({
      baseURL,
      withCredentials: false,
    });

    instance.interceptors.request.use(
      (config: any) => {
        return config;
      },
      (error: any) => {
        console.log(error);

        return Promise.reject(error);
      }
    );

    return instance;
  };

  publicRequest = (url: string, method: string, data: any) => {
    const instance = this.initializeInstance();
    return instance({
      url,
      method,
      data,
    });
  };
  getTags = () => {
    const url = "/api/tags";
    return this.publicRequest(url, METHOD.GET, null);
  };

  getRestaurants = (payload: any) => {
    const url = "/api/restaurant";
    return this.publicRequest(url, METHOD.GET, null);
  };
  filterRestaurants = (payload: any) => {
    const url = "/api/restaurant/filter";
    return this.publicRequest(url, METHOD.GET, null);
  };
}

export default Api;
