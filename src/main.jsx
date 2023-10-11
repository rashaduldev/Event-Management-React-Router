import React from 'react'

// eslint-disable-next-line no-unused-vars
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Login from './Pages/Login/Login.jsx';
import Services from './Pages/Home/Services/Services.jsx';
import Home from './Pages/Home/Home.jsx';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
// import PriveteRoute from './Provider/PriveteRoute';
import Service from './Pages/Home/Services/Service';
import Privatedetails from './Provider/Privatedetails';
import Aboutus from './Pages/Aboutus/Aboutus';
import PrivetAbout from './Provider/PrivetAbout';
import Errorpage from './Pages/Errorpage/Errorpage';
import Contact from './Pages/Contact/Contact';
import PrivateContact from './Provider/PrivateContact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch('data.json'),
      },
      {
        path: "/services",
        element: <Services></Services>,
      }
      ,
       {
        path: "/about",
        element: <PrivetAbout>
          <Aboutus></Aboutus>
        </PrivetAbout>
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
       {
        path: "/contact",
        element: <PrivateContact>
          <Contact></Contact>
        </PrivateContact>,
      },
      {
        path: "/service/:id",
        element:<Privatedetails>
           <Service></Service>
        </Privatedetails>,
        loader:()=> fetch('../data.json'),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
  </React.StrictMode>,
)
