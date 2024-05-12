import { request } from './request';

const ApiBaseUrl = 'https://funeralplannerapi.bitnata.com/api';

// Get users
export const GET_USERS = (params?: any) => request<any>('get', `${ApiBaseUrl}/funerary_agency_users`, params);

// Get active users
export const GET_ACTIVE_USERS = (params?: any) =>
  request<any>('get', `${ApiBaseUrl}/funerary_agency_users?status=active`, params);

// Get user by id
export const GET_USERS_BY_ID = (id: string, params?: any) =>
  request<any>('get', `${ApiBaseUrl}/funerary_agency_users/${id}`, params);

// Add user
export const ADD_USER = (data: any) => request<any>('post', `${ApiBaseUrl}/funerary_agency_users`, data);

// Delete user
export const ARCHIVE_USER = (id: number) => request<any>('delete', `${ApiBaseUrl}/users/${id}/archived`);

// Update user
export const UPDATE_USER = (id: number, data: any) =>
  request<any>('put', `${ApiBaseUrl}/funerary_agency_users/${id}`, data);

////////////////// Roles //////////////////

// Get roles
export const GET_ROLES = (params?: any) => request<any>('get', `${ApiBaseUrl}/roles`, params);

// Get roles 2
export const GET_ROLES_2 = (params?: any) => request<any>('get', `${ApiBaseUrl}/suggestions/roles`, params);

// Get role by id
export const GET_ROLES_BY_ID = (id: string, params?: any) => request<any>('get', `${ApiBaseUrl}/roles/${id}`, params);

// Add role
export const ADD_ROLE = (data: any) => request<any>('post', `${ApiBaseUrl}/roles`, data);

// Delete role
export const DELETE_ROLE = (id: number) => request<any>('delete', `${ApiBaseUrl}/roles/${id}`);

// Update role
export const UPDATE_ROLE = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}/roles/${id}`, data);

// Get permissions by role by id
export const GET_PERMISSIONS_BY_ROLE_ID = (id: string, params?: any) =>
  request<any>('get', `${ApiBaseUrl}/roles/${id}/permissions`, params);

// Add permissions by role by id
export const ADD_PERMISSIONS_BY_ROLE_ID = (id: string, data: any, params?: any) =>
  request<any>('post', `${ApiBaseUrl}/roles/${id}/permissions`, data, params);
