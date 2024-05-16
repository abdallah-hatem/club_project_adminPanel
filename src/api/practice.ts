import { ApiBaseUrl, request } from './request';

export const GET_PRACTICES = (params?: any) => request<any>('get', `${ApiBaseUrl}/practice`, params);

export const GET_PRACTICES_BY_ID = (id: string, params?: any) =>
  request<any>('get', `${ApiBaseUrl}/practice/${id}`, params);

export const ADD_PRACTICE = (data: any) => request<any>('post', `${ApiBaseUrl}/practice`, data);

export const DELETE_PRACTICE = (id: number) => request<any>('delete', `${ApiBaseUrl}/practice/${id}`);

export const UPDATE_PRACTICE = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}/practice/${id}`, data);
