import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MyAccountBox from './components/MyAccountBox';
import AgentsPage from './pages/AgentsPage';
import CampaignsPage from './pages/CampaignsPage';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';

ffunction App() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <MyAccountBox />
        <div className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const getAssistants = async () => {
    const response = await fetch(`${BASE_URL}/api/assistants`);
    if (!response.ok) {
        throw new Error('Failed to fetch assistants');
    }
    return response.json();
};

export default App;
