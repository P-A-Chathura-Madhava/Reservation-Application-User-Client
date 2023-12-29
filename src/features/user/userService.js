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

  const forgotPassToken = async (data) => {
    const response = await axios.post(
      `${base_url}user/forgot-password-token`,
      data
    );
    if (response.data) {
      return response.data;
    }
  };

  const resetPass = async (data) => {
    const response = await axios.put(
      `${base_url}user/reset-password/${data.token}`,
      { password: data?.password }
    );
    if (response.data) {
      return response.data;
    }
  };

  const reserveATrain = async (reservationData) => {
    // console.log("reserving a train function");
    // console.log(reservationData);
    // console.log(data);
    // const ticketInfo = {
    //   firstName: reservationData.firstName,
    //   lastName: reservationData.lastName,
    //   address: reservationData.address,
    //   city: reservationData.city,
    //   state: reservationData.state,
    //   pincode: reservationData.pincode,
    // }
    // const reservedTrain = {
    //   train: "65869bfd6451f84fe20bdb75",
    //   trainClass: "657fe5c1504bfc2c8702479c",
    //   seat: reservationData.passengers,
    // }
    // const createdReservationData = {
    //   ticketInfo: ticketInfo,
    //   reservedTrain: reservedTrain
    // }
    // console.log(createdReservationData);
    // console.log(reservationData);
    // console.log("Working");
    const newData = {
      ticketInfo: {
        firstName: 'Chathura',
        lastName: 'Madhava',
        address: 'Bandaragama',
        city: 'Kalutara',
        state: 'Western Province',
        pincode: 12530
      },
      reservedTrain: {
        train: '657e9a10fe6b64ca9582ee24',
        trainClass: '657fe5c1504bfc2c8702479c',
        seat: 4
      }
    }
    // console.log(newData);
    const response = await axios.post(`${base_url}user/reserve-a-train`, newData, config);
    if (response.data) {
      return response.data;
    }
  };

const authService = {
    register,
    login,
    forgotPassToken,
    resetPass,
    reserveATrain
}

export default authService;