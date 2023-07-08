import { createBrowserRouter } from 'react-router-dom'
import { Introduction } from "./Introduction"
import { Error404 } from "./Error404"
import { Home } from './Home'

export const router = createBrowserRouter([
    {
      path: "*",
      element: <Error404 />,
    },
    {
      path: "",
      element: <Introduction />,
    },
    {
      path: "home", 
      element: <Home/>
    }
  ]);
  