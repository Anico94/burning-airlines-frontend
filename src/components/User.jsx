import React, { useState } from "react";
import { useIdLoggedIn, login, logout } from "../hooks";

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

  const handleLogout = (event) => {
    event.preventDefault();
    logout(state);
  };

  return (
    <div className="col-md-10 mx-auto col-lg-5">
      <div className="p-4 p-md-5 border rounded-3 bg-light">
        <h1>Logged in</h1>
        <form onSubmit={handleSubmit} className='p-4 p-md-5 border rounded-3 bg-light'>
            <div>
              <label className="form-floating mb-3">Email</label>
              <input
                type="text"
                name="email"
                value={state.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="form-floating mb-3">Password</label>
              <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleInputChange}
              />
            </div>
  
            <div>
            <button className="w-100 btn btn-lg btn-primary"> Sign up</button>
            <button onClick={handleLogout}>Sign Out</button>
            </div>
            </form>
            </div>
      </div>
  );
  }
export default User;
