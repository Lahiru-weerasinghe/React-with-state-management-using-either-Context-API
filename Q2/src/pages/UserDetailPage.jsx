import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { LibraryContext } from "../context/LibraryContext";

function UserDetailPage() {
  const { id } = useParams();
  const { users, borrowBook, returnBook } = useContext(LibraryContext);

  const user = users.find((user) => user.id === id);

  const handleBorrowBook = (bookId) => {
    borrowBook(id, bookId);
  };

  const handleReturnBook = (bookId) => {
    returnBook(id, bookId);
  };

  return (
    <div>
      {user ? (
        <div>
          <center>
            <br />
          <h2>USER DETAILS</h2>
          <hr /><br />
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phoneNumber}</p>

          <p>Borrowed Books:</p>
          {user.borrowedBooks.length > 0 ? (
            <ul>
              {user.borrowedBooks.map((bookId) => (
                <li key={bookId}>
                  {bookId}
                  <button onClick={() => handleReturnBook(bookId)}>
                    Return
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p><b><i>No books borrowed.</i></b></p>
          )}
          </center>
        </div>
      ) : (
        <p><b><i>User Not Found.</i></b></p>
      )}
    </div>
  );
}

export default UserDetailPage;
