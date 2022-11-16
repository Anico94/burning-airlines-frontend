import "../App.css";

import Flight from "./Flight";
import Flights from "./Flights";
import SearchFlight from "./SearchFlight";
import Airplane from "./Airplane";
import User from "./User";

function App() {
  return (
    <div>
      <Airplane />
      <hr></hr>
      <Flights />
      <hr></hr>
      <Flight />
      <hr></hr>
      <SearchFlight />
      <hr></hr>
      <User />
      <hr></hr>
    </div>
  );
}

export default App;
