import { ApiBaseUrl, request } from './request';

// Get Package item
export const GET_PACKAGE_ITEM = (params?: any) => request<any>('get', `${ApiBaseUrl}/package-items`, params);

// Get Package item by id
export const GET_PACKAGE_ITEM_BY_ID = (id: string, params?: any) =>
  request<any>('get', `${ApiBaseUrl}/package-items/${id}`, params);

// Add Package item
export const Add_PACKAGE_ITEM = (data: any) => request<any>('post', `${ApiBaseUrl}/package-items`, data);

// Delete Package item
export const DELETE_PACKAGE_ITEM = (id: number) => request<any>('delete', `${ApiBaseUrl}/package-items/${id}`);

// Update Package item
export const UPDATE_PACKAGE_ITEM = (id: number, data: any) =>
  request<any>('put', `${ApiBaseUrl}/package-items/${id}`, data);
