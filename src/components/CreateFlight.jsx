import React, { useState } from 'react'

const AIRPORTS = ['BNE', 'SYD', 'MEL','ADL']; // this will come from the data base
const PLANES = ['747', '737','A380']; // this will come from the data base

const CreateFlight = function(props){

    const [flightNumber, setFlightNumber] = useState(0)
    const [date, setDate] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [plane, setPlane] = useState("");

    const _handleFlightNumber = (e) => {
        setFlightNumber(e.target.value);
    }

    const _handleDate = (e) => {
        setDate(e.target.value);
    }

    const _handleFrom = (e) => {
        setFrom(e.target.value);
    }

    const _handleTo = (e) => {
        setTo(e.target.value);
    }

    const _handlePlane = (e) => {
        setPlane(e.target.value);
    }

    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({flightNumber: flightNumber, date: date, from: from, to: to, plane: plane})
    }

    return(
        <div>
        <p>This will display the create flight form</p>
        <form onSubmit={_handleSubmit}>
            <label htmlFor="number">
                Flight Number:
                <input onChange={_handleFlightNumber} type="number" placeholder="Flight Number"/>
            </label>
            <label htmlFor="date">
                Date:
                <input onChange={_handleDate} type="date" />
            </label>
            <label htmlFor="from">
                Depart From:
                <select onChange={_handleFrom}>
                    <option />
                    {AIRPORTS.map((airport) => {
                        return(
                            <option key={airport} value={airport}>
                                {airport}
                            </option>
                        );
                    })};
                </select>
            </label>
            <label htmlFor="to">
                Arrive at:
                <select onChange={_handleTo}>
                    <option />
                    {AIRPORTS.map((airport) => {
                        return(
                            <option key={airport} value={airport}>
                                {airport}
                            </option>
                        );
                    })};
                </select>
            </label>
            <label htmlFor="plane">
                Plane:
                <select onChange={_handlePlane}>
                    <option />
                    {PLANES.map((plane) => {
                        return(
                            <option key={plane} value={plane}>
                                {plane}
                            </option>
                        );
                    })};
                </select>
            </label>

            <input type="submit" value="Create Flight" />
        
            </form>
        </div>
    )
}

export default CreateFlight 