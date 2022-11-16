import "../App.css";

import Flight from "./Flight";
import Flights from "./Flights";
import SearchFlight from "./SearchFlight";
import Airplane from "./Airplane";
import User from "./User";
import SearchPage from './SearchPage';
import Airplane from './Airplane';
import axios from 'axios';

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
<<<<<<< HEAD
      <User />
      <hr></hr>
=======
>>>>>>> 14b38fbe150262d42f9c8c20a64be513bfd4f106
    </div>
  );
}

export default App;
