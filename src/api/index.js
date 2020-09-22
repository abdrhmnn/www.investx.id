import axios from "axios";

const localBaseUrl = "http://192.168.0.14:8000";
const apiBaseUrl = "https://api.staging.investx.id";

// axios.defaults.baseURL = apiBaseUrl;

const API = {
  register: async (props, callback) => {
    console.log(props);
    return axios
      .post(apiBaseUrl + `/authentication/register/`, {
        full_name: props.full_name,
        phone_number: props.phone,
        password: props.password,
        email: props.email,
      })
      .then((data) => {
        console.log(data);
        callback(data);
        return data;
      })
      .catch((err) => {
        console.log(err.response);
        callback(err.message);
        return err.response;
      });
  },
  string: "lalala",
};

export default API;
