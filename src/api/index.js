import axios from "axios";
import kuki from '../helpers/cookie'

const localBaseUrl = "http://192.168.0.14:8000";
const apiBaseUrl = "https://api.staging.investx.id";

// axios.defaults.baseURL = apiBaseUrl;

const API = {
  register: (props) => {
    console.log(props);
    return axios.post(apiBaseUrl + `/authentication/register/`, {
        full_name: props.full_name,
        phone_number: props.phone,
        password: props.password,
        email: props.email,
      })
  },
  login: (body) => {
    console.log(body, 'bodynyta');
    return axios.post(apiBaseUrl + `/authentication/password/`, body)
  },
  getProfile: () => {
    return axios.get(apiBaseUrl + `/file/account/profile/`, {headers : {Authorization : `Token ${kuki.get('token')}`}})
  },
};

export default API;
