import { createBrowserRouter } from 'react-router-dom'
import { Introduction } from "./Introduction"
import { Error404 } from "./Error404"

export const router = createBrowserRouter([
    {
      path: "",
      element: <Introduction />,
    },
    {
      path: "*",
      element: <Error404 />,
    }
  ]);
  