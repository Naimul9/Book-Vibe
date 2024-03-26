import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Listed_Books from './Pages/Listed Books/Listed_Books';
import Pages_To_Read from './Pages/Pages To Read/Pages_To_Read';
import MainLayout from './layouts/MainLayout';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import BookDetails from './Pages/BookDetails/BookDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch('/books.json')
      },
      {
        path: "/bookdetail/:bookId",
        element: <BookDetails></BookDetails>,
        loader : ()=> fetch('/books.json'),
      },

      {
        path: "/listed-books",
        element: <Listed_Books></Listed_Books>,
      },
      {
        path: "/pages-to-read",
        element: <Pages_To_Read></Pages_To_Read>,
      },
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
