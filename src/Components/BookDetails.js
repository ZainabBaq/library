import { useParams, Redirect } from "react-router";
import { Details } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";

const BookDetails = (props) => {
  const bookSlug = useParams().bookSlug;
  const book = props.books.find((b) => b.slug === bookSlug);
  if (!book) return <Redirect to="/" />;
  return (
    <Details>
      <img src={book.img} />
      <h3>{book.name}</h3>
      <p>{book.description}</p>
      <p>{book.price} KD</p>
      {/* <button onClick={() => props.setCurrentBook(null)}>Go back</button> */}
      <DeleteButton deleteBook={props.deleteBook} bookId={book.id} />
    </Details>
  );
};

export default BookDetails;
