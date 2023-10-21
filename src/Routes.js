import { useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './page/Home/Home';
import EarnPoints from './page/EarnPoints/EarnPoints';
import UsePoints from './page/UsePoints/UsePoints';
import Register from './page/Register/Register';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      element: <Layout />,
      path: '/user',
      children: [
        { path: 'earn', element: <EarnPoints /> },
        { path: 'use', element: <UsePoints /> },
        { path: 'register', element: <Register /> },
      ],
    },
  ]);

  return routes;
};

export default Routes;
