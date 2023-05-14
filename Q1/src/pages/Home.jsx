import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Home = () => {
  const { equipment, customers } = useContext(AppContext);

  return (
    <div>
      <h1>Power Equipment Renting System</h1>
      
      <div>
        <h2>Equipment</h2>
        {equipment.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Description: {item.description}</p>
            <p>Rental Price: {item.rentalPrice}</p>
            <p>Availability: {item.available ? 'Available' : 'Not Available'}</p>
          </div>
        ))}
        {equipment.length === 0 && <p>No equipment available.</p>}
      </div>
      
      <div>
        <h2>Customers</h2>
        {customers.map((customer) => (
          <div key={customer.id}>
            <h3>{customer.name}</h3>
            <p>Address: {customer.address}</p>
            <p>Phone Number: {customer.phoneNumber}</p>
          </div>
        ))}
        {customers.length === 0 && <p>No customers available.</p>}
      </div>

      <div>
        <Link to="/equipment">Go to Equipment</Link>
        <Link to="/customers">Go to Customers</Link>
      </div>
    </div>
  );
};

export default Home;
