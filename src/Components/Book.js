import { Item } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";

const Book = (props) => {
  const book = props.product;

  return (
    <Item>
      <img onClick={() => props.setCurrentBook(book)} src={book.img} />
      <h3>{book.name}</h3>
      <p>{book.price} KD</p>
      <DeleteButton deleteBook={props.deleteBook} bookId={book.id} />
    </Item>
  );
};

export default Book;
