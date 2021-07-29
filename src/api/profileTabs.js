
import axios from "axios";
import kuki from "../helpers/kuki";


const PROFILE_TABS = {
    getHistory: (props) =>{
      return axios.get(`/transaction/history/`,{
        params : props, 
        headers: { Authorization: `Token ${kuki.get("token")}` },
      });
    },
    getAccountBalance: (props) =>{
      return axios.get(`/account/balance/`, {
        params: props,
        headers: { Authorization: `Token ${kuki.get('token')}` },
      });
    },
    getCompanies: (props) =>{
      return axios.get(`/company/me/`, {
        params: props,
        headers: { Authorization: `Token ${kuki.get('token')}` },
      });
    },
    deleteCompany: (id) =>{
      return axios.delete(`/company/me/${id}/`, {
        headers: { Authorization: `Token ${kuki.get('token')}` },
      });
    },
    editCompany: (id, data) =>{
      return axios.patch(`/dashboard/company/${id}/edit/`, data, {
        headers: { Authorization: `Token ${kuki.get('token')}` },
      });
    },
}

export default PROFILE_TABS