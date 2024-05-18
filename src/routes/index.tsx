import type { FC } from 'react';
import type { RouteObject } from 'react-router';

import { Navigate } from 'react-router';
import { useRoutes } from 'react-router-dom';

// import { UPDATE_FIELD } from '@/api/fields';
import NotFoundPage from '@/pages/404';
// import Categories from '@/pages/activities';
import Activities from '@/pages/activities';
// import AddCategory from '@/pages/activities/addActivity';
import AddActivity from '@/pages/activities/addActivity';
// import UpdateCategory from '@/pages/activities/updateActivity';
import UpdateActivity from '@/pages/activities/updateActivity';
import Coaches from '@/pages/coaches';
import AddCoach from '@/pages/coaches/addCoach';
import UpdateCoach from '@/pages/coaches/updateCoach';
import ContactUs from '@/pages/contact-us';
import Events from '@/pages/events';
import AddEvent from '@/pages/events/addEvent';
import UpdateEvent from '@/pages/events/updateEvent';
import Faqs from '@/pages/faqs';
import AddFaq from '@/pages/faqs/addFaq';
import UpdateFaq from '@/pages/faqs/updateFaq';
import Fields from '@/pages/fields';
import AddField from '@/pages/fields/addField';
import UpdateField from '@/pages/fields/updateField';
import LayoutPage from '@/pages/layout';
import LoginPage from '@/pages/login';
import News from '@/pages/news';
import AddNews from '@/pages/news/addNews';
import UpdateNews from '@/pages/news/updateNews';
import Practices from '@/pages/practice';
import AddPractice from '@/pages/practice/addPractice';
// import UpdatePractice from '@/pages/practice/updatePractice';
import Sports from '@/pages/sports';
import AddSport from '@/pages/sports/addSport';
import UpdateSport from '@/pages/sports/updateSport';
import Users from '@/pages/users';
// import AddUser from '@/pages/users/addUser';
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

      ///////////////// Contact us ////////////////////

      {
        path: 'contact-us',
        element: <WrapperRouteComponent element={<ContactUs />} titleId="title.contactUs" auth />,
      },
      // {
      //   path: 'contact-us/add',
      //   element: <WrapperRouteComponent element={<AddUser />} titleId="title.addUser" auth />,
      // },
      // {
      //   path: 'contact-us/update/:id',
      //   element: <WrapperRouteComponent element={<UpdateUser />} titleId="title.updateUser" auth />,
      // },

      ///////////////// Faqs ///////////////////////

      {
        path: 'faqs',
        element: <WrapperRouteComponent element={<Faqs />} titleId="title.faqs" auth />,
      },
      {
        path: 'faqs/add',
        element: <WrapperRouteComponent element={<AddFaq />} titleId="title.addFaq" auth />,
      },
      {
        path: 'faqs/update/:id',
        element: <WrapperRouteComponent element={<UpdateFaq />} titleId="title.updateFaq" auth />,
      },

      ///////////////// Coaches /////////////////////

      {
        path: 'coaches',
        element: <WrapperRouteComponent element={<Coaches />} titleId="title.coaches" auth />,
      },
      {
        path: 'coaches/add',
        element: <WrapperRouteComponent element={<AddCoach />} titleId="title.addCoach" auth />,
      },
      {
        path: 'coach/update/:id',
        element: <WrapperRouteComponent element={<UpdateCoach />} titleId="title.updateCoach" auth />,
      },

      ///////////////// Sports //////////////////

      {
        path: 'sports',
        element: <WrapperRouteComponent element={<Sports />} titleId="title.sports" auth />,
      },
      {
        path: 'sports/add',
        element: <WrapperRouteComponent element={<AddSport />} titleId="title.addSport" auth />,
      },
      {
        path: 'sport/update/:id',
        element: <WrapperRouteComponent element={<UpdateSport />} titleId="title.updateSport" auth />,
      },

      ///////////////// Practices //////////////////

      {
        path: 'practices',
        element: <WrapperRouteComponent element={<Practices />} titleId="title.practices" auth />,
      },
      {
        path: 'practices/add',
        element: <WrapperRouteComponent element={<AddPractice />} titleId="title.addPractice" auth />,
      },
      // {
      //   path: 'practice/update/:id',
      //   element: <WrapperRouteComponent element={<UpdatePractice />} titleId="title.updatePractice" auth />,
      // },

      ///////////////// Events //////////////////

      {
        path: 'events',
        element: <WrapperRouteComponent element={<Events />} titleId="title.events" auth />,
      },
      {
        path: 'events/add',
        element: <WrapperRouteComponent element={<AddEvent />} titleId="title.addEvent" auth />,
      },
      {
        path: 'event/update/:id',
        element: <WrapperRouteComponent element={<UpdateEvent />} titleId="title.updateEvent" auth />,
      },

      ///////////////// News //////////////////

      {
        path: 'news',
        element: <WrapperRouteComponent element={<News />} titleId="title.news" auth />,
      },
      {
        path: 'news/add',
        element: <WrapperRouteComponent element={<AddNews />} titleId="title.addNews" auth />,
      },
      {
        path: 'news/update/:id',
        element: <WrapperRouteComponent element={<UpdateNews />} titleId="title.updateNews" auth />,
      },

      ///////////////// NotFound //////////////////
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
