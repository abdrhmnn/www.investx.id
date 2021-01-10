
import axios from "axios";
import kuki from "../helpers/cookie";

const apiBaseUrl = "https://api.staging.investx.id";


const FORM_COMPANY = {
    //COMPANY FORM
  postCompanyGeneral: (body) =>{
    return axios.post(apiBaseUrl + `/company/general/`, body,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  postCompanyFinancial: (body) =>{
    return axios.post(apiBaseUrl + `/company/financial/`, body,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  postCompanyNonFinancial: (body) =>{
    return axios.post(apiBaseUrl + `/company/nonfinancial/`, body,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  postCompanyMedia: (body) =>{
    return axios.post(apiBaseUrl + `/company/media/`, body,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

}

export default FORM_COMPANY