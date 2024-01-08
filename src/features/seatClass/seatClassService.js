import axios from "axios";
import { base_url } from "../../utils/base_url";
// import { config } from "../../utils/axiosconfig";

const getSeatClasses = async () => {
  const response = await axios.get(`${base_url}train-class/`);
  return response.data;
};

const seatClassService = {
    getSeatClasses
};

export default seatClassService;