import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import Error from './App/components/Error/Error'
import FAM from './App/components/projects/FAM/FAM'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path:"FAM",
    element: <FAM/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
