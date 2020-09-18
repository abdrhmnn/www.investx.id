import axios from "axios";

const localBaseUrl = "http://192.168.0.14:8000";

const apiBaseUrl = "https://api.staging.investx.id";

/*  
    ! /authentication/register (register user)
    ? {
    ? "phone_number": "628581110",
    ? "password": "password",
    ? "email": "test@email.app",
    ? "full_name": "my_full_name",
    ? }
*/
axios.defaults.baseURL = apiBaseUrl;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const register = async ({ phoneNumber, password, email, fullName }) => {
  axios
    .post("/authentication/register", {
      phone_number: phoneNumber,
      password: password,
      email: email,
      full_name: fullName,
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  //   return response;
};
