import type { LoginParams, LoginResult, LogoutParams, LogoutResult } from '../interface/user/login';

import { request } from './request';

const ApiBaseUrl = 'https://club-project-nestjs.vercel.app';

// Auth
export const apiLogin = (data: LoginParams) => request<LoginResult>('post', `${ApiBaseUrl}/auth/login`, data);

export const apiLogout = (data: LogoutParams) => request<LogoutResult>('post', '/user/logout', data);

// User
export const GET_USERS = (params?: any) => request<any>('get', `${ApiBaseUrl}/user`, params);

export const GET_USER_BY_ID = (id: string, params?: any) => request<any>('get', `${ApiBaseUrl}/user/${id}`, params);

export const DELETE_USER = (id: number) => request<any>('delete', `${ApiBaseUrl}/user/${id}`);

export const UPDATE_USER = (id: number, data: any) => request<any>('put', `${ApiBaseUrl}/user/${id}`, data);
