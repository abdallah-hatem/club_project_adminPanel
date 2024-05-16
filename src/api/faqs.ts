import { ApiBaseUrl, request } from './request';

// Faqs
export const GET_FAQS = (params?: any) => request<any>('get', `${ApiBaseUrl}/faqs`, params);

export const ADD_FAQ = (data: any) => request<any>('post', `${ApiBaseUrl}/faqs`, data);

export const GET_FAQS_BY_ID = (id: string, params?: any) => request<any>('get', `${ApiBaseUrl}/faqs/${id}`, params);

export const DELETE_FAQS = (id: number) => request<any>('delete', `${ApiBaseUrl}/faqs/${id}`);

export const UPDATE_FAQS = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}/faqs/${id}`, data);
