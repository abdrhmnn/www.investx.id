
import axios from "axios";
import kuki from "../helpers/cookie";

const apiBaseUrl = "https://api.staging.investx.id";


const REFERENCE = {
    refPostFile : (body) =>{
        return axios.post(apiBaseUrl + `/reference/file/`, body,{
            headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },
    
    refInvPersonal: () =>{
        return axios.get(apiBaseUrl + `/reference/investor/personal/`,{
        //   params : props, 
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    refInvEducation: () =>{
        return axios.get(apiBaseUrl + `/reference/investor/education/`,{
        //   params : props, 
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    refInvPreference: () =>{
        return axios.get(apiBaseUrl + `/reference/investor/preference/`,{
        //   params : props, 
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    refTags: () =>{
        return axios.get(apiBaseUrl + `/reference/tags/`,{
        //   params : props, 
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    refCompanyNonFinancial: () =>{
        return axios.get(apiBaseUrl + `/reference/company/nonfinancial/`,{
        //   params : props, 
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    refBanks: (props) =>{
        return axios.get(apiBaseUrl + `/reference/bank/`,{
          params : props, 
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    refCompanyGeneral: () =>{
      return axios.get(apiBaseUrl + `/reference/company/general/`,{
        // params : props, 
        headers: { Authorization: `Token ${kuki.get("token")}` },
      });
    },

    refCheckCompanyMe: () =>{
      return axios.get(apiBaseUrl + `/company/me/`,{
        // params : props, 
        headers: { Authorization: `Token ${kuki.get("token")}` },
      });
    },

}

export default REFERENCE