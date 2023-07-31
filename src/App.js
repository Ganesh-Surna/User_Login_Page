import React, { useState } from "react";

import LoginPage from "./LoginPage";
import WelcomePage from "./WelcomePage";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Remove user data from local storage and set 'loggedIn' to false
    localStorage.removeItem("userData");
    setLoggedIn(false);
  };

  // Check if the user is already logged in
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className="bg-container">
      {loggedIn ? (
        <div className="welcome-page">
          <WelcomePage userData={userData} />
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
