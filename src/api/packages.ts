import { ApiBaseUrl, request } from './request';

// Get Package
export const GET_PACKAGES = (params: any) => request<any>('get', `${ApiBaseUrl}packages`, params);

export const GET_PACKAGES2 = (params: any) => request<any>('get', `${ApiBaseUrl}packages?page=1&per_page=1000`, params);
// Get Package by id
export const GET_PACKAGE_BY_ID = (id: string, params?: any) =>
  request<any>('get', `${ApiBaseUrl}packages/${id}`, params);

// Add Package
export const Add_PACKAGE = (data: any) => request<any>('post', `${ApiBaseUrl}packages`, data);

// Delete Package
export const DELETE_PACKAGE = (id: number) => request<any>('delete', `${ApiBaseUrl}packages/${id}`);

// Update Package
export const UPDATE_PACKAGE = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}packages/${id}`, data);
