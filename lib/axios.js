import axios from "axios";
import https from "https";

const axiosInstance = axios.create({
  baseURL: "https://test.smartcardgenerator.net/api/",
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

export default axiosInstance;
