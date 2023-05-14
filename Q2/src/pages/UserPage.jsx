import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { LibraryContext } from "../context/LibraryContext";

function UserPage() {
    const { users, addUser, editUser, deleteUser } = useContext(LibraryContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleAddUser = () => {
        const newUser = {
            id: uuidv4(),
            name,
            email,
            phoneNumber,
            borrowedBooks: [],
        };
        addUser(newUser);
        setName("");
        setEmail("");
        setPhoneNumber("");
    };

    const handleEditUser = (id) => {
        const updatedUser = {
            id,
            name,
            email,
            phoneNumber,
        };
        editUser(updatedUser);
        setName("");
        setEmail("");
        setPhoneNumber("");
    };

    const handleDeleteUser = (id) => {
        deleteUser(id);
    };

    return (
        <div>
            <br />
            <center>
                <h2>USERS PAGE</h2>

                <h3>Add User</h3>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <br />
                <br />
                <center>
                    <button onClick={handleAddUser}> + Add User</button>
                </center>
                <br />
                <br />
                <hr />
                <br />
                <h3>All Users</h3>
                {users.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phoneNumber}</p>
                        <br />
                        <button onClick={() => handleEditUser(user.id)}>
                            EDIT
                        </button>
                        <button onClick={() => handleDeleteUser(user.id)}>
                            DELETE
                        </button>
                    </div>
                ))}
            </center>
        </div>
    );
}

export default UserPage;
