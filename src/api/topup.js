
import * as axios from "axios";
import kuki from "../helpers/kuki";


const TOPUP = {
    postTopUp : (body) =>{
        return axios.post("/transaction/topup/", {amount : body.amount},{
            headers: { 
                Authorization : `Token ${kuki.get("token")}`
            }
        })
    },
    getInvoiceTopup : (number) =>{
        return axios.get(`/transaction/invoice/${number}/`,{
            headers: { 
                Authorization : `Token ${kuki.get("token")}`
            }
        })
    },
   
}

export default TOPUP