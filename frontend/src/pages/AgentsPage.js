import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AgentsPage = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // Fetch agents from the backend
    axios.get('http://localhost:5001/api/assistants')
      .then(response => {
        setAgents(response.data.assistants);
      })
      .catch(error => {
        console.error('Error fetching agents:', error);
      });
  }, []);

  return (
    <div>
      <h1>Your Agents</h1>
      <button className="primary-button">Buy Agent</button>
      {agents.length > 0 ? (
        <div className="agent-list">
          {agents.map(agent => (
            <div key={agent.id} className="agent-card">
              <h2>{agent.name}</h2>
              <button className="secondary-button">Edit</button>
              <button className="danger-button">Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No agents found. Add one to get started!</p>
      )}
    </div>
  );
};

useEffect(() => {
  // Fetch agents from the backend
  axios.get('http://localhost:5001/api/assistants')
    .then(response => {
      console.log('API Response:', response.data);
      setAgents(response.data.assistants);
    })
    .catch(error => {
      console.error('Error fetching agents:', error);
    });
}, []);


export default AgentsPage;
