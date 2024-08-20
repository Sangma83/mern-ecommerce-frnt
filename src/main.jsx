import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Product from './components/Product';
import AuthProvider from './providers/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import Register from './components/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/product",
    element: <Product></Product>
  },
  {
    path: "/register",
    element: <Register></Register>
  }
  
]);

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <StrictMode>
   <HelmetProvider>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   </HelmetProvider>
  </StrictMode>
  </div>,
)
