import { ApiBaseUrl, request } from './request';

// Coach
export const GET_COACHES = (params?: any) => request<any>('get', `${ApiBaseUrl}/coach`, params);

export const ADD_COACH = (data: any) => request<any>('post', `${ApiBaseUrl}/coach`, data);

export const GET_COACH_BY_ID = (id: string, params?: any) => request<any>('get', `${ApiBaseUrl}/coach/${id}`, params);

export const DELETE_COACH = (id: number) => request<any>('delete', `${ApiBaseUrl}/coach/${id}`);

export const UPDATE_COACH = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}/coach/${id}`, data);
