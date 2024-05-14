import { request } from './request';

const ApiBaseUrl = 'https://club-project-nestjs.vercel.app';

// Get fields
export const GET_FIELDS = (params?: any) => request<any>('get', `${ApiBaseUrl}/field`, params);

// Get fields by id
export const GET_FIELDS_BY_ID = (id: string, params?: any) => request<any>('get', `${ApiBaseUrl}/field/${id}`, params);

// Add field
export const ADD_FIELD = (data: any) => request<any>('post', `${ApiBaseUrl}/field`, data);

// Delete field
export const DELETE_FIELD = (id: number) => request<any>('delete', `${ApiBaseUrl}/field/${id}`);

// Update field
export const UPDATE_FIELD = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}/field/${id}`, data);
