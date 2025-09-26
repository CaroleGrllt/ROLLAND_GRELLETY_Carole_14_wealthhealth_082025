import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomeLayout from './layouts/HomeLayout';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import New from './pages/New';
import List from './pages/List';


export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      ),
    },
    {
      path: '/new-employee',
      element: (
        <DefaultLayout>
          <New />
        </DefaultLayout>
      ),
    },
    {
      path: '/list-employees',
      element: (
        <DefaultLayout>
          <List />
        </DefaultLayout>
      ),
    },
    {
      path: '*',
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      ),
    },
  ],
  {
  basename: '/ROLLAND_GRELLETY_Carole_14_wealthhealth_082025',
  });

  return (
      <RouterProvider router={router} />
  );
}
