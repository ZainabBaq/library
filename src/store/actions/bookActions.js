import axios from "axios";
import * as actionTypes from "./types";

export const deleteBook = (bookId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/books/${bookId}`);
      dispatch({
        type: actionTypes.DELETE_BOOK,
        payload: { bookId: bookId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addBook = (newBook, libraryId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newBook) formData.append(key, newBook[key]);
      const res = await axios.post(
        `http://localhost:8000/libraries/${libraryId}/books`,
        formData
      );

      dispatch({
        type: actionTypes.ADD_BOOK,
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
      const formData = new FormData();
      for (const key in updatedBook) formData.append(key, updatedBook[key]);
      const res = await axios.put(
        `http://localhost:8000/books/${updatedBook.id}`,
        formData
      );
      dispatch({
        type: actionTypes.UPDATE_BOOK,
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
        type: actionTypes.FETCH_BOOKS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
