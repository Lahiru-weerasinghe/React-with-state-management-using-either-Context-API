import React, { useContext } from "react";
import { LibraryContext } from "./LibraryContext";

function Book() {
  const { books, deleteBook } = useContext(LibraryContext);

  const handleDelete = (bookId) => {
    deleteBook(bookId);
  };

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} -{" "}
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Book;
