import React, { useState } from 'react'
import CurrentFlight from './CurrentFlight'
import SeatingPlan from './SeatingPlan'

const Flight = function() {

    const [seat, setSeat] = useState('')

    return(
        <div>
            <h1>Heading Coming Soon</h1>
            <CurrentFlight />
            <SeatingPlan/>
        </div>
    )
}

export default Flight
