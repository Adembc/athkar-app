import axios from "axios";
const baseURL = "https://adhkar-app.herokuapp.com/api";
export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const api = axios.create({
  baseURL,
  headers,
});

export const getData = (url, filter) => api.get(`${baseURL}${url}${filter}`);

export default api;
