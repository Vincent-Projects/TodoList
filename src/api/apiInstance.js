import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000, // Because of free tier, better shorter ( kubernetes setup )
  headers: {
    "Content-Type": "application/json"
  }
});

export default apiInstance;