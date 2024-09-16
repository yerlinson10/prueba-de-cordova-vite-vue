import axios from 'axios';
const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=19&longitude=-70.6667&hourly=temperature_2m&timezone=auto'

export const getTemperatura = async () =>{
    return await axios.get(API_URL)
        .then(response => response.data.hourly.temperature_2m[0])
        .catch(error => console.error('Error:', error));
}