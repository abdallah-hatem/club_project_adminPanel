import { ApiBaseUrl, request } from './request';

// Get activities
export default (params?: any) => request<any>('get', `${ApiBaseUrl}/activity`, params);

// Get activities by id
export const GET_ACTIVITIES_BY_ID = (id: string, params?: any) =>
  request<any>('get', `${ApiBaseUrl}/activity/${id}`, params);

// Add category
export const ADD_ACTIVITY = (data: any) => request<any>('post', `${ApiBaseUrl}/activity`, data);

// Delete category
export const DELETE_ACTIVITY = (id: number) => request<any>('delete', `${ApiBaseUrl}/activity/${id}`);

// Update category
export const UPDATE_ACTIVITY = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}/activity/${id}`, data);
