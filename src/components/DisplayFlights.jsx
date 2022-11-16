import React from 'react'


const DisplayFlights = function (props){
    return(
        <div>
            {props.flights.map((flight)=> <p>{`Flight No: ${flight.flightNumber} on ${flight.date} from ${flight.from} to ${flight.to} on plane ${flight.plane}`}</p>)}
        </div>
    )
}

export default DisplayFlights
