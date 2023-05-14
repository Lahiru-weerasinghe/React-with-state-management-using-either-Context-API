import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { LibraryContext } from "../context/LibraryContext";

function BookPage() {
    const { books, addBook, editBook, deleteBook } = useContext(LibraryContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publicationDate, setPublicationDate] = useState("");
    const [availableCopies, setAvailableCopies] = useState("");

    const handleAddBook = () => {
        const newBook = {
            id: uuidv4(),
            title,
            author,
            publicationDate,
            availableCopies: parseInt(availableCopies),
        };
        addBook(newBook);
        setTitle("");
        setAuthor("");
        setPublicationDate("");
        setAvailableCopies("");
    };

    const handleEditBook = (id) => {
        const updatedBook = {
            id,
            title,
            author,
            publicationDate,
            availableCopies: parseInt(availableCopies),
        };
        editBook(updatedBook);
        setTitle("");
        setAuthor("");
        setPublicationDate("");
        setAvailableCopies("");
    };

    const handleDeleteBook = (id) => {
        deleteBook(id);
    };

    return (
        <div>
            <br />
            <center>
                <h2>BOOKS PAGE</h2>
            

            <h3>Add Books</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                type="text"
                placeholder="Publication Date"
                value={publicationDate}
                onChange={(e) => setPublicationDate(e.target.value)}
            />
            <input
                type="number"
                placeholder="Available Copies"
                value={availableCopies}
                onChange={(e) => setAvailableCopies(e.target.value)}
            />
            <br />
            <br />
            <center>
                <button onClick={handleAddBook}> + Add Book</button>
            </center>
            <br />
            <br />
            <hr />
            <br />
<center>
            <h3>All Books</h3></center>
            <br />
            {books.map((book) => (
                <div key={book.id}>
                  
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.publicationDate}</p>
                    <p>{book.availableCopies}</p>
                    <br />
                    <button onClick={() => handleEditBook(book.id)}>
                        EDIT
                    </button>

                    <button onClick={() => handleDeleteBook(book.id)}>
                        DELETE
                    </button>
                    
                </div>
            ))}
            </center>
        </div>
    );
}

export default BookPage;
