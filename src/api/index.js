import axios from "axios";
import kuki from "../helpers/kuki";

import REFERENCE from './reference'
import FUNDRAISE from './fundraise'
import FORM_COMPANY from './formCompany'
import FORM_INVESTOR from './formInvestor'
import TRANSACTION from "./transaction";
import TOPUP from "./topup";

// const localBaseUrl = "http://192.168.0.14:8000";
// const apiBaseUrl = process.env.BASE_URL;
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
  // logout: () => {
  //   const myPromise = new Promise((resolve, reject) => {  
  //     var arrRemoved = [];  
  //     const arrKuki= ["auth","status","token","full_name","email","phone_number","isInvestorComplete"] 
  //     for (const c of arrKuki) {
  //       kuki.remove(c)
  //       arrRemoved.push(c)
  //     }
  //     if(arrRemoved.length === 7) {    
  //         resolve('logout'); 
  //       } else {    
  //         reject('Logout is rejected');  
  //       }
  //   })
  //   return myPromise
  // },
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


  //IMPORTED APIS
  ...FORM_INVESTOR,
  ...FORM_COMPANY,
  ...REFERENCE,
  ...FUNDRAISE,
  ...TRANSACTION,
  ...TOPUP

};

export default API;
