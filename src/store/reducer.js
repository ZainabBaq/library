import booksData from "../Books";
import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "./actions";
import slugify from "slugify";

const initialState = { books: booksData };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id != action.payload.bookId),
      };
    case ADD_BOOK:
      // const newbook =  action.payload.newbook
      const { newBook } = action.payload;
      newBook.id = state.books[state.books.length - 1].id + 1;
      newBook.slug = slugify(newBook.name);
      return {
        ...state,
        books: [...state.books, newBook],
      };
    case UPDATE_BOOK:
      const { updatedBook } = action.payload; //3
      updatedBook.slug = slugify(updatedBook.name);
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === updatedBook.id ? updatedBook : book
        ),
      };
    default:
      return state;
  }
};
export default reducer;
