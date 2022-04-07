import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:5001/clone-99e4a/us-central1/api' // THE API (cloud function) URL [For local testing]
    baseURL: 'https://us-central1-clone-99e4a.cloudfunctions.net/api'
});

export default instance;