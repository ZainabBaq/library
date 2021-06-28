export const getBookById = (bookId, books) =>
  books.find((book) => book.id === bookId);
