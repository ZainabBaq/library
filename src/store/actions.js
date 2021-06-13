export const DELETE_BOOK = "DELETE_BOOK";

export const deleteBook = (bookId) => {
  return {
    type: DELETE_BOOK,
    payload: {
      bookId: bookId,
    },
  };
};
