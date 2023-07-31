import React from "react";
import "./WelcomePage.css";

const WelcomePage = ({ userData }) => {
  return (
    <div className="welcome-page1">
      <h1>Welcome, {userData.username}!</h1>
      <h2>Your password is "{userData.password}"</h2>
      {/* You can display other user data from the 'userData' object */}
      <p>Feel free to explore our website.</p>
    </div>
  );
};

export default WelcomePage;
