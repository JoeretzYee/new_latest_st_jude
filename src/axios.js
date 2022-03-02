import axios from "axios";

const instance = axios.create({
    baseURL: "st-jude-management-system.herokuapp.com",
    headers: {
        "Content-Type": "application/json",
    },
});
export default instance;
