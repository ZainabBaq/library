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
  document.title = "Books Library";

  const [_products, setProducts] = useState(books);
  const [currentBook, setCurrentBook] = useState(null);
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
  console.log("HEllo");

  // condition ? true : false

  const deleteBook = (bookID) => {
    let newBooks = _products.filter((book) => book.id !== bookID);
    setProducts(newBooks);
  };
  const setView = () => {
    if (currentBook)
      return (
        <BookDetails
          book={currentBook}
          setCurrentBook={setCurrentBook}
          deleteBook={deleteBook}
        />
      );
    else
      return (
        <BooksList
          setCurrentBook={setCurrentBook}
          books={_products}
          deleteBook={deleteBook}
        />
      );
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={switchTheme} />
      <Switch>
        <Route path="/books" exact>
          <BooksList
            setCurrentBook={setCurrentBook}
            books={_products}
            deleteBook={deleteBook}
          />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
