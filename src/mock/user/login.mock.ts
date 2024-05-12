import type { LoginResult, Role } from '@/interface/user/login';

import { intercepter, mock } from '../config';

mock.mock('/user/login', 'post', (config: any) => {
  const body: any = JSON.parse(config?.body);

  return intercepter<any>({
    token: '123abcdefg',
    username: body?.username,
    role: body?.username as Role,
  });
});
