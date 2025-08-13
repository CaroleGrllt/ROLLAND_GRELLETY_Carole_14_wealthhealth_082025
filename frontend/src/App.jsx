// App.tsx
import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// LAYOUTS & PAGES en lazy
const HomeLayout    = lazy(() => import('./layouts/HomeLayout'));
const DefaultLayout = lazy(() => import('./layouts/DefaultLayout'));

const Home  = lazy(() => import('./pages/Home'));
const New   = lazy(() => import('./pages/New'));
const List  = lazy(() => import('./pages/List'));
const ErrorPage = lazy(() => import('./pages/Error'));

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
      path: '/',
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
          <ErrorPage />
        </HomeLayout>
      ),
    },
  ]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}
