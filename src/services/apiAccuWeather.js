import axios from 'axios';

const apiAccuWeather = axios.create({
    baseURL: 'http://dataservice.accuweather.com'
});


export default apiAccuWeather;




