import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const api = axios.create({
  baseURL: publicRuntimeConfig.API_URL || "http://localhost:3000/api",
});
