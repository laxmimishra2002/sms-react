import axios from "axios";

export default axios.create({
  baseURL: "http://172.18.0.3:8080/",
  headers: {
    "Content-type": "application/json"
  }
});