
import * as axios from "axios";
import kuki from "../helpers/kuki";


const PROFILE_TABS = {
    getHistory: (props) =>{
      return axios.get(`/transaction/history/`,{
        params : props, 
        headers: { Authorization: `Token ${kuki.get("token")}` },
      });
    },

}

export default PROFILE_TABS