
import axios from "axios";
import kuki from "../helpers/kuki";

const apiBaseUrl = "https://api.staging.investx.id";

const INVOICE = {
    invoiceDetail: (idInvoice) =>{
        return axios.get(apiBaseUrl + `/transaction/invoice/${idInvoice}/`,{
          headers: { Authorization: `Token ${kuki.get("token")}` },
        });
    },
}

export default INVOICE