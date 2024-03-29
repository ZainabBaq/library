import { useParams, Redirect } from "react-router";
import { Button, Details } from "../../styles";
import DeleteButton from "../Buttons/DeleteButton";
import { useSelector } from "react-redux";
import { deleteBook } from "../../store/actions/bookActions";
import { useDispatch } from "react-redux";
import { AiTwotoneEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
const BookDetails = () => {
  const bookSlug = useParams().bookSlug;
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const book = books.find((b) => b.slug === bookSlug);
  if (!book) return <Redirect to="/" />;
  return (
    <Details>
      <img src={book.img} />
      <h3>{book.name}</h3>
      <p>{book.description}</p>
      <p>{book.price} KD</p>

      <DeleteButton deleteBook={() => dispatch(deleteBook(book.id))} />
      <Link to={`/books/${book.slug}/edit`}>
        <AiTwotoneEdit size="1em" />
      </Link>
    </Details>
  );
};

export default BookDetails;
