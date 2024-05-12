import { request } from './request';

// Get categories
export const GET_CATEGORIES = (params?: any) =>
  request<any>('get', 'https://trueodysseysapi.bitnata.com/api/categories', params);

// Get categories by id
export const GET_CATEGORIES_BY_ID = (id: string, params?: any) =>
  request<any>('get', `https://trueodysseysapi.bitnata.com/api/categories/${id}`, params);
// Add category
export const ADD_CATEGORY = (data: any) =>
  request<any>('post', 'https://trueodysseysapi.bitnata.com/api/categories', data);

// Delete category
export const DELETE_CATEGORY = (id: number) =>
  request<any>('delete', `https://trueodysseysapi.bitnata.com/api/categories/${id}`);

// Update category
export const UPDATE_CATEGORY = (id: number, data: any) =>
  request<any>('put', `https://trueodysseysapi.bitnata.com/api/categories/${id}`, data);
