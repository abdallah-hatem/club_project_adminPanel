import { ApiBaseUrl, request } from './request';

// Sport
export const GET_SPORTS = (params?: any) => request<any>('get', `${ApiBaseUrl}/sport`, params);

export const ADD_SPORT = (data: any) => request<any>('post', `${ApiBaseUrl}/sport`, data);

export const GET_SPORT_BY_ID = (id: string, params?: any) => request<any>('get', `${ApiBaseUrl}/sport/${id}`, params);

export const DELETE_SPORT = (id: number) => request<any>('delete', `${ApiBaseUrl}/sport/${id}`);

export const UPDATE_SPORT = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}/sport/${id}`, data);
