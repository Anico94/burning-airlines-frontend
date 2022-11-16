import '../App.css';

import Flight from './Flight';
import Flights from './Flights';
import SearchPage from './SearchPage';
import Airplane from './Airplane';
import axios from 'axios'

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

    </div>
  );
}

export default App;
