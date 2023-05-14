import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Customers = () => {
  const { customers, addCustomer, deleteCustomer } = useContext(AppContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer(name, address, phoneNumber);
    setName('');
    setAddress('');
    setPhoneNumber('');
  };

  const handleDelete = (id) => {
    deleteCustomer(id);
  };

  return (
    <div>
      <h1>Customers</h1>

      <div>
        <h2>Add Customer</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>

      <div>
        <h2>Customer List</h2>
        {customers.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Address: {item.address}</p>
            <p>Phone Number: {item.phoneNumber}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <Link to={`/customers/${item.id}`}>View Details</Link>
          </div>
        ))}
        {customers.length === 0 && <p>No customers available.</p>}
      </div>

      <div>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default Customers;
