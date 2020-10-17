import axios from "axios";
import https from "https";
const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

instance.interceptors.request.use(
    req => {
        // if (req.method == "post") {
        //   req.headers["Content-Type"] = "application/json";
        // }
        return req;
    },
    error => Promise.reject(error)
);
// Set the AUTH token for any request
// instance.interceptors.request.use(function(config) {
//     const token = localStorage.getItem("token");
//     if (token) {
//         config.headers.Authorization = token;
//     }
//     return config;
// });

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // console.log('!error.response.data');
        // console.log(!error.response.data);
        // if (error.response.status === 401 && !error.response.data) {
        //     localStorage.removeItem("userInfo");
        //     localStorage.removeItem("token");
        // } else {
        //     return Promise.reject(error);
        // }
        return Promise.reject(error);
    }
);

export default instance;
