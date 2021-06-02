import books from "../Books";
import Book from "./Book";
import { List } from "../styles";

const BooksList = () => {
  let arrayOfBooks = books.map((book) => <Book key={book.id} product={book} />);

  return <List>{arrayOfBooks}</List>;
};

export default BooksList;
