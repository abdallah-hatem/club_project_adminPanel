import { ApiBaseUrl, request } from './request';

// Get ages
export const GET_AGES = (params?: any) => request<any>('get', `${ApiBaseUrl}/client-ages`, params);

// Get age by id
export const GET_AGES_BY_ID = (id: string, params?: any) =>
  request<any>('get', `${ApiBaseUrl}/client-ages/${id}`, params);

// Add age
export const ADD_AGE = (data: any) => request<any>('post', `${ApiBaseUrl}/client-ages`, data);

// Delete age
export const DELETE_AGE = (id: number) => request<any>('delete', `${ApiBaseUrl}/client-ages/${id}`);

// Update age
export const UPDATE_AGE = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}/client-ages/${id}`, data);
