import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LibraryContext } from "../context/LibraryContext";

function Home() {
    const { books, users } = useContext(LibraryContext);

    return (
        <div>
            <br />
            <center>
                <h2>ALL BOOKS</h2>

                <br />
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>
                            <Link to={`/book/${book.id}`}>{book.title}</Link>
                        </li>
                    ))}
                </ul>
            </center>
            <br />
            <hr />
            <br />
            <center>
                <h2>ALL USERS</h2>

                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <Link to={`/user/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
                </ul>
            </center>
        </div>
    );
}

export default Home;
