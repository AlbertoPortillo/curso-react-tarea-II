import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import Home from './home/Home';
import HomeBlog from './blog/Home';
import CreationBlog from './blog/Creation';
import EditBlog from './blog/Edit';

const router = createBrowserRouter([
  {
    element: <Home />,
    path:"/",
    children:[
      {
        index: true, 
        element: <HomeBlog />
      },
      {
        path: "/new-post",
        element: <CreationBlog />
      },
      {
        path: "/posts/:id",
        element: <EditBlog />
      }
    ]
  },
]);


function App() {

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
