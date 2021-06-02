import Home from "./Components/Home";
import BooksList from "./Components/BooksList";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";

function App() {
  document.title = "Books Library";

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <BooksList />
    </ThemeProvider>
  );
}

export default App;
