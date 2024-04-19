import axios from "axios";
import { apiUrl } from "../config";

export function addPattern(pattern?) {
  const postData = async () => {
    try {
      const response = await axios.post(`${apiUrl}/pattern/new`, JSON.stringify({pattern: pattern}));
      console.log(response)
    }
    catch (e) {
      console.log(e);
    }
    finally {
      
    }
  }
  postData();
}