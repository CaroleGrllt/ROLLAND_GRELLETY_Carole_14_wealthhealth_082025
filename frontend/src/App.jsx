// REACT
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//LAYOUTS AND COMPONENTS
import HomeLayout from './layouts/HomeLayout';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import New from './pages/New';
import List from './pages/List';
import Error from './pages/Error'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      ),
    },
    {
      path: "/new-employee",
      element: (
        <DefaultLayout>
          <New />
        </DefaultLayout>
      ),
    },
    {
      path: "/list-employees",
      element: (
        <DefaultLayout>
          <List />
        </DefaultLayout>
      ),
    },
    {
      path: "*",
      element: (
        <HomeLayout>
          <Error />
        </HomeLayout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}