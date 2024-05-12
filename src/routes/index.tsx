import type { FC } from 'react';
import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Navigate } from 'react-router';
import { useRoutes } from 'react-router-dom';

import Activities from '@/pages/activities';
import AddActivity from '@/pages/activities/addActivity';
import UpdateActivity from '@/pages/activities/updateActivity';
import Roles from '@/pages/admin/roles';
import UpdateRole from '@/pages/admin/updateRole';
import Users from '@/pages/admin/users';
import Ages from '@/pages/ages';
import AddAge from '@/pages/ages/addAge';
import UpdateAge from '@/pages/ages/updateAge';
import Categories from '@/pages/categories';
import AddCategory from '@/pages/categories/addCategory';
import UpdateCategory from '@/pages/categories/updateCategory';
import Dashboard from '@/pages/dashboard';
import LayoutPage from '@/pages/layout';
import LoginPage from '@/pages/login';
import PackageItems from '@/pages/packageItems';
import AddPackageItem from '@/pages/packageItems/addPackageItem';
import UpdatePackageItem from '@/pages/packageItems/updatePackageItem';
import Packages from '@/pages/packages';
import AddPackage from '@/pages/packages/addPackage';
import UpdatePackage from '@/pages/packages/updatePackage';

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
        element: <Navigate to="dashboard" />,
      },
      {
        path: 'dashboard',
        element: <WrapperRouteComponent element={<Dashboard />} titleId="title.dashboard" />,
      },

      ///////////////// Categories /////////////////
      {
        path: 'categories',
        element: <WrapperRouteComponent element={<Categories />} titleId="title.categories" auth />,
      },
      {
        path: 'categories/addCategory',
        element: <WrapperRouteComponent element={<AddCategory />} titleId="title.addcategory" auth />,
      },
      {
        path: 'categories/updateCategory/:id',
        element: <WrapperRouteComponent element={<UpdateCategory />} titleId="title.updateCategory" auth />,
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

      ///////////////// PackageItems /////////////////
      {
        path: 'packageItems',
        element: <WrapperRouteComponent element={<PackageItems />} titleId="title.packageItems" auth />,
      },
      {
        path: 'packageItems/addPackageItem',
        element: <WrapperRouteComponent element={<AddPackageItem />} titleId="title.addPackageItem" auth />,
      },
      {
        path: 'packageItems/updatePackageItem/:id',
        element: <WrapperRouteComponent element={<UpdatePackageItem />} titleId="title.updatePackageItem" auth />,
      },
      ///////////////// Packages /////////////////
      {
        path: 'packages',
        element: <WrapperRouteComponent element={<Packages />} titleId="title.packages" auth />,
      },
      {
        path: 'packages/addPackages',
        element: <WrapperRouteComponent element={<AddPackage />} titleId="title.addPackage" auth />,
      },
      {
        path: 'packages/updatePackage/:id',
        element: <WrapperRouteComponent element={<UpdatePackage />} titleId="title.updatePackage" auth />,
      },
      ///////////////// Ages /////////////////
      {
        path: 'ages',
        element: <WrapperRouteComponent element={<Ages />} titleId="title.ages" auth />,
      },
      {
        path: 'ages/addAge',
        element: <WrapperRouteComponent element={<AddAge />} titleId="title.addAge" auth />,
      },
      {
        path: 'ages/updateAge/:id',
        element: <WrapperRouteComponent element={<UpdateAge />} titleId="title.updateAge" auth />,
      },

      ///////////////// Admin /////////////////

      {
        path: 'users',
        element: <WrapperRouteComponent element={<Users />} titleId="title.users" auth />,
      },
      {
        path: 'roles',
        element: <WrapperRouteComponent element={<Roles />} titleId="title.roles" auth />,
      },
      {
        path: 'role/:id',
        element: <WrapperRouteComponent element={<UpdateRole />} titleId="title.updateRole" auth />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
