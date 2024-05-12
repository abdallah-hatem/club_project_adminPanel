import type { MenuList } from '@/interface/layout/menu.interface';

import { intercepter, mock } from '../config';

const mockMenuList: MenuList = [
  // Dashboard
  // {
  //   code: 'dashboard',
  //   label: {
  //     zh_CN: '首页',
  //     en_US: 'Dashboard',
  //   },
  //   icon: 'dashboard',
  //   path: '/dashboard',
  // },
  // Category
  {
    code: 'categories',
    label: {
      zh_CN: '首页',
      en_US: 'Categories',
    },
    icon: 'dashboard',
    path: '/categories',
    children: [
      {
        code: 'categories',
        label: {
          zh_CN: '路由权限',
          en_US: 'Categories',
        },
        path: '/categories',
      },
      {
        code: 'addCategory',
        label: {
          zh_CN: '路由权限',
          en_US: 'Add Category',
        },
        path: '/categories/addCategory',
      },
    ],
  },

  // Activity
  {
    code: 'activities',
    label: {
      zh_CN: '首页',
      en_US: 'Activities',
    },
    icon: 'activities',
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
          en_US: 'Add Activity',
        },
        path: '/activities/addActivity',
      },
    ],
  },

  // Package Item
  {
    code: 'packageItems',
    label: {
      zh_CN: '首页',
      en_US: 'Package Items',
    },
    icon: 'packageItems',
    path: '/packageItems',
    children: [
      {
        code: 'packageItems',
        label: {
          zh_CN: '路由权限',
          en_US: 'Package Items',
        },
        path: '/packageItems',
      },
      {
        code: 'addPackageItem',
        label: {
          zh_CN: '路由权限',
          en_US: 'Add PackageItem',
        },
        path: '/packageItems/addPackageItem',
      },
    ],
  },

  // Age
  {
    code: 'ages',
    label: {
      zh_CN: '首页',
      en_US: 'Ages',
    },
    icon: 'ages',
    path: '/ages',
    children: [
      {
        code: 'ages',
        label: {
          zh_CN: '路由权限',
          en_US: 'Ages',
        },
        path: '/ages',
      },
      {
        code: 'addAge',
        label: {
          zh_CN: '路由权限',
          en_US: 'Add Age',
        },
        path: '/ages/addAge',
      },
    ],
  },

  // Package
  {
    code: 'packages',
    label: {
      zh_CN: '首页',
      en_US: 'Packages',
    },
    icon: 'packages',
    path: '/packages',
    children: [
      {
        code: 'packages',
        label: {
          zh_CN: '路由权限',
          en_US: 'Packages',
        },
        path: '/packages',
      },
      {
        code: 'addPackage',
        label: {
          zh_CN: '路由权限',
          en_US: 'Add Package',
        },
        path: '/packages/addPackages',
      },
    ],
  },

  // Admin
  {
    code: 'admin',
    label: {
      zh_CN: '首页',
      en_US: 'Admin',
    },
    icon: 'admin',
    path: '/admin',
    children: [
      {
        code: 'users',
        label: {
          zh_CN: '路由权限',
          en_US: 'Users',
        },
        path: '/users',
      },
      {
        code: 'roles',
        label: {
          zh_CN: '路由权限',
          en_US: 'Roles',
        },
        path: '/roles',
      },
    ],
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
