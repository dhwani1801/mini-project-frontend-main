import axios from "axios";

const endPoint = process.env.REACT_APP_API_ENDPOINT;

const apiConfig = (flag = false) => {
  return { withCredentials: true };
};

export const postApi = (url: string, apiData?: any, flag?: boolean) => {
  return axios.post(`${endPoint}${url}`, apiData, apiConfig(flag));
};

