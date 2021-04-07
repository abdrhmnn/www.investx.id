
import axios from "axios";
import kuki from "../helpers/kuki";

const apiBaseUrl = "https://api.staging.investx.id";

const INVOICE = {
  invoiceDetail: (idInvoice) =>{
      return axios.get(apiBaseUrl + `/transaction/invoice/${idInvoice}/`,{
        headers: { Authorization: `Token ${kuki.get("token")}` },
      });
  },
  getTransaction: () =>{
    return axios.get(apiBaseUrl + `/transaction/invoice/`,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  //payment fundraising
  investPayment: (id, data) =>{
    return axios.post(apiBaseUrl + `/transaction/invoice/${id}/pay/`, data,{
        headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  //ADD CART
  addCart: (id, data) =>{
    return axios.post(apiBaseUrl + `/transaction/cart/${id}/add/`, data,{
        headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  //PUT SHARE
  addCartShare: (id, data) =>{
    return axios.put(apiBaseUrl + `/transaction/cart/${id}/`, data,{
        headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  //GET CART
  getCart: () =>{
    return axios.get(apiBaseUrl + `/transaction/cart/`,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  //DELLETE CART 
  deleteCart: (id) =>{
    return axios.delete(apiBaseUrl + `/transaction/cart/${id}/`,{
        headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
}

export default INVOICE