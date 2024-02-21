import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AppLayout from './AppLayout.tsx';
import HomePage from './HomePage.tsx';
import NewPostPage from './NewPostPage.tsx';


const router = createBrowserRouter( createRoutesFromElements(
    <Route path="/" Component={AppLayout}>
    <Route index Component={HomePage} /> 
    <Route path="new" Component={NewPostPage} /> 
     </Route> 
  )
); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
); 



