import * as axios from "axios";
import kuki from "../helpers/kuki";


const INVOICE = {
  invoiceDetail: (idInvoice) =>{
      return axios.get(`/transaction/invoice/${idInvoice}/`,{
        headers: { Authorization: `Token ${kuki.get("token")}` },
      });
  },
  getTransaction: () =>{
    return axios.get(`/transaction/invoice/`,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  //payment fundraising
  investPayment: (id, data) =>{
    return axios.post(`/transaction/invoice/${id}/pay/`, data,{
        headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  //ADD CART
  addCart: (id, data) =>{
    return axios.post(`/transaction/cart/${id}/add/`, data,{
        headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  //PUT SHARE
  addCartShare: (id, data) =>{
    return axios.put(`/transaction/cart/${id}/`, data,{
        headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  //GET CART
  getCart: () =>{
    return axios.get(`/transaction/cart/`,{
      headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
  //DELLETE CART 
  deleteCart: (id) =>{
    return axios.delete(`/transaction/cart/${id}/`,{
        headers: { Authorization: `Token ${kuki.get("token")}` },
    });
  },
}

export default INVOICE