// context/MyContext.js
"use client"
import {useEffect, createContext, useState, useContext } from 'react';

// Create the context
const MyContext = createContext();

// Export the custom hook to use the context easily
export const useMyContext = () => useContext(MyContext);
// Create the provider
export const MyProvider = ({ children }) => {
    const [showAddPropertyForm, setShowAddPropertyForm] = useState(false);
    const [showEditPropertyForm, setShowEditPropertyForm] = useState(false);
    const [properties, setProperties] = useState([]);  // Initialized as an array
    const [data, setData] = useState(null);
    const [singleProperty, setSingleProperty] = useState(null);
    const [leads, setLeads] = useState(null);
    const [leadsError, setLeadsError] = useState(null);
    const [leadsLoading, setLeadsLoading] = useState(true);  // Set initial loading state to true
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/properties');
          if (!response.ok) {
            throw new Error('Failed to fetch properties');
          }
          const result = await response.json();
          setProperties(result);  // Correct state update
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      const fetchLeads = async () => {
        try {
          const response = await fetch('/api/leads');
          if (!response.ok) {
            throw new Error('Failed to fetch leads data');
          }
          const result = await response.json();
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
    }, []);  // Empty array ensures the effect runs only once when component mounts
  
    return (
      <MyContext.Provider
        value={{
            showAddPropertyForm, setShowAddPropertyForm, 
      data, loading, error, 
      showEditPropertyForm, setShowEditPropertyForm, 
      singleProperty, setSingleProperty, 
      leads, leadsLoading, setLeads, 
      properties 
        }}
      >
        {children}
      </MyContext.Provider>
    );
  };