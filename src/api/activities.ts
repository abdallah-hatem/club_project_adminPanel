import { ApiBaseUrl, request } from './request';

// Get activities
export const GET_ACTIVITIES = (params?: any) => request<any>('get', `${ApiBaseUrl}/activities`, params);

// Get activities by id
export const GET_ACTIVITIES_BY_ID = (id: string, params?: any) =>
  request<any>('get', `${ApiBaseUrl}/activities/${id}`, params);

// Add activity
export const ADD_ACTIVITY = (data: any) => request<any>('post', `${ApiBaseUrl}/activities`, data);

// Delete activity
export const DELETE_ACTIVITY = (id: number) => request<any>('delete', `${ApiBaseUrl}/activities/${id}`);

// Update activity
export const UPDATE_ACTIVITY = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}/activities/${id}`, data);
