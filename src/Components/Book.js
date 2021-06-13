import { Item } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";
import { Link } from "react-router-dom";
import { deleteBook } from "../store/actions";
import { useDispatch } from "react-redux";

const Book = (props) => {
  const book = props.product;
  const dispatch = useDispatch();

  return (
    <Item>
      <Link to={`/books/${book.slug}`}>
        <img src={book.img} />
      </Link>

      <h3>{book.name}</h3>
      <p>{book.price} KD</p>
      <DeleteButton deleteBook={() => dispatch(deleteBook(book.id))} />
    </Item>
  );
};

export default Book;
