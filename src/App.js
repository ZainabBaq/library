import { useState } from "react";
import Home from "./Components/Home";
import BooksList from "./Components/Books/BooksList";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, ThemeButton } from "./styles";
import BookDetails from "./Components/Books/BookDetails";
import { Route, Switch } from "react-router";
import NavBar from "./Components/NavBar";
import AddBook from "./Components/Books/AddBook";
import LibrariesList from "./Components/Library/LibrariesList";
import LibraryDetails from "./Components/Library/LibraryDetails";
import { useSelector } from "react-redux";

function App() {
  const books = useSelector((state) => state.books.books);
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
        <Route
          path={["/libraries/:libraryId/books/new", "/books/:bookSlug/edit"]}
        >
          <AddBook />
        </Route>
        <Route path={"/libraries/:librarySlug"}>
          <LibraryDetails />
        </Route>
        <Route path="/libraries">
          <LibrariesList />
        </Route>

        <Route path="/books/:bookSlug">
          <BookDetails />
        </Route>
        <Route path="/books" exact>
          <BooksList books={books} />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
