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
    
    localStorage.removeItem("userData");
    setLoggedIn(false);
  };

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
