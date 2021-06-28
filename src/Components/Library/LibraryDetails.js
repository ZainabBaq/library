import { useParams, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Details, LibraryItem, AddBookButton } from "../../styles";
import BooksList from "../Books/BooksList";
import { getBookById } from "../../store/utils";

const LibraryDetails = () => {
  const librarySlug = useParams().librarySlug;
  const libraries = useSelector((state) => state.libraries.libraries);
  const books = useSelector((state) => state.books.books);
  const library = libraries.find((b) => b.slug === librarySlug);
  if (!library) return <Redirect to="/" />;

  const listOfBooks = library.books.map((book) => getBookById(book.id, books));

  return (
    <div>
      {" "}
      <LibraryItem>
        <h3>{library.name}</h3>
        <img src={library.img} />

        <Link to={`/libraries/${library.id}/books/new`}>
          <AddBookButton>Add Book</AddBookButton>
        </Link>
      </LibraryItem>
      <BooksList books={listOfBooks} />
    </div>
  );
};

export default LibraryDetails;
