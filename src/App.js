import { useState } from "react";
import Home from "./Components/Home";
import BooksList from "./Components/BooksList";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, ThemeButton } from "./styles";
import BookDetails from "./Components/BookDetails";
import { Route, Switch } from "react-router";
import NavBar from "./Components/NavBar";
import AddBook from "./Components/AddBook";

function App() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("color")
      ? theme[localStorage.getItem("color")]
      : theme.light
  );
  const switchTheme = () => {
    if (currentTheme === theme.light) {
      setCurrentTheme(theme.dark);
      localStorage.setItem("color", "dark");
    } else {
      setCurrentTheme(theme.light);
      localStorage.setItem("color", "light");
    }
  };

  // condition ? true : false

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={switchTheme} />
      <Switch>
        <Route path="/books/new">
          <AddBook />
        </Route>
        <Route path="/books/:bookSlug">
          <BookDetails />
        </Route>
        <Route path="/books" exact>
          <BooksList />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
