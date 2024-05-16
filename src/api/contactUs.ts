import { ApiBaseUrl, request } from './request';

// Get activities
export const GET_CONTACT_US = (params?: any) => request<any>('get', `${ApiBaseUrl}/contact-us`, params);

// Get activities by id
export const GET_CONTACT_US_BY_ID = (id: string, params?: any) =>
  request<any>('get', `${ApiBaseUrl}/contact-us/${id}`, params);

// Add category
export const ADD_CONTACT_US = (data: any) => request<any>('post', `${ApiBaseUrl}/contact-us`, data);

// Delete category
export const DELETE_CONTACT_US = (id: number) => request<any>('delete', `${ApiBaseUrl}/contact-us/${id}`);

// Update category
export const UPDATE_CONTACT_US = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}/contact-us/${id}`, data);
