import { createBrowserRouter } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Protected from 'pages/Protected';
import Dashboard from 'pages/Dashboard';

export const ROOT = '/';
export const LOGIN = '/login';
export const REGISTER = '/register';

export const PROTECTED = '/protected';
export const DASHBOARD = '/protected/dashboard';

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: 'Public Root',
  },
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: REGISTER,
    element: <Register />,
  },
  {
    path: PROTECTED,
    element: <Protected />,
    children: [
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
    ],
  },
]);
