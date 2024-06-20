import type { LoginParams } from '../interface/user/login';
import type { Dispatch } from '@reduxjs/toolkit';

import { message } from 'antd';

import { apiLogin, apiLogout } from '../api/user.api';
import { setUserItem } from './user.store';
import { createAsyncAction } from './utils';
// typed wrapper async thunk function demo, no extra feature, just for powerful typings
export const loginAsync = createAsyncAction<LoginParams, boolean>(payload => {
  return async dispatch => {
    const { jwt, user } = await apiLogin(payload);

    console.log(jwt, 'sdsddsds');

    if (jwt && user.role === 'ADMIN') {
      localStorage.setItem('t', jwt);
      // localStorage.setItem('username', result.profile.first_name);
      dispatch(
        setUserItem({
          logged: true,
          username: 'admin',
        }),
      );

      return true;
    }

    message.error('must be an admin to login');

    return false;
  };
});

export const logoutAsync = () => {
  return async (dispatch: Dispatch) => {
    const { status } = await apiLogout({ token: localStorage.getItem('token')! });

    if (status) {
      localStorage.clear();
      dispatch(
        setUserItem({
          logged: false,
        }),
      );

      return true;
    }

    return false;
  };
};
