import { createBrowserRouter } from 'react-router-dom'
import { Introduction } from "../pages/Introduction"
import { Error404 } from "../pages/Error404"
import { Home } from '../pages/Home'
import { NewsPage } from '../pages/NewsPage';
import { AdminPanel } from '../pages/AdminPanel';
import { ArticleEdit } from '../pages/ArticleEdit';
import { ArticleCreate } from '../pages/ArticleCreate';
import { ArticlesFinder } from '../pages/ArticlesFinder';
import { FastPage } from '../pages/FastPage';
import { FastCreation } from '../components/FastCreation';
import { AuthPage } from '../pages/AuthPage';
import { RegisterPage } from '../pages/Auth/Register';
import { LoginPage } from '../pages/Auth/Login';
import { CategoryPage } from '../pages/CategoryPage'
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
    element: <Home />,
  },
  {
    path: "home/news",
    element: <NewsPage />
  },
  {
    path: "home/news/:title",
    element: <NewsPage />
  },
  {
    path: "admin",
    element: <AdminPanel />,
  },
  {
    path: "admin/create",
    element: <ArticleCreate />,
  },
  {
    path: "admin/edit/:articleTitle",
    element: <ArticleEdit />,
  },
  {
    path: "results/:searchTitle",
    element: <ArticlesFinder />,
  },
  {
    path: "home/fast/:title",
    element: <FastPage />,
  },
  {
    path: "admin/fast/create",
    element: <FastCreation />
  },
  {
    path: "auth/login",
    element: <LoginPage />
  },
  {
    path: "auth/register",
    element: <RegisterPage />
  },
  {
    path: "category/:tag",
    element: <CategoryPage />
  }
]);
