import axios from "axios";
import { base_url } from "../../utils/base_url";

const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

const register = async (userData) => {
    // console.log(userData);
    const response = await axios.post(`${base_url}user/register`, userData);
    if (response.data) {
        localStorage.setItem("customer", JSON.stringify(response.data));
      return response.data;
    }
  };

  const login = async (userData) => {
    const response = await axios.post(`${base_url}user/login`, userData);
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    return response.data;
  }
  };

const authService = {
    register,
    login
}

export default authService;