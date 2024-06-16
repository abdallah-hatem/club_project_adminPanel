import type { AxiosRequestConfig, Method } from 'axios';

import { message as $message } from 'antd';
import axios from 'axios';

import store from '@/stores';
import { setGlobalState } from '@/stores/global.store';
// import { history } from '@/routes/history';

const axiosInstance = axios.create({
  timeout: 6000,
});

axiosInstance.interceptors.request.use(
  config => {
    store.dispatch(
      setGlobalState({
        loading: true,
      }),
    );

    return config;
  },
  error => {
    store.dispatch(
      setGlobalState({
        loading: false,
      }),
    );
    Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  config => {
    store.dispatch(
      setGlobalState({
        loading: false,
      }),
    );

    if (config?.data?.message) {
      // $message.success(config.data.message)
    }

    return config?.data;
  },
  error => {
    store.dispatch(
      setGlobalState({
        loading: false,
      }),
    );
    // if needs to navigate to login page when request exception
    // history.replace('/login');
    let errorMessage = 'Error';

    if (error?.message?.includes('Network Error')) {
      errorMessage = 'Network Error';
    } else {
      errorMessage = error?.message;
    }

    console.dir(error);
    error.message && $message.error(errorMessage);

    return {
      status: false,
      message: errorMessage,
      result: null,
    };
  },
);

export type Response<T = any> = {
  status: boolean;
  message: string;
  result: T;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type MyResponse<T = any> = Promise<any>;

export const ApiBaseUrl = 'https://club-project-nestjs.vercel.app';
// export const ApiBaseUrl = 'http://localhost:8000';

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */

export const request = <T = any>(
  method: Lowercase<Method>,
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): MyResponse<T> => {
  // const prefix = '/api'
  const prefix = '';

  url = prefix + url;

  const configPost = {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem('t')}`,
      // Authorization: `Bearer R0cPofvtAKGRcxPLtX1SJHHujijbfXRXgb03E-bm7zE`,
    },
    ...config,
  };

  if (method === 'post') {
    return axiosInstance.post(url, data, configPost);
  } else if (method === 'put') {
    return axiosInstance.put(url, data, configPost);
  } else if (method === 'delete') {
    return axiosInstance.delete(url, configPost);
  } else {
    return axiosInstance.get(url, {
      params: data,
      ...configPost,
    });
  }
};
