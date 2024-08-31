// src/components/ResourceManagementTips.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceManagementTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    // Fetch resource management tips from backend
    axios.get('/resource-management-tips')
      .then(response => {
        setTips(response.data.tips);
      })
      .catch(error => {
        console.error('Error fetching resource management tips:', error);
      });
  }, []);

  return (
    <div>
      <h2>Resource Management Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceManagementTips;
