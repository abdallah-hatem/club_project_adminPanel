import type { FC } from 'react';
import type { RouteObject } from 'react-router';

import { Navigate } from 'react-router';
import { useRoutes } from 'react-router-dom';

import { UPDATE_FIELD } from '@/api/fields';
import NotFoundPage from '@/pages/404';
import Categories from '@/pages/activities';
import Activities from '@/pages/activities';
import AddCategory from '@/pages/activities/addActivity';
import AddActivity from '@/pages/activities/addActivity';
import UpdateCategory from '@/pages/activities/updateActivity';
import UpdateActivity from '@/pages/activities/updateActivity';
import Fields from '@/pages/fields';
import AddField from '@/pages/fields/addField';
import UpdateField from '@/pages/fields/updateField';
import LayoutPage from '@/pages/layout';
import LoginPage from '@/pages/login';
import Users from '@/pages/users';
import AddUser from '@/pages/users/addUser';
import UpdateUser from '@/pages/users/updateUser';

import WrapperRouteComponent from './config';

const routeList: RouteObject[] = [
  {
    path: '/login',
    element: <WrapperRouteComponent element={<LoginPage />} titleId="title.login" />,
  },
  {
    path: '/',
    element: <WrapperRouteComponent element={<LayoutPage />} titleId="" />,
    children: [
      {
        path: '',
        element: <Navigate to="activities" />,
      },

      ///////////////// Activities /////////////////
      {
        path: 'activities',
        element: <WrapperRouteComponent element={<Activities />} titleId="title.activities" auth />,
      },
      {
        path: 'activities/addActivity',
        element: <WrapperRouteComponent element={<AddActivity />} titleId="title.addActivity" auth />,
      },
      {
        path: 'activities/updateActivity/:id',
        element: <WrapperRouteComponent element={<UpdateActivity />} titleId="title.updateActivity" auth />,
      },

      ///////////////// Fields ////////////////////

      {
        path: 'fields',
        element: <WrapperRouteComponent element={<Fields />} titleId="title.fields" auth />,
      },
      {
        path: 'fields/addField',
        element: <WrapperRouteComponent element={<AddField />} titleId="title.addField" auth />,
      },
      {
        path: 'fields/updateField/:id',
        element: <WrapperRouteComponent element={<UpdateField />} titleId="title.updateField" auth />,
      },

      ///////////////// Users /////////////////

      {
        path: 'users',
        element: <WrapperRouteComponent element={<Users />} titleId="title.users" auth />,
      },
      // {
      //   path: 'users/addUser',
      //   element: <WrapperRouteComponent element={<AddUser />} titleId="title.addUser" auth />,
      // },
      {
        path: 'users/updateUser/:id',
        element: <WrapperRouteComponent element={<UpdateUser />} titleId="title.updateUser" auth />,
      },

      ///////////////// Packages ////////////////////

      ///////////////// Ages ///////////////////////

      ///////////////// Admin /////////////////////

      {
        path: '*',
        element: <WrapperRouteComponent element={<NotFoundPage />} titleId="title.notFount" />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
