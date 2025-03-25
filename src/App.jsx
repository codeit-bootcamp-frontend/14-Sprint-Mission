import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
