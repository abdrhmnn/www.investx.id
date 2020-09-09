import React, { Component } from 'react';
import bankRumah from '../../images/bankRumah.svg'
class ModalError extends Component {
render() {
// const { 
//     onClose = () => {}, 
//     image = errorImage,
//     title = 'Mohon Maaf', 
//     description = 'Data yang anda masukan salah', 
//     onAction = () => {},
// } = this.props;
return (
<div className="modal-error-container">
   <div className="modal-error-body" style={{maxWidth: "500px"}}>
      <i className="fas fa-times" onClick={this.props.onClose}></i>
      <div className="modal-error-detail">
         <img src={bankRumah} style={{width: "auto", height:"60px"}} alt="" className="error-image" />
         <h5 className="error-title" style={{marginTop: "10px", fontSize: "15pt", marginBottom:"15px"}}>Tambah Bank</h5>
         <div>
         <select class="form-control" id="sel1">
            <option>Nama Bank</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
         </select>
         <br />
         <input type="text" class="form-control" id="pwd" placeholder="Kantor Cabang" />              
         <br />
         <input type="text" class="form-control" id="pwd" placeholder="Nama Pemilik Rekening" />        
         <br />
         <input type="text" class="form-control" id="pwd" placeholder="No Rekening" />              
         <br />
         <button style={{border: "none", background:"#01579B", color: "white", borderRadius:"5px", width:"150px", fontSize:"10pt"}}>SAVE</button>
        </div>
      </div>
   </div>
</div>
);
}
}
export default ModalError;