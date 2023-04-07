import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/Error';
import PropertyPage from './pages/PropertyPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'a-propos',
        element: <About />,
      },
      {
        path: 'logements/:logementId',
        element: <PropertyPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
