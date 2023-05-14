import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { LibraryContext } from "../context/LibraryContext";

function BookDetailPage() {
    const { id } = useParams();
    const { books, borrowBook, returnBook } = useContext(LibraryContext);

    const book = books.find((book) => book.id === id);

    const handleBorrowBook = () => {
        borrowBook(id);
    };

    const handleReturnBook = () => {
        returnBook(id);
    };

    return (
        <div>
            {book ? (
                <div>
                    <br />
                    <center>
                        <h2>BOOK DETAILS</h2>
                        <hr />
                        <br />
                        <h3>Title: {book.title}</h3>
                        <p>Author: {book.author}</p>

                        <p>Publication Date: {book.publicationDate}</p>
                        <p>Available Copies: {book.availableCopies}</p>
                        <br />
                        <h3>Borrow Book</h3>
                        <button onClick={handleBorrowBook}>Borrow</button>
                        <button onClick={handleReturnBook}>Return</button>
                    </center>
                </div>
            ) : (
                <p>Book not found.</p>
            )}
        </div>
    );
}

export default BookDetailPage;
