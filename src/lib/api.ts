import { API_BASE_URL } from "../config/enviroments";

export const getHello = async () => {
  const response = await fetch(API_BASE_URL + "hello/Gorinya");
  return await response.json();
};
