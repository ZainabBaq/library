import axios from "axios";
export const DELETE_BOOK = "DELETE_BOOK";
export const ADD_BOOK = "ADD_BOOK";
export const UPDATE_BOOK = "UPDATE_BOOK";
export const FETCH_BOOKS = "FETCH_BOOKS";

export const deleteBook = (bookId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/books/${bookId}`);
      dispatch({
        type: DELETE_BOOK,
        payload: { bookId: bookId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addBook = (newBook) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/books", newBook);

      dispatch({
        type: ADD_BOOK,
        payload: { newBook: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateBook = (updatedBook) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/books/${updatedBook.id}`,
        updatedBook
      );
      dispatch({
        type: UPDATE_BOOK,
        payload: { updatedBook: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/books");
      dispatch({
        type: FETCH_BOOKS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
