import { ApiBaseUrl, request } from './request';

export const GET_EVENTS = (params?: any) => request<any>('get', `${ApiBaseUrl}/event`, params);

export const GET_EVENT_BY_ID = (id: string, params?: any) => request<any>('get', `${ApiBaseUrl}/event/${id}`, params);

export const ADD_EVENT = (data: any) => request<any>('post', `${ApiBaseUrl}/event`, data);

export const DELETE_EVENT = (id: number) => request<any>('delete', `${ApiBaseUrl}/event/${id}`);

export const UPDATE_EVENT = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}/event/${id}`, data);
