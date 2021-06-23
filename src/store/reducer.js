import { ADD_BOOK, DELETE_BOOK, FETCH_BOOKS, UPDATE_BOOK } from "./actions";

const initialState = { books: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id != action.payload.bookId),
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload.newBook],
      };
    case UPDATE_BOOK:
      const { updatedBook } = action.payload; //3
      // updatedBook.slug = slugify(updatedBook.name);
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
