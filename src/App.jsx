// App da página, que se localiza em src\App.jsx. Que contem a tag RouterProvider com a prop router que contem as rotas da aplicação.

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { GlobalStyle } from './Styles/Global.jsx'
import { ThemeProvider } from 'styled-components'
import { Theme } from './Styles/Theme.jsx'

export function App() {
  return (
    <>
       <ThemeProvider theme={Theme} >
          <GlobalStyle/>
          <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

