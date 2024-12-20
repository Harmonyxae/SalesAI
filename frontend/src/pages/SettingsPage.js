// Settings Page (pages/SettingsPage.js)
import React from 'react';

const SettingsPage = () => {
  return (
    <div>
      <h1>Settings</h1>
      <ul>
        <li><a href="/billing">Billing and Payment</a></li>
        <li><a href="/team">Add Team Members</a></li>
        <li><a href="/profile">Profile Page</a></li>
      </ul>
    </div>
  );
};

export default SettingsPage;