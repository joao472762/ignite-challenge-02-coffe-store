import { ThemeProvider } from "styled-components";

import { Router } from "./routes/router";
import { GlobalStyles } from "./theme/global";
import { theme } from "./theme/styles/default";
import { CoffesContextProvider } from "./context/coffes";
import { PessoalDatas, PessoalDatasProvider } from "./context/pessoalDatas";

export function App(){
  return(
    <ThemeProvider theme={theme}>
      <PessoalDatasProvider>
        <CoffesContextProvider>
          <Router/>
        </CoffesContextProvider>
      </PessoalDatasProvider>
      <GlobalStyles/>
    </ThemeProvider>
  )
}