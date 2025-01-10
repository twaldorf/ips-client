import axios from "axios";
import { apiUrl } from "../../config";

export const apiInstance = axios.create({
  withCredentials: true,
  baseURL: apiUrl,
});