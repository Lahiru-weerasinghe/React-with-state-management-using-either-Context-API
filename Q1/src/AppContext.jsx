import React, { createContext, useState } from 'react';


export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  // Define state variables
  const [equipment, setEquipment] = useState([]);
  const [customers, setCustomers] = useState([]);

 

  // Add a new equipment item
  const addEquipment = (name, description, rentalPrice) => {
    const newEquipment = {
      id: generateId(), 
      name,
      description,
      rentalPrice,
      available: true,
    };

    setEquipment((prevEquipment) => [...prevEquipment, newEquipment]);
  };

  // Delete an equipment item
  const deleteEquipment = (id) => {
    setEquipment((prevEquipment) => prevEquipment.filter((item) => item.id !== id));
  };

  // Add a new customer
  const addCustomer = (name, address, phoneNumber) => {
    const newCustomer = {
      id: generateId(),
      name,
      address,
      phoneNumber,
      rentedEquipment: [],
    };

    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
  };

  // Delete a customer
  const deleteCustomer = (id) => {
    setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.id !== id));
  };

  // Generate unique ID for new items
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };


  const contextValue = {
    equipment,
    customers,
    addEquipment,
    deleteEquipment,
    addCustomer,
    deleteCustomer,
  };

  
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
