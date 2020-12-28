import axios from "axios";
import kuki from "../helpers/cookie";
import REFERENCE from './reference'

// const localBaseUrl = "http://192.168.0.14:8000";
const apiBaseUrl = "https://api.staging.investx.id";


const API = {
  register: (props) => {
    console.log(props);
    return axios.post(apiBaseUrl + `/authentication/register/`, {
      phone_number: props.phone_number,
      password: props.password,
      email: props.email.toLowerCase(),
      full_name: props.full_name,
    });
  },
  login: (props) => {
    console.log(props, "bodynyta");
    const body = {
      email: props.email.toLowerCase(),
      password: props.password,
    };
    return axios.post(apiBaseUrl + `/authentication/password/`, body);
  },
  getProfile: () => {
    return axios.get(apiBaseUrl + `/account/profile/`, {
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  otp: (code) => {
    const body = {
      phone_number: kuki.get("phone_number"),
      code: code,
    };
    return axios.post(apiBaseUrl + `/authentication/verify-phone/`, body, {
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  verifyEmail: (props) => {
    return axios.post(apiBaseUrl + `/authentication/verify-email/`, props);
  },
  resendOtp: () => {
    const body = {
      phone_number: kuki.get("phone_number"),
    };
    return axios.post(apiBaseUrl + `/authentication/resend-otp/`, body, {
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  resendEmail: () => {
    const body = {
      email: kuki.get("email"),
    };
    return axios.post(apiBaseUrl + `/authentication/resend-email/`, body, {
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  ///API LOCATIONS
  getProvince: () => {
    return axios.get(apiBaseUrl + `/reference/province/`, {
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  getRegency: (data) => {
    return axios.get(apiBaseUrl + `/reference/regency/`, {
      params : {province_id : data},
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  getDistrict: (data) => {
    return axios.get(apiBaseUrl + `/reference/district/`, {
      params : {regency_id : data},
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  getVillage: (data) => {
    return axios.get(apiBaseUrl + `/reference/kelurahan/`, {
      params : {district_id : data},
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  getProfileCheck: () => {
    return axios.get(apiBaseUrl + `/account/me/`, {
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  
  postPersonalAccount : (body) =>{
    return axios.post(apiBaseUrl + `/account/personal/`, body,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  postEducation : (body) =>{
    return axios.post(apiBaseUrl + `/account/education/`, body,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  postDocument : (body) =>{
    return axios.post(apiBaseUrl + `/account/document/`, body,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  postBank : (body) =>{
    return axios.post(apiBaseUrl + `/account/bank/`, body,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  postPreference: (body) =>{
    return axios.post(apiBaseUrl + `/account/preference/`, body,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  //REFERENCE FILE
  ...REFERENCE
  
  

};

export default API;
