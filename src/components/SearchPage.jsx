import React from 'react'
import SearchHeader from "./SearchHeader"
import SearchFlight from "./SearchFlight"; 
import SearchFlightResult from "./SearchFlightResult";

function SearchPage() {
    return (
        <div>
        <SearchHeader />
        <hr></hr>
        <SearchFlight />
        <hr></hr>
        <SearchFlightResult />
        <hr></hr>
        </div>
    );
}



export default SearchPage;