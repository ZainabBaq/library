import { useParams, Redirect } from "react-router";
import { Details } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";
import { useSelector } from "react-redux";
import { deleteBook } from "../store/actions";
import { useDispatch } from "react-redux";

const BookDetails = () => {
  const bookSlug = useParams().bookSlug;
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const book = books.find((b) => b.slug === bookSlug);
  if (!book) return <Redirect to="/" />;
  return (
    <Details>
      <img src={book.img} />
      <h3>{book.name}</h3>
      <p>{book.description}</p>
      <p>{book.price} KD</p>
      {/* <button onClick={() => props.setCurrentBook(null)}>Go back</button> */}
      <DeleteButton deleteBook={() => dispatch(deleteBook(book.id))} />
    </Details>
  );
};

export default BookDetails;
