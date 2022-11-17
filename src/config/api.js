
import axios from 'axios'


const flightsAPI = axios.create({ baseURL:'http://localhost:3000'})



export default flightsAPI;