
import axios from "axios";
import kuki from "../helpers/cookie";

const apiBaseUrl = "https://api.staging.investx.id";


const FUNDRAISE = {
    fundraise : (props) =>{
        return axios.get(apiBaseUrl + `/investment/fundraise/`,{
            params : {props},
            headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },
    
}

export default FUNDRAISE