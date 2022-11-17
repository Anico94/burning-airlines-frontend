import React, {useState} from 'react'
import flightsAPI from '../config/api';


const SearchFlight = function() {
    const airports = ['BNE', 'SYD', 'MEL'] //this will come from the data base
    const initialFormState = {
        origin: '',
        destination: ''
    }

    const [formState, setFormState] = useState(initialFormState)


   function handleChange(event) {
        setFormState({
            ...formState,
            [event.target.name] : event.target.value,
        })
    }

    async function searchFlightAPI(data) {
        const response = await flightsAPI.get('/flights.json')
        console.log ("response is: ", response)
        console.log ("data is: ", data)
        return response.data
    }

    function handleSubmit(event) {
            event.preventDefault()
            searchFlightAPI(event)  
            .then((formState) => setFormState(formState))
            .catch((error) => console.log(error))
    };

    
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
            <p>{formState.data}</p>
        </div>

        </>
    )
}

export default SearchFlight;
