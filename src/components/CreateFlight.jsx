import React from 'react'

const AIRPORTS = ['BNE', 'SYD', 'MEL'];
const PLANES = ['747', '737','Airbus'];

const CreateFlight = function(){
    return(
        <div>
        <p>This will display the create flight form</p>
        <form>
            <label htmlFor="number">
                Flight Number:
                <input type="number" placeholder="Flight Number"/>
            </label>
            <label htmlFor="date">
                Date:
                <input type="date" />
            </label>
            <label htmlFor="from">
                Depart From:
                <select>
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
                <select>
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
                <select>
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