import React, { useState } from 'react'
import CreateFlight from './CreateFlight';
import DisplayFlights from './DisplayFlights';



const Flights = function() {

    const [flightNo, setFlightNo] = useState(0);
    const [date, setDate] = useState("");
    const [to, setTo] = useState("");
    const [from, setfrom] = useState("");
    const [plane, setPlane] = useState("")


    return(
        <div>
            <h1>Heading Component Coming Soon</h1>
            <CreateFlight/>
            <DisplayFlights />
        </div>
    )
}

export default Flights
