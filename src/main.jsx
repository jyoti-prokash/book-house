import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Error from './Components/Error Page/Error';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Detail from './Book Detail/Detail';
import ListedBooks from './Components/ListedBooks/ListedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "books/:bookId",
        element: <Detail></Detail>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: "listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/booksData.json")
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
