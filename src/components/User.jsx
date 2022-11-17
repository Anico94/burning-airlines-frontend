import React, { useState } from "react";
import { useIdLoggedIn, login, logout } from "../hooks";
import { useNavigate } from "react-router-dom";

const User = function () {
  const isLoggedIn = useIdLoggedIn();
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(state, navigate);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    logout(state, navigate);
  };

  return (
    <div>
      <div>
        <h1>Logged in</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
          <button onClick={handleLogout}>Sign Out</button>
        </div>
      </form>
    </div>
  );
};
export default User;
