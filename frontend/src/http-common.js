import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:7001/nrm/",
    headers: {
        "Content-type": "application/json"
    }
});