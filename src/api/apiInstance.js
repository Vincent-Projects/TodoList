import axios from "axios";

const axiosConfig = {
  baseURL: "https://todolist-api-public-demo.herokuapp.com",
  timeout: 10000, // Because of free tier, better shorter ( kubernetes setup )
  headers: {
    "Content-Type": "application/json",
  },
};

const apiInstance = axios.create(axiosConfig);

console.log(apiInstance);

export default apiInstance;
