import React, { useEffect, useState } from 'react';
import { MyContext } from '.';

const MyProvider = ({ children }) => {
  const [showAddPropertyForm, setShowAddPropertyForm] = useState(false);
  const [showEditPropertyForm, setShowEditPropertyForm] = useState(false);

  const [properties, setProperties] = useState(false);
  const [data, setData] = useState(null);  // State to hold API data
  const [singleProperty, setSingleProperty] = useState(null);  // State to hold API data
  const [leads, setLeads] = useState(null);  // State to hold API data
  const [leadsError, setLeadsError] = useState(null);  // State to hold API error data
  const [leadsLoading, setLeadsLoading] = useState(null);  // State to hold API error data



  const [loading, setLoading] = useState(true); // State to show loading status
  const [error, setError] = useState(null); // State to show errors
  useEffect(() => {

      const fetchData = async () => {
        try {
          alert("hello")

          const response = await fetch('/api/properties'); // Replace with your API
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      
      const fetchLeads = async () => {
        try {
          const response = await fetch('/api/leads'); // Replace with your API
          if (!response.ok) {
            throw new Error('Failed to fetch leads data');
          }
          const result = await response.json();
          console.log("results: ", result);
          setLeads(result);
        } catch (err) {
          setLeadsError(err.message);
          console.error('Error fetching leads data:', err.message);
        } finally {
          setLeadsLoading(false);
        }
      };
  
  
      fetchData();
      fetchLeads();
 
  }, []);



  return (
    <MyContext.Provider value={{ showAddPropertyForm, setShowAddPropertyForm,  data, loading, error, showEditPropertyForm, setShowEditPropertyForm, singleProperty, setSingleProperty }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;