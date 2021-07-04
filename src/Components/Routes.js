import React from "react";
import { Route, Switch } from "react-router";
import AddBook from "./Books/AddBook";
import BooksList from "./Books/BooksList";
import BookDetails from "./Books/BookDetails";
import LibraryDetails from "./Library/LibraryDetails";
import LibrariesList from "./Library/LibrariesList";
import Home from "./Home";
import SignUp from "./SignUp";

function Routes({ books }) {
  return (
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
      <Route path="/signup">
        <SignUp />
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
  );
}

export default Routes;
