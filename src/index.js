import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store/store';
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';
import Auth from './components/auth/Auth';
import Admin from './components/auth/Admin';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Teacher from './components/auth/Teacher';
import Student from './components/auth/Student';
import ResetPassword from './components/ResetPassword';
import NewPassword from './components/NewPassword';
import ForgetPage from './components/ForgetPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/newPassword',
        element:<NewPassword />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/reset',
        element:<ResetPassword />
      },
      {
        path:'/forget',
        element:<ForgetPage />
      },
      {
        element:<Auth role={['admin']}/>,
        children:[
          {
            path:'/admin',
            element:<Admin />
          }
        ]
      },
      {
        element:<Auth role={['student']}/>,
        children:[
          {
            path:'/student',
            element:<Student />
          }
        ]
      },
      {
        element:<Auth role={['teacher']}/>,
        children:[
          {
            path:'/teacher',
            element:<Teacher />
          }
        ]
      }
    ]
  }
])

root.render(

  <>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </>
  
  
);

