import type { MenuList } from '@/interface/layout/menu.interface';

import { intercepter, mock } from '../config';

const mockMenuList: MenuList = [
  // Dashboard

  // Category
  {
    code: 'activities',
    label: {
      zh_CN: '首页',
      en_US: 'activities',
    },
    icon: 'dashboard',
    path: '/activities',
    children: [
      {
        code: 'activities',
        label: {
          zh_CN: '路由权限',
          en_US: 'activities',
        },
        path: '/activities',
      },
      {
        code: 'addActivity',
        label: {
          zh_CN: '路由权限',
          en_US: 'Add activity',
        },
        path: '/activities/addActivity',
      },
    ],
  },

  // Activity

  // Package Item

  // Age

  // Package

  // Admin
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
