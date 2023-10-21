import { createBrowserRouter } from "react-router-dom";
import { Overview } from "../pages/Overview";
import { NotFoundRouter } from "../pages/NotFoundRouter";
import { MainPage } from "../pages/Main";
import { AdminPanel } from "../pages/AdminPage";
import { ArticleEdit } from "../pages/ArticleEditPage";
import { CreateArticle } from "../pages/CreateArticle";
import { ArticlesFinder } from "../pages/ArticleFinderPage";
import { FastPage } from "../pages/FastPage";
import { FastCreation } from "../components/FastCreation";
import { RegisterPage } from "../pages/Auth/Register";
import { LoginPage } from "../pages/Auth/Login";
import { CategoriesArticle } from "../pages/CategoriesArticle";
import { Metaverso } from "../pages/Metaverso";
import { PasswordRecoveryPage } from "../pages/Auth/PasswordRecovery";
import { ArticlePage } from "../pages/Article";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundRouter />,
  },
  {
    path: "",
    element: <Overview />,
  },
  {
    path: "home",
    element: <MainPage />,
  },
  {
    path: "home/article/:titleID",
    element: <ArticlePage />,
  },
  {
    path: "admin",
    element: <AdminPanel />,
  },
  {
    path: "admin/create",
    element: <CreateArticle />,
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
    element: <FastCreation />,
  },
  {
    path: "auth/login",
    element: <LoginPage />,
  },
  {
    path: "auth/register",
    element: <RegisterPage />,
  },
  {
    path: "auth/recovery",
    element: <PasswordRecoveryPage />,
  },
  {
    path: "category/:tag",
    element: <CategoriesArticle />,
  },
  {
    path: "metaverso",
    element: <Metaverso />,
  },
]);
