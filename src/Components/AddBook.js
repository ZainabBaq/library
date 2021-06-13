import React, { useState } from "react";
import { AddBookDiv, Button, ThemeButton } from "../styles";
import { addBook } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function AddBook() {
  const [book, setBook] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook(book));
    history.push("/books");
  };
  return (
    <form onSubmit={handleSubmit}>
      <AddBookDiv>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="enter book name"
        />
        <input
          onChange={handleChange}
          type="number"
          name="price"
          placeholder="enter book price"
        />
        <input
          onChange={handleChange}
          type="text"
          name="description"
          placeholder="enter book description"
        />
        <input
          onChange={handleChange}
          type="text"
          name="img"
          placeholder="paste image address here"
        />

        <Button type="submit">Submit</Button>
      </AddBookDiv>
    </form>
  );
}

export default AddBook;
