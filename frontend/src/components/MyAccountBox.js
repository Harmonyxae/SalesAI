// MyAccountBox Component (components/MyAccountBox.js)
import '../styles/MyAccountBox.css';    
const MyAccountBox = () => {
  return (
    <div className="my-account-box">
      <h3>My Account</h3>
      <p className="credit">Credit: <span className="highlight">$200</span></p>
      <ul>
        <li><a href="/add-credit">Add Credit</a></li>
        <li><a href="/allocate-credit">Allocate Credit</a></li>
        <li><a href="/settings">Settings</a></li>
        <li><a href="/help">Help</a></li>
        <li><a href="/logout" className="logout">Logout</a></li>
      </ul>
    </div>
  );
};

export default MyAccountBox;
