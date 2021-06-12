import { useState } from "react";
import Home from "./Components/Home";
import BooksList from "./Components/BooksList";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, ThemeButton } from "./styles";
import BookDetails from "./Components/BookDetails";
import books from "./Books";
import { Route, Switch } from "react-router";
import NavBar from "./Components/NavBar";

function App() {
  const [_products, setProducts] = useState(books);
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

  const deleteBook = (bookID) => {
    let newBooks = _products.filter((book) => book.id !== bookID);
    setProducts(newBooks);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={switchTheme} />
      <Switch>
        <Route path="/books/:bookSlug">
          <BookDetails books={_products} deleteBook={deleteBook} />
        </Route>
        <Route path="/books" exact>
          <BooksList books={_products} deleteBook={deleteBook} />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
