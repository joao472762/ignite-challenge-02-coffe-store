import { ThemeProvider } from "styled-components";
import { Router } from "./routes/router";
import { GlobalStyles } from "./theme/global";
import { theme } from "./theme/styles/default";

export function App(){
  return(
    <ThemeProvider theme={theme}>
      <Router/>
      <GlobalStyles/>
    </ThemeProvider>
  )
}