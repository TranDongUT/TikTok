import axios from "axios";
export const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
  const respone = await httpRequest.get(path, option);
  return respone.data;
};
