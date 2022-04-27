import axios from "axios";
const axiosHttpCommon = axios.create({
                              baseURL: "http://localhost:3001",
                              headers: {
                                "Content-type": "application/json"
                              }
                            });
export default axiosHttpCommon;