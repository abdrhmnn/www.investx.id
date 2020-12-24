// import API from "../api";
// import Loading from "../components/shared/Loading";
// import Swal from "sweetalert2";


// const checkStatusProfile = (key, nextLink)=>{
//     console.log(key)
//     console.log(nextLink)
//     return API.getProfileCheck().then(res=>{
//         var keyCheck = res.data.profile[`${key}`]
//         if (keyCheck) {
//             this.props.history.push(nextLink)
//         }
//     }).catch(()=>{
//         Swal.fire({
//           icon: 'error',
//           title: 'Error 500',
//           showConfirmButton: true,
//         }).then((result)=> result.isConfirmed ? this.props.history.push('/') : null )
//     })
// }

// export default checkStatusProfile