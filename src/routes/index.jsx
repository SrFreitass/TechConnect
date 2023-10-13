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
import { Metaverso } from '../pages/Metaverso';
import { PasswordRecoveryPage } from '../pages/Auth/PasswordRecovery';

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
    path: "home/news/:titleID",
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
    path: "home/fast/:titleID",
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
    path: "auth/recovery",
    element: <PasswordRecoveryPage/>
  },
  {
    path: "category/:tag",
    element: <CategoryPage />
  },
  {
    path: "metaverso",
    element: <Metaverso />
  } 
]);
