import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Equipment = () => {
  const { equipment, addEquipment, deleteEquipment } = useContext(AppContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEquipment(name, description, rentalPrice);
    setName('');
    setDescription('');
    setRentalPrice('');
  };

  const handleDelete = (id) => {
    deleteEquipment(id);
  };

  return (
    <div>
      <h1>Equipment</h1>

      <div>
        <h2>Add Equipment</h2>
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
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="rentalPrice">Rental Price:</label>
            <input
              type="number"
              id="rentalPrice"
              value={rentalPrice}
              onChange={(e) => setRentalPrice(e.target.value)}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>

      <div>
        <h2>Equipment List</h2>
        {equipment.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Description: {item.description}</p>
            <p>Rental Price: {item.rentalPrice}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <Link to={`/equipment/${item.id}`}>View Details</Link>
          </div>
        ))}
        {equipment.length === 0 && <p>No equipment available.</p>}
      </div>

      <div>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default Equipment;
