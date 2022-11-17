import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import flightsAPI from '../config/api';
import axios from 'axios';

const SearchFlight = function() {
    const airports = ['BNE', 'SYD', 'MEL'] //this will come from the data base
    const initialFormState = {
        origin: '',
        destination: ''
    }

    const [formState, setFormState] = useState(initialFormState)
    const [flights, setFlights] = useState([])

function handleChange(event) {
        setFormState({
            ...formState,
            [event.target.name] : event.target.value,
        })
    }

    async function searchFlightAPI(data) {
        const response = await flightsAPI.get('/flights.json')
        console.log ("response is: ", response.data)
        console.log ("data is: ", data)
        return response.data
    }

    function handleSubmit(event) {
            event.preventDefault()
            searchFlightAPI(event)  
            .then((responseData) => setFlights(responseData))
            .catch((error) => console.log(error))
    };

    // useEffect(() => {
    //     axios(`http://localhost:3000/flights.json`).then((event) => {
    //         setFormState(event.target.name);
    //     });
    // }, [ ]);

    
    return(
        <>
        <div className='from'>
            <label htmlFor="from">
            Depart From:
            <select name='origin' value={formState.origin} onChange={handleChange}>
                <option/>
                    {airports.map((airport) => {
                        return(
                        <option key={airport} value ={airport}>
                        {airport}
                        </option>
                        );
                    })};
            </select>
            </label>
        </div>

        <div className='to'>
            <label htmlFor="to">
            Destination:
            <select name='destination' value={formState.destination} onChange={handleChange}>
                <option/>
                    {airports.map((airport) => {
                        return(
                        <option key={airport} value ={airport}>
                        {airport}
                        </option>
                        );
                    })};
            </select>
            </label>
        </div>

        <div className='submit'>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        
        <div>
            <h3>Search Results are:</h3>
            <h4>Flights ID | Origin | Destination | Date</h4>
            {flights.map((flight) => {

                return <p><Link to={`/Flights/${flight.id}`}>{flight.flight_number}</Link>, {flight.origin}, {flight.destination}, {flight.date}</p>
            })}
        </div>

        </>
    )
}

export default SearchFlight;
