import { ApiBaseUrl, request } from './request';

export const GET_NEWS = (params?: any) => request<any>('get', `${ApiBaseUrl}/news`, params);

export const GET_NEWS_BY_ID = (id: string, params?: any) => request<any>('get', `${ApiBaseUrl}/news/${id}`, params);

export const ADD_NEWS = (data: any) => request<any>('post', `${ApiBaseUrl}/news`, data);

export const DELETE_NEWS = (id: number) => request<any>('delete', `${ApiBaseUrl}/news/${id}`);

export const UPDATE_NEWS = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}/news/${id}`, data);
