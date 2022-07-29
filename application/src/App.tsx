import { ThemeProvider } from "styled-components";

import { Router } from "./routes/router";
import { GlobalStyles } from "./theme/global";
import { theme } from "./theme/styles/default";
import { CoffesContextProvider } from "./context/coffes";

export function App(){
  return(
    <ThemeProvider theme={theme}>
      <CoffesContextProvider>
        <Router/>
      </CoffesContextProvider>
      <GlobalStyles/>
    </ThemeProvider>
  )
}