
import * as axios from "axios";
import kuki from "../helpers/kuki";


const FORM_COMPANY = {
    //COMPANY FORM
  postCompanyGeneral: (body) =>{
    return axios.post(`/company/general/`, body,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  getCompanyDetail: (id) =>{
    return axios.get(`/company/me/${id}/`,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  postCompanyFinancial: (body) =>{
    return axios.post(`/company/financial/`, body,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  postCompanyNonFinancial: (body) =>{
    return axios.post(`/company/nonfinancial/`, body,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

  postCompanyMedia: (body) =>{
    return axios.post(`/company/media/`, body,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },

}

export default FORM_COMPANY