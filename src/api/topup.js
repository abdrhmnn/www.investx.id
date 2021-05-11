
import Axios from "axios";
import kuki from "../helpers/kuki";

var apiBaseUrl = "https://api.staging.investx.id";


const TOPUP = {
    postTopUp : (body) =>{
        return Axios.post( apiBaseUrl+"/transaction/topup/", {amount : body.amount},{
            headers: { 
                Authorization : `Token ${kuki.get("token")}`
            }
        })
    },
    getInvoiceTopup : (number) =>{
        return Axios.get( apiBaseUrl+`/transaction/invoice/${number}/`,{
            headers: { 
                Authorization : `Token ${kuki.get("token")}`
            }
        })
    },
   
}

export default TOPUP