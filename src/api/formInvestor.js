
import * as axios from "axios";
import kuki from "../helpers/kuki";


const FORM_INVESTOR = {
    //INVESTOR FORM
    getProfileCheck: () => {
        return axios.get(`/account/me/`, {
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },
      
    postPersonalAccount : (body) =>{
        return axios.post(`/account/personal/`, body,{
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },
    
    postEducation : (body) =>{
        return axios.post(`/account/education/`, body,{
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },
    
    postDocument : (body) =>{
        return axios.post(`/account/document/`, body,{
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },
    
    postBank : (body) =>{
        return axios.post(`/account/bank/`, body,{
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },
    
    postPreference: (body) =>{
        return axios.post(`/account/preference/`, body,{
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },
}

export default FORM_INVESTOR