import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-99e4a/us-central1/api' // THE API (cloud function) URL [For local testing]
});

export default instance;