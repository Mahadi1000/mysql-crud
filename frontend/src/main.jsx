import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import Root from './Utils/Root';
import Home from './Pages/Home';
import AddBooks from './Pages/AddBooks';
import UpdateBook from './Pages/UpdateBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
    { 
    index: true,
    element: <Home />,
    },
    { 
    path: '/add',
    element: <AddBooks />,
    },
    { 
    path: '/update',
    element: <UpdateBook />,
    }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
