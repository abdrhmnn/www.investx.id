
import axios from "axios";
import kuki from "../helpers/cookie";

const apiBaseUrl = "https://api.staging.investx.id";


const FUNDRAISE = {
    fundraise : (props) =>{
        return axios.get(apiBaseUrl + `/investment/fundraise/`,{
            params : props,
            headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    fundraiseDetail : (id) =>{
        return axios.get(apiBaseUrl + `/investment/fundraise/${id}/`,{
            // params : {props},
            headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    getRegencyFund: (data) => {
        return axios.get(apiBaseUrl + `/reference/regency/`, {
          params : data,
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },
    
}

export default FUNDRAISE