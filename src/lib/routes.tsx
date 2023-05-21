import { createBrowserRouter } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Protected from 'pages/Protected';
import Dashboard from 'pages/Dashboard';
import Comments from 'pages/Comments';

export const ROOT = '/';
export const LOGIN = '/login';
export const REGISTER = '/register';

export const DASHBOARD = '/dashboard';
export const USERS = '/users';
export const COMMENTS = '/comments/:id';

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Protected />,
    children: [
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: COMMENTS,
        element: <Comments />,
      },
    ],
  },
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: REGISTER,
    element: <Register />,
  },
]);
