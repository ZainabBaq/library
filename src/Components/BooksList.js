import { useState } from "react";
import Book from "./Book";
import { List } from "../styles";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const BooksList = (props) => {
  const [query, setQuery] = useState("");
  const books = useSelector((state) => state.books);

  let arrayOfBooks = books
    .filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
    .map((book) => (
      <Book
        key={book.id}
        product={book}
        setCurrentBook={props.setCurrentBook}
      />
    ));

  console.log("hello BOOKS LIST");
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <List>{arrayOfBooks}</List>
    </div>
  );
};

export default BooksList;
