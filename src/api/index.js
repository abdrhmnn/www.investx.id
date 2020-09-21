import axios from "axios";

const localBaseUrl = "http://192.168.0.14:8000";
const apiBaseUrl = "https://api.staging.investx.id";

// axios.defaults.baseURL = apiBaseUrl;

const API = {
  register : async (props) => {
      console.log(props)
      return axios.post(apiBaseUrl +`/authentication/register`, {
          full_name: props.full_name,
          phone_number: props.phone,
          password: props.password,
          email: props.email,
      },{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      }).then(data =>{
        console.log(data)
        return data
      }).catch(err =>{
        console.log(err.response)
        return err.response
      });
  },
  string : 'lalala'
}


export default API