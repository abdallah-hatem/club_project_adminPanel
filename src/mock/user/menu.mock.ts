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

  // contact us
  {
    code: 'contact-us',
    label: {
      zh_CN: '首页',
      en_US: 'Contact us',
    },
    icon: 'dashboard',
    path: '/contact-us',
    children: [
      {
        code: 'contact-us',
        label: {
          zh_CN: '路由权限',
          en_US: 'contact us',
        },
        path: '/contact-us',
      },
      // {
      //   code: 'add',
      //   label: {
      //     zh_CN: '路由权限',
      //     en_US: 'add',
      //   },
      //   path: '/contact-us/add',
      // },
    ],
  },

  // faqs
  {
    code: 'faqs',
    label: {
      zh_CN: '首页',
      en_US: 'Faqs',
    },
    icon: 'dashboard',
    path: '/faqs',
    children: [
      {
        code: 'faqs',
        label: {
          zh_CN: '路由权限',
          en_US: 'faqs',
        },
        path: '/faqs',
      },
      {
        code: 'add',
        label: {
          zh_CN: '路由权限',
          en_US: 'add faq',
        },
        path: '/faqs/add',
      },
    ],
  },

  // coaches
  {
    code: 'coaches',
    label: {
      zh_CN: '首页',
      en_US: 'Coaches',
    },
    icon: 'dashboard',
    path: '/coaches',
    children: [
      {
        code: 'coaches',
        label: {
          zh_CN: '路由权限',
          en_US: 'coaches',
        },
        path: '/coaches',
      },
      {
        code: 'add',
        label: {
          zh_CN: '路由权限',
          en_US: 'add coach',
        },
        path: '/coaches/add',
      },
    ],
  },

  // sports
  {
    code: 'sports',
    label: {
      zh_CN: '首页',
      en_US: 'Sports',
    },
    icon: 'dashboard',
    path: '/sports',
    children: [
      {
        code: 'sports',
        label: {
          zh_CN: '路由权限',
          en_US: 'sports',
        },
        path: '/sports',
      },
      {
        code: 'add',
        label: {
          zh_CN: '路由权限',
          en_US: 'add sport',
        },
        path: '/sports/add',
      },
    ],
  },

  // practices
  {
    code: 'practices',
    label: {
      zh_CN: '首页',
      en_US: 'Practices',
    },
    icon: 'dashboard',
    path: '/practices',
    children: [
      {
        code: 'practices',
        label: {
          zh_CN: '路由权限',
          en_US: 'practices',
        },
        path: '/practices',
      },
      {
        code: 'add',
        label: {
          zh_CN: '路由权限',
          en_US: 'add practice',
        },
        path: '/practices/add',
      },
    ],
  },

  // Events
  {
    code: 'events',
    label: {
      zh_CN: '首页',
      en_US: 'Events',
    },
    icon: 'dashboard',
    path: '/events',
    children: [
      {
        code: 'events',
        label: {
          zh_CN: '路由权限',
          en_US: 'events',
        },
        path: '/events',
      },
      {
        code: 'add',
        label: {
          zh_CN: '路由权限',
          en_US: 'add event',
        },
        path: '/events/add',
      },
    ],
  },

  // News
  {
    code: 'news',
    label: {
      zh_CN: '首页',
      en_US: 'News',
    },
    icon: 'dashboard',
    path: '/news',
    children: [
      {
        code: 'news',
        label: {
          zh_CN: '路由权限',
          en_US: 'news',
        },
        path: '/news',
      },
      {
        code: 'add',
        label: {
          zh_CN: '路由权限',
          en_US: 'add news',
        },
        path: '/news/add',
      },
    ],
  },

  // Admin
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
