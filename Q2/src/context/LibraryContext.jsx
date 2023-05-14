import React, { createContext, useState } from "react";

const LibraryContext = createContext();

function LibraryProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const editBook = (book) => {
    setBooks((prevBooks) =>
      prevBooks.map((b) => (b.id === book.id ? { ...b, ...book } : b))
    );
  };

  const deleteBook = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((b) => b.id !== bookId));
  };

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const editUser = (user) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === user.id ? { ...u, ...user } : u))
    );
  };



  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== userId));
  };

  const borrowBook = (userId, bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((b) =>
        b.id === bookId ? { ...b, availableCopies: b.availableCopies - 1 } : b
      )
    );
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === userId
          ? { ...u, borrowedBooks: [...u.borrowedBooks, bookId] }
          : u
      )
    );
  };

  const returnBook = (userId, bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((b) =>
        b.id === bookId ? { ...b, availableCopies: b.availableCopies + 1 } : b
      )
    );
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === userId
          ? {
              ...u,
              borrowedBooks: u.borrowedBooks.filter((id) => id !== bookId),
            }
          : u
      )
    );
  };

  return (
    <LibraryContext.Provider
      value={{
        books,
        users,
        addBook,
        editBook,
        deleteBook,
        addUser,
        editUser,
        deleteUser,
        borrowBook,
        returnBook,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export { LibraryContext, LibraryProvider };
