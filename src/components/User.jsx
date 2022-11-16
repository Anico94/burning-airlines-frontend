import React, { useState } from "react";
import { useIdLoggedIn, login } from "../hooks";

const User = function () {
  const isLoggedIn = useIdLoggedIn();

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
    login(state);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Logged in</h1>
      ) : (
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
          </div>
        </form>
      )}
    </div>
  );
};
export default User;
