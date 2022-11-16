import "../App.css";

import Flight from "./Flight";
import Flights from "./Flights";
import SearchFlight from "./SearchFlight";
import Airplane from "./Airplane";
import User from "./User";
import SearchPage from "./SearchPage";
import axios from "axios";

// const api = axios.create({
//   baseURL:
// })

function App() {
  return (
    <div>
      <Airplane />
      <hr></hr>
      <Flights />
      <hr></hr>
      <Flight />
      <hr></hr>
      <SearchPage />
      <hr></hr>
      <User />
      <hr></hr>
    </div>
  );
}

export default App;
