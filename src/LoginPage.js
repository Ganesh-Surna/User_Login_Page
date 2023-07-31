
import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Replace this with your authentication logic (e.g., API call, etc.)
    if (username === "user" && password === "password") {
      const userData = {
        username,
        password
        // Any other user data you want to store
      };

      // Save user data to local storage
      localStorage.setItem("userData", JSON.stringify(userData));

      // Call the onLogin function passed as a prop to notify parent component
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
      <div className="login-container">
        <h1>Login Page</h1>
        <form className="login-form">
            <div className="form-group">
                <label for="username">Username:</label>
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  name="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
            </div>
      <br />
      <button onClick={handleLogin}  className="login-btn" type="submit">Login</button>
      {error && <p>{error}</p>};
    </form>
    </div>
  );
};

export default LoginPage;
