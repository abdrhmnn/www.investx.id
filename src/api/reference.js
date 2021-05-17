
import * as axios from "axios";
import kuki from "../helpers/kuki";


const REFERENCE = {
    refPostFile : (body) =>{
        return axios.post(`/reference/file/`, body,{
            headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },
    
    refInvPersonal: () =>{
        return axios.get(`/reference/investor/personal/`,{
        //   params : props, 
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    refInvEducation: () =>{
        return axios.get(`/reference/investor/education/`,{
        //   params : props, 
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    refInvPreference: () =>{
        return axios.get(`/reference/investor/preference/`,{
        //   params : props, 
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    refTags: () =>{
        return axios.get(`/reference/tags/`,{
        //   params : props, 
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    refCompanyNonFinancial: () =>{
        return axios.get(`/reference/company/nonfinancial/`,{
        //   params : props, 
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    refBanks: (props) =>{
        return axios.get(`/reference/bank/`,{
          params : props, 
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },

    refCompanyGeneral: () =>{
      return axios.get(`/reference/company/general/`,{
        // params : props, 
        headers: { Authorization: `Token ${kuki.get("token")}` },
      });
    },

    refCheckCompanyMe: () =>{
      return axios.get(`/company/me/`,{
        // params : props, 
        headers: { Authorization: `Token ${kuki.get("token")}` },
      });
    },

    refRecentInvest: (props) =>{
      return axios.get(`/investment/recent-invest/`,{
        params : props, 
        // headers: { Authorization: `Token ${kuki.get("token")}` },
      });
    },

}

export default REFERENCE