
import axios from "axios";
import kuki from "../helpers/cookie";

const apiBaseUrl = "https://api.staging.investx.id";


const FUNDRAISE = {
    refPostFile : (body) =>{
        return axios.post(apiBaseUrl + `/reference/file/`, body,{
            headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },
    
}

export default FUNDRAISE