import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';

const CustomerDetail = () => {
  const { id } = useParams();
  const { customers, equipment, returnEquipment } = useContext(AppContext);

  const customer = customers.find((customer) => customer.id === id);

  const handleReturn = (equipmentId) => {
    returnEquipment(equipmentId);
  };

  return (
    <div>
      {customer ? (
        <>
          <h1>{customer.name}</h1>
          <p>Address: {customer.address}</p>
          <p>Phone Number: {customer.phoneNumber}</p>

          <div>
            <h2>Rented Equipment</h2>
            {customer.rentedEquipment.length > 0 ? (
              customer.rentedEquipment.map((equipmentId) => {
                const rentedEquipment = equipment.find((item) => item.id === equipmentId);

                return (
                  <div key={equipmentId}>
                    <h3>{rentedEquipment.name}</h3>
                    <p>Description: {rentedEquipment.description}</p>
                    <p>Rental Price: {rentedEquipment.rentalPrice}</p>
                    <button onClick={() => handleReturn(equipmentId)}>Return</button>
                  </div>
                );
              })
            ) : (
              <p>No equipment rented.</p>
            )}
          </div>

          <div>
            <Link to="/customers">Go Back to Customers</Link>
          </div>
        </>
      ) : (
        <p>Customer not found.</p>
      )}
    </div>
  );
};

export default CustomerDetail;
