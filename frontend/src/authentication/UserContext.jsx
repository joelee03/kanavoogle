import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [subscriptionActive, setSubscriptionActive] = useState(false);

  useEffect(() => {
    // Fetch user data on mount
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/verify-token', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` 
          }
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
          await fetchSubscriptionStatus(data.user._id);
        } else {
          console.error('Failed to fetch user data:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    const fetchSubscriptionStatus = async (userId) => {
      try {
        const response = await fetch(`/api/user/subscription/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setSubscriptionActive(data.subscriptionActive);
        } else {
          console.error('Failed to fetch subscription status:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch subscription status:', error);
      }
    };

    fetchUserData();
  }, []);

  const updateSubscriptionStatus = async (userId, subscriptionData) => {
    try {
      const response = await fetch(`/api/user/subscription/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(subscriptionData)
      });
      if (response.ok) {
        const data = await response.json();
        setSubscriptionActive(data.user.subscriptionActive);
      } else {
        console.error('Failed to update subscription status:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to update subscription status:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, subscriptionActive, updateSubscriptionStatus }}>
      {children}
    </UserContext.Provider>
  );
};
