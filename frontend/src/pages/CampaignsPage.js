import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch campaigns from the backend
    axios.get('http://localhost:5001/api/campaigns')
      .then(response => {
        setCampaigns(response.data.campaigns);
      })
      .catch(error => {
        console.error('Error fetching campaigns:', error);
      });
  }, []);

  return (
    <div>
      <h1>Campaigns</h1>
      <button className="primary-button">Add Campaign</button>
      {campaigns.length > 0 ? (
        <div className="campaign-list">
          {campaigns.map(campaign => (
            <div key={campaign.id} className="campaign-card">
              <h2>{campaign.name}</h2>
              <p>Progress: {campaign.progress}</p>
              <button className="secondary-button">Edit</button>
              <button className="secondary-button">Duplicate</button>
              <button className="danger-button">Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No campaigns found. Add one to get started!</p>
      )}
    </div>
  );
};

export default CampaignsPage;
