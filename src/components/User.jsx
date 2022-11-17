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
    <div className="col-md-10 mx-auto col-lg-5 mt-5">
        <h1>Logged in</h1>
        <form onSubmit={handleSubmit} className='p-4 p-md-5 border rounded-3 bg-light'>
            <div>
              <label className="floatingInput form-floating mb-3">Email</label>
              <input className="form-control"
                type="text"
                name="email"
                value={state.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="floatingInput form-floating mb-3">Password</label>
              <input className="form-control"
                type="password"
                name="password"
                value={state.password}
                onChange={handleInputChange}
              />
            </div>
  
            <div>
            <button className="w-100 btn btn-lg btn-primary mt-2"> Sign up</button>
            <button className="w-100 btn btn-lg btn-primary mt-2" onClick={handleLogout}>Sign Out</button>
            </div>
            </form>
           
      </div>
  );
  }
export default User;
