import type { FC } from 'react';
import type { RouteObject } from 'react-router';

import { Navigate } from 'react-router';
import { useRoutes } from 'react-router-dom';

import Categories from '@/pages/activities';
import Activities from '@/pages/activities';
import AddCategory from '@/pages/activities/addActivity';
import AddActivity from '@/pages/activities/addActivity';
import UpdateCategory from '@/pages/activities/updateActivity';
import UpdateActivity from '@/pages/activities/updateActivity';
import LayoutPage from '@/pages/layout';
import LoginPage from '@/pages/login';

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
        element: (
          <WrapperRouteComponent
            element={<Activities />}
            titleId="title.activities"
            // auth
          />
        ),
      },
      {
        path: 'activities/addActivity',
        element: (
          <WrapperRouteComponent
            element={<AddActivity />}
            titleId="title.addActivity"
            // auth
          />
        ),
      },
      {
        path: 'activities/updateActivity/:id',
        element: (
          <WrapperRouteComponent
            element={<UpdateActivity />}
            titleId="title.updateActivity"
            // auth
          />
        ),
      },

      ///////////////// Activities ////////////////////

      ///////////////// PackageItems /////////////////

      ///////////////// Packages ////////////////////

      ///////////////// Ages ///////////////////////

      ///////////////// Admin /////////////////////
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
