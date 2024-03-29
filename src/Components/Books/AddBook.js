import React, { useState } from "react";
import { AddBookDiv, Button, ThemeButton } from "../../styles";
import { addBook, updateBook } from "../../store/actions/bookActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

function AddBook() {
  const libraryId = useParams().libraryId;
  const bookSlug = useParams().bookSlug;
  const books = useSelector((state) => state.books.books);

  const updatedBook = books.find((b) => b.slug === bookSlug);

  const [book, setBook] = useState(
    updatedBook ?? {
      name: "",
      price: "",
      description: "",
      img: "",
    }
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setBook({ ...book, img: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (updatedBook) dispatch(updateBook(book));
    else dispatch(addBook(book, libraryId));
    history.push("/books");
  };
  return (
    <form onSubmit={handleSubmit}>
      <AddBookDiv>
        <input
          value={book.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="enter book name"
        />
        <input
          value={book.price}
          onChange={handleChange}
          type="number"
          name="price"
          placeholder="enter book price"
        />
        <input
          value={book.description}
          onChange={handleChange}
          type="text"
          name="description"
          placeholder="enter book description"
        />
        <input
          onChange={handleImage}
          type="file"
          name="img"
          placeholder="paste image address here"
        />

        <Button type="submit">{updatedBook ? "Update" : "Submit"}</Button>
      </AddBookDiv>
    </form>
  );
}

export default AddBook;
