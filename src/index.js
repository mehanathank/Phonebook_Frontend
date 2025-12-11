import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from './Pages/Login';
import Home from './Pages/Home'; 
import Edit from './Pages/Edit';
import Addcontract from './Pages/AddContact';
import ListContacts from './Pages/ListContacts';
import ContactDetails from './Pages/ContactDetails';
import Trash from './Pages/Trash';


const routerVariables =createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Login></Login>
    },
    {
      path:"/home",
      element:<Home></Home>
    },
    {
      path:"/edit",
      element:<Edit></Edit>
    },
    {
      path:"/add",
      element:<Addcontract></Addcontract>
    },
    {
      path:"/edit/:editid",
      element:<Edit></Edit>
    },

    {
      path:"*",
      element:<h1> page not found please check your url</h1>
    },
    {
      path:"/contacts",
      element:<ListContacts></ListContacts>
    },
    {
      path:"/contact/:id",
      element:<ContactDetails></ContactDetails>
    },
    {
      path:"/list",
      element:<ListContacts></ListContacts>
    },
    {
      path:"/trash",
      element:<Trash></Trash>
    }
  ],
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={routerVariables}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
