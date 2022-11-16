import React, { useState } from 'react'
import CreateFlight from './CreateFlight';
import DisplayFlights from './DisplayFlights';



const Flights = function() {

    const [flights, setFlights] = useState([]);
    
    const flightInfo = (info) => {
        setFlights([info, ...flights])
    }


    return(
        <div>
            <h1>Heading Component Coming Soon</h1>
            <CreateFlight onSubmit={flightInfo}/>
            <DisplayFlights flights={flights}/>
        </div>
    )
}

export default Flights
