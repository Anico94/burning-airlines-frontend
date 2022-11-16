import React, { useState } from "react";

const Plane = function () {
  const [state, setState] = useState({
    plane: "",
    columns: "",
    rows: "",
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
    console.log(state);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Plane</label>
          <input
            type="text"
            name="plane"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Columns</label>
          <input
            type="number"
            name="colums"
            value={state.colums}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Rows</label>
          <input
            type="number"
            name="rows"
            value={state.rows}
            onChange={handleInputChange}
          />
          <button type="submit">Create plane</button>
        </div>
      </form>
    </div>
  );
};

export default Plane;
