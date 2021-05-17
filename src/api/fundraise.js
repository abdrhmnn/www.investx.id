
import * as axios from "axios";
import kuki from "../helpers/kuki";


const FUNDRAISE = {
    fundraise : (props) =>{
        return axios.get(`/investment/fundraise/`,{
            params : props,
            // headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    fundraiseDetail : (id) =>{
        return axios.get(`/investment/fundraise/${id}/`,{
            // params : {props},
            // headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    getRegencyFund: (data) => {
        return axios.get(`/reference/regency/`, {
          params : data,
        //   headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    investFundraise: (id, data) =>{
        return axios.post(`/investment/fundraise/${id}/invest/`, data,{
            headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },
    
}

export default FUNDRAISE