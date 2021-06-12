import { Item } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";
import { Link } from "react-router-dom";

const Book = (props) => {
  const book = props.product;

  return (
    <Item>
      <Link to={`/books/${book.slug}`}>
        <img src={book.img} />
      </Link>

      <h3>{book.name}</h3>
      <p>{book.price} KD</p>
      <DeleteButton deleteBook={props.deleteBook} bookId={book.id} />
    </Item>
  );
};

export default Book;
