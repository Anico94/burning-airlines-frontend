import React from 'react'

const AIRPORTS = ['BNE', 'SYD', 'MEL'] //this will come from the data base
const SearchFlight = function() {
    return(
    <>
    <div className='from'>
        <label htmlFor="from">
        Depart From:
        <select>
            <option/>
                {AIRPORTS.map((airport) => {
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
        <select>
            <option/>
                {AIRPORTS.map((airport) => {
                    return(
                    <option key={airport} value ={airport}>
                    {airport}
                    </option>
                    );
                })};
        </select>
        </label>
    </div>
    </>
    )
}

export default SearchFlight
