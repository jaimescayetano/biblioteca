import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Category from './components/Category'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from './pages/Authentication';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Authentication />,
    index: true
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
