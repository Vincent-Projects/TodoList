import axios from "axios";

const axiosConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000, // Because of free tier, better shorter ( kubernetes setup )
  headers: {
    "Content-Type": "application/json",
  },
};

const apiInstance = axios.create(axiosConfig);

export default apiInstance;
