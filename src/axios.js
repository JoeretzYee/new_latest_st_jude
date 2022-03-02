import axios from "axios";

// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";



const instance = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json",
       
    },
});
export default instance;
