// App da página, que se localiza em src\App.jsx. Que contem a tag RouterProvider com a prop router que contem as rotas da aplicação.

import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routes";
import { useEffect } from "react";

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

