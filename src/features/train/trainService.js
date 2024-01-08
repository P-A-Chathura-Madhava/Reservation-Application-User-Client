import axios from "axios";
import { base_url } from "../../utils/base_url";
// import { config } from "../../utils/axiosconfig";

const getTrains = async () => {
  const response = await axios.get(`${base_url}train/alltrains`);
  return response.data;
};

const trainService = {
    getTrains
};

export default trainService;