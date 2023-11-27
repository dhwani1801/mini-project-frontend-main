import axios from "axios";

const endPoint = process.env.REACT_APP_API_ENDPOINT;

const apiConfig = (flag = false) => {
  return { withCredentials: true };
};

export const getApi = (url?: string, params?: any) => {
  return axios.get(`${endPoint}${url}`, {
    params: params,
    ...apiConfig(),
  });
};

export const postApi = (url: string, apiData?: any, flag?: boolean) => {
  return axios.post(`${endPoint}${url}`, apiData, apiConfig(flag));
};

export const putApi = (url : string , apiData? : any , flag? : boolean) => {
  return axios.put(`${endPoint}${url}`);
}