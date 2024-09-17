import React, { useState } from 'react';
import { MyContext } from '.';

const MyProvider = ({ children }) => {
  const [showAddPropertyForm, setShowAddPropertyForm] = useState(false);

  return (
    <MyContext.Provider value={{ showAddPropertyForm, setShowAddPropertyForm }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;