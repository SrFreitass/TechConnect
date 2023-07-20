import { createBrowserRouter } from 'react-router-dom'
import { Introduction } from "./Introduction"
import { Error404 } from "./Error404"
import { Home } from './Home'
import { NewsPage } from './NewsPage';
import { CreateArticle } from './TestCreate';

// Rotas de aplicações em forma de objetos, que contem o path e o elemento que será renderizado na tela.

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
      element: <Home/>,
    },
    {
        path: "home/news",
        element: <NewsPage/>
    },
    {
      path: "teste",
      element: <CreateArticle/>
    },
    {
      path: "home/news/:title",
      element: <NewsPage/>
    },
  ]);
    