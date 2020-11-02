import axios from "axios";
import kuki from '../helpers/cookie'

const localBaseUrl = "http://192.168.0.14:8000";
const apiBaseUrl = "https://api.staging.investx.id";

// axios.defaults.baseURL = apiBaseUrl;

const API = {
  register: (props) => {
    console.log(props);
    return axios.post(apiBaseUrl + `/authentication/register/`, {
        phone_number: props.phone_number,
        password: props.password,
        email: props.email.toLowerCase(),
        full_name: props.full_name,
      })
  },
  login: (props) => {
    console.log(props, 'bodynyta');
    const body = {
      email : props.email.toLowerCase(),
      password : props.password
    }
    return axios.post(apiBaseUrl + `/authentication/password/`, body)
  },
  getProfile: () => {
    return axios.get(apiBaseUrl + `/file/account/profile/`, {headers : {Authorization : `Token ${kuki.get('token')}`}})
  },
  otp : (code) =>{
    const body = {
      "phone_number": kuki.get('phone_number'),
      "code": code
    }
    return axios.post(apiBaseUrl + `/authentication/verify-phone/`, body, {headers : {Authorization : `Token ${kuki.get('token')}`}})
  }
};

export default API;
