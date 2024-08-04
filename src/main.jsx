import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Authentication from './pages/Authentication';
import ProtectedRoute from './routes/ProtectedRoute';
import Books from './pages/Books';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute><Books /></ProtectedRoute>,
    index: true
  },
  {
    path: '/auth/:mode',
    element: <Authentication />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
