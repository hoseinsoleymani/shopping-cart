import axios from "axios";

export const client = axios.create({
  baseURL: "https://online-store-backend8423.herokuapp.com",
});

export const imageUrl = "https://online-store-backend8423.herokuapp.com"