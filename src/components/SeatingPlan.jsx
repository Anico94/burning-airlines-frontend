import React from 'react'

const ROW = 10;
const COLUMN = 4;


const SeatingPlan = () => {

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

    const planeSeats = generateSeats(ROW,COLUMN)

    const seatTaken = (bool) =>{
        if(bool) return 'seat-taken'
        else return 'seat-buttons'
    }

    const _handleBooking = (e) => {
        console.log(e.target.value)
    }

    return (

        <div className='plane-carpet'>
            {planeSeats.map((row) => {
                        return(
                            <div className='row-buttons'>
                                {row.map((seat) => {
                                    return(
                                        <button value={seat.code} onClick={_handleBooking} className={seatTaken(seat.reserved)}>{seat.seatNumber}</button>
                                        )
                                })}
                            </div>
                        )
                    })}
        </div>
    )
}

export default SeatingPlan