import type { MenuList } from '@/interface/layout/menu.interface';

import { intercepter, mock } from '../config';

const mockMenuList: MenuList = [
  // Dashboard

  // Activities
  {
    code: 'activities',
    label: {
      zh_CN: '首页',
      en_US: 'Activities',
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
          en_US: 'add activity',
        },
        path: '/activities/addActivity',
      },
    ],
  },

  // fields
  {
    code: 'fields',
    label: {
      zh_CN: '首页',
      en_US: 'Fields',
    },
    icon: 'dashboard',
    path: '/fields',
    children: [
      {
        code: 'fields',
        label: {
          zh_CN: '路由权限',
          en_US: 'fields',
        },
        path: '/fields',
      },
      {
        code: 'addField',
        label: {
          zh_CN: '路由权限',
          en_US: 'add field',
        },
        path: '/fields/addField',
      },
    ],
  },

  // Users

  {
    code: 'users',
    label: {
      zh_CN: '首页',
      en_US: 'Users',
    },
    icon: 'dashboard',
    path: '/users',
    children: [
      {
        code: 'users',
        label: {
          zh_CN: '路由权限',
          en_US: 'users',
        },
        path: '/users',
      },
      // {
      //   code: 'addUser',
      //   label: {
      //     zh_CN: '路由权限',
      //     en_US: 'add user',
      //   },
      //   path: '/users/addUser',
      // },
    ],
  },

  // Age

  // Package

  // Admin
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
