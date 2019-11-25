import axios from 'axios';


const swapi = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

swapi.defaults.headers.get['Content-Type'] = 'application/json';
swapi.defaults.headers.post['Content-Type'] = 'application/json';
swapi.defaults.headers.patch['Content-Type'] = 'application/json';
swapi.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
swapi.defaults.headers.patch['Access-Control-Allow-Origin'] = '*';



export default swapi;