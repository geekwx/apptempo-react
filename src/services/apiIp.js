import axios from 'axios';

const apiIp = axios.create({
    baseURL: 'http://httpbin.org'
});


export default apiIp;