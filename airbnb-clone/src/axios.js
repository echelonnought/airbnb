import axios from 'axios';


const instance = axios.create({
    baseURL: "https://airbnb--backend.herokuapp.com"
});

export default instance;