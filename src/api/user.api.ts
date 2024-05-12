import type { LoginParams, LoginResult, LogoutParams, LogoutResult } from '../interface/user/login';

import { request } from './request';

export const apiLogin = (data: LoginParams) =>
  request<LoginResult>('post', 'https://trueodysseysapi.bitnata.com/api/tokens', data, {
    auth: data,
  });

export const apiLogout = (data: LogoutParams) => request<LogoutResult>('post', '/user/logout', data);
