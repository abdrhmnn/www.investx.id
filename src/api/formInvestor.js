
import axios from "axios";
import kuki from "../helpers/kuki";

const apiBaseUrl = "https://api.staging.investx.id";


const FORM_INVESTOR = {
    //INVESTOR FORM
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
}

export default FORM_INVESTOR