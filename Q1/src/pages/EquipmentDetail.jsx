import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';

const EquipmentDetail = () => {
  const { id } = useParams();
  const { equipment, customers, rentEquipment, returnEquipment } = useContext(AppContext);

  const equipmentItem = equipment.find((item) => item.id === id);

  const handleRent = (customerId) => {
    rentEquipment(id, customerId);
  };

  const handleReturn = () => {
    returnEquipment(id);
  };

  return (
    <div>
      {equipmentItem ? (
        <>
          <h1>{equipmentItem.name}</h1>
          <p>Description: {equipmentItem.description}</p>
          <p>Rental Price: {equipmentItem.rentalPrice}</p>
          <p>Availability: {equipmentItem.available ? 'Available' : 'Not Available'}</p>

          {equipmentItem.available ? (
            <div>
              <h2>Rent Equipment</h2>
              <div>
                <select>
                  <option value="">Select Customer</option>
                  {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  ))}
                </select>
                <button onClick={() => handleRent(equipmentItem.id)}>Rent</button>
              </div>
            </div>
          ) : (
            <button onClick={handleReturn}>Return</button>
          )}

          <div>
            <Link to="/equipment">Go Back to Equipment</Link>
          </div>
        </>
      ) : (
        <p>Equipment not found.</p>
      )}
    </div>
  );
};

export default EquipmentDetail;
