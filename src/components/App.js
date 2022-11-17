import "../App.css";

import Flight from "./Flight";
import Flights from "./Flights";
import SearchFlight from "./SearchFlight";
import Airplane from "./Airplane";
import User from "./User";
import SearchPage from "./SearchPage";
import axios from "axios";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// const api = axios.create({
//   baseURL:
// })

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to='/'>User Login </Link>
      <Link to='/Airplane'>Airplane </Link>
      <Link to='/Flights'>Flights </Link>
      <Link to='/Flight'>Flight </Link>
      <Link to='/SearchPage'>Search </Link>
    </nav>
      <Routes>
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Airplane" element={<Airplane />} />
        <Route path="/Flight" element={<Flight />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
