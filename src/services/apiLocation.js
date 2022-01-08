import axios from 'axios';

const apiLocation = axios.create({
    baseURL: 'http://www.geoplugin.net'
});


export default apiLocation;