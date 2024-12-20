// Sidebar Component (components/Sidebar.js)
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/agents" className="sidebar-link">
            <i className="material-icons">people</i> Agents
          </NavLink>
        </li>
        <li>
          <NavLink to="/campaigns" className="sidebar-link">
            <i className="material-icons">campaign</i> Campaigns
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className="sidebar-link">
            <i className="material-icons">dashboard</i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className="sidebar-link">
            <i className="material-icons">settings</i> Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;