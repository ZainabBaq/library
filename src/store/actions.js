export const DELETE_BOOK = "DELETE_BOOK";
export const ADD_BOOK = "ADD_BOOK";
export const UPDATE_BOOK = "UPDATE_BOOK";

export const deleteBook = (bookId) => {
  return {
    type: DELETE_BOOK,
    payload: {
      bookId: bookId,
    },
  };
};

export const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: { newBook },
  };
};

export const updateBook = (updatedBook) => {
  return {
    type: UPDATE_BOOK,
    payload: { updatedBook },
  };
};
