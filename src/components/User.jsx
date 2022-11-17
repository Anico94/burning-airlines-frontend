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
  
          <div >
          <button className="w-100 btn btn-lg btn-primary"> Sign up</button>
          </div>
         
        </form>
      )}
    </div>
  );
};


export default User;
