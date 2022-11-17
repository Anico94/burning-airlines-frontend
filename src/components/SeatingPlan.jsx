import axios from 'axios';
import React, { useEffect, useState } from 'react'


const SeatingPlan = () => {

    const [planeRows, setPlaneRows ] = useState(0);
    const [planeColumns, setPlaneColumns ] = useState(0);
    const [reservedSeats, setReservedSeats] = useState([]);
    const [current, setCurrent] = useState('')

    const flightsURL = `http://localhost:3000/flights.json`

    useEffect(() => {
        axios(flightsURL).then((response) => {
            setPlaneRows(response.data[0].airplane.rows)
            setPlaneColumns(response.data[0].airplane.columns)
            setReservedSeats(response.data[0].reservations)
        })
    },[])

    const listReservedSeats = (reservedSeats) => {
        const reserved = [];
        for (let i = 0; i < reservedSeats.length; i++) {
            const element = reservedSeats[i];
            reserved.push(`${element.row}${element.column}`)
        }
        return reserved
    }

    const generateSeats = (numberOfRows,numberOfColumns) => {
        let columns = createLetters(numberOfColumns);
        let rows = createNumbers(numberOfRows);
    
        let seatOptions = []
    
        for (let number = 0; number < rows.length; number++) {
            const seatN = rows[number];
            const rowList = []
            for (let letter = 0; letter < columns.length; letter++) {
                const seatL = columns[letter];
                rowList.push({seatNumber:seatN+seatL,code:`${number+1}${letter+1}`,reserved: false})
            }
            seatOptions.push(rowList);
        }
        return seatOptions
    }

    const createLetters = (number) => {
        const alpha = Array.from(Array(number)).map((e, i) => i + 65);
        const alphabet = alpha.map((x) => String.fromCharCode(x));
        return alphabet
    }
    
    const createNumbers = (number) => {
        const numbers = Array.from({length: number}, (_, i) => i + 1)
        return numbers
    }

    const planeSeats = generateSeats(planeRows,planeColumns)

    const takenSeats = listReservedSeats(reservedSeats);

    const seatTaken = (bool, seat) =>{
        if(bool) {
            return 'seat-taken'
        } else if (seat === current) {
            return 'seat-taken'
        } else { 
            return 'seat-buttons'
        }
    }

    const _handleBooking = (e) => {
        console.log(e.target.value)
        setCurrent(e.target.value)
    }

    return (

        <div className='plane-carpet'>
            {planeSeats.map((row) => {
                        return(
                            <div className='row-buttons'>
                                {row.map((seat) => {
                                    return(
                                        <button value={seat.code} onClick={_handleBooking} className={seatTaken(takenSeats.includes(seat.code), seat.code)}>{seat.seatNumber}</button>
                                        )
                                })}
                            </div>
                        )
                    })}
        </div>
    )
}

export default SeatingPlan