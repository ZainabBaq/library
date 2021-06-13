import booksData from "../Books";
import { DELETE_BOOK } from "./actions";
const initialState = { books: booksData };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id != action.payload.bookId),
      };
    default:
      return state;
  }
};
export default reducer;
