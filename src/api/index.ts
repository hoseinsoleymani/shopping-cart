import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:1337",
});

export const imageUrl = "http://localhost:1337"