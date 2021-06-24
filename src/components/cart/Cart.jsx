import React, { Component } from 'react';
import arrowback from "../../images/arrowback.svg";
import helper from '../../helpers/helper';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Button, ClickAwayListener, Fab} from '@material-ui/core';
import logo from "../../images/logo.svg";
import API from "../../api";
import Loading from '../shared/Loading';
import Swal from 'sweetalert2';
import {IoMdTrash, IoIosAddCircleOutline, IoIosRemoveCircleOutline} from 'react-icons/io';
// import moment from 'moment';

class Cart extends Component {
    state={
        lembarSaham: 1,
        data : [],
        qty : '',
        activeButton : '',
        loading : false,
        totalHarga: 0,
        totalHargaCheck: 0,
        dataCheckId: []
    }

    componentDidMount(){
        this.getCart()
        // this.getData('R')
    }

    
    getCart = ()=> {
        this.setState({totalHarga: 0})
        this.setState({loading : true})
        API.getCart().then(res=>{
            if (res.data.results.length === 0) {
                this.props.history.goBack()
            }
            console.log(res.data.results)
            window.localStorage.setItem('cartInvestxLength', res.data.results.length)
            this.setState({
                data : res.data.results,
                loading : false
            });
            
            for(let i = 0; i < res.data.results.length; i++){
                var total = parseInt(res.data.results[i].amount) * res.data.results[i].qty
                this.setState({
                    totalHarga: this.state.totalHarga + total
                })
            }
        }).catch(err=>{
            this.setState({loading : false})
            console.log(err.response)
        })
    }
      
    handleSubmit= (e, id) => {
        console.log(this.state.qty)
        const body ={
            "qty" : this.state.qty
        }
        API.addCartShare(id, body).then(res=>{
            console.log(res)
            this.getCart()
            this.setState({activeButton : null})
        }).catch(err=>{
            console.log(err.response)
        })
        e.preventDefault()
    }

    handleChecked = (id62) => {
        
        if(this.state.dataCheckId.includes(id62)) {
            var cek = this.state.dataCheckId

            for(let i = 0; i < cek.length; i++){
                if(id62 === cek[i]){
                    delete cek[i]
                }
            }

            for(let i = 0; i < this.state.data.length; i++){
                if (this.state.data[i].id62 === id62){
                    this.setState({
                        totalHargaCheck: this.state.totalHargaCheck - (parseInt(this.state.data[i].amount) * this.state.data[i].qty),
                        dataCheckId: cek
                    })
                }
            }
        }
        // Ketika di Check
        else {
            var arr = this.state.dataCheckId;
            arr.push(id62)
            for(let i = 0; i < this.state.data.length; i++){
                if (this.state.data[i].id62 === id62){
                    this.setState({
                        totalHargaCheck: this.state.totalHargaCheck + (parseInt(this.state.data[i].amount) * this.state.data[i].qty),
                        dataCheckId: arr
                    })
                }
            }
        }
    }

    handleDelete = (id) =>{
        Swal.fire({
            title: `Konfirmasi hapus data?`,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: `Delete`,
            showDenyButton: false,
            denyButtonText: `Hapus`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                API.deleteCart(id).then(res =>{
                    console.log(res)
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil di hapus',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.getCart()
                }).catch(err =>{
                    console.log(err.response)
                    Swal.fire({
                        icon: 'error',
                        title: 'Gagal menghapus',
                    })
                })
            } 
        })
    }
      
    render() {
        // console.log(this.state.data)
        const but = {
            fontWeight: "500",
            fontSize: "16px",
            background: "#01579B",
            border: "1px solid #0288d1",
            boxSizing: "border-box",
            borderRadius: "20px",
            color: "#ffff",
            width: "337px",
            height: "48px",
            marginRight: "24px",
        };

        return (
            <div className="all-forms-style cart">
                <Loading onOpen={this.state.loading}/>
                <div className="bg">
                    <div className="bg-round"></div>
                </div>
                <a onClick={() => this.props.history.goBack()}>
                    <Fab className="back-button">
                        <img src={arrowback} alt="" />
                    </Fab>
                </a>
                <div className="logo-invest">
                    <img src={logo} alt="LOGO" />
                </div>
                <p className="title">KERANJANG</p>
                
                <div className="row justify-content-center">
                    <div className="col-6" style={{marginLeft:'60px'}}>
                        {
                            this.state.data.map((res) => (
                                <>
                                    <input className="check-box" type="checkbox" value={res.id62} onChange={() => this.handleChecked(res.id62)}/>

                                    <div className="cart-company box-form-data">
                                        <div className="col">
                                            <div className="row mt-2">
                                                <div className="col-md-2">
                                                    <img
                                                        className="cart-image"
                                                        src="https://placeimg.com/640/480/tech"
                                                        alt="company"
                                                    />
                                                </div>

                                                <div className="col-md-7">
                                                    <div className="col">
                                                        <h5 className="company-name mb-4">{res.fundraise.name}</h5>

                                                        <div className="row mb-2">
                                                            <div className="col-sm-6 text-color-grey">
                                                                <h7>Harga Per Lembar</h7>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <h6>Rp. {helper.idr(Math.round(res.fundraise.price_per_share))}</h6>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="row mb-4">
                                                            <div className="col-sm-6 text-color-grey">
                                                                <h7>Tanggal Berakhir</h7>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <h6>30 September 2021</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 mt-5">
                                                    <h6 style={{paddingLeft: '57px'}}>Jumlah</h6>
                                                    <ClickAwayListener onClickAway={() => this.setState({ activeButton: null })}>
                                                        <form style={{display : 'flex', flexWrap : 'wrap', padding : '0 2px'}} onSubmit={(e)=>this.handleSubmit(e, res.id62)}>
                                                            <h5>
                                                                <IoMdTrash className="pointer" onClick={() => this.handleDelete(res.id62)}/>
                                                                <IoIosRemoveCircleOutline className="pointer"/>
                                                            </h5>

                                                            <input
                                                                className="cart-input"
                                                                type="number" 
                                                                min={res.min_invest_share} 
                                                                defaultValue={res.qty} 
                                                                onChange={(e)=> this.setState({qty : e.target.value})}
                                                                onClick={()=> this.setState({activeButton : res.id62})}
                                                            />

                                                            <h5>
                                                                <IoIosAddCircleOutline className="pointer"/>
                                                            </h5>
                                                            {
                                                                this.state.activeButton === res.id62 ?
                                                                    <Button style={{width : "100px"}} type='submit' color='primary' variant='outlined'>Simpan</Button>
                                                                : null
                                                            }
                                                        </form>
                                                    </ClickAwayListener>      
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 bold">
                                                </div>
                                                <div className="col-md-6 bold">
                                                    <div className="box">
                                                        <div className="child-box">
                                                            <h6>
                                                                Total Harga <span className="company-name" style={{marginLeft: '70px'}}>Rp {helper.idr(Math.round(res.amount * res.qty))}</span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    <br/>

                    {/* SUMMARY */}
                    <div className="col-4" style={{paddingTop: '2px', marginLeft: '90px'}}>
                        <div className="row">
                            <div className="child-company child-form-data">
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <h5 className="child-company-name mb-4">Summary</h5>

                                        <div className="row mb-2">
                                            <div className="col-sm-6 text-color-grey">
                                                <h7>PT. HM Sampoerna</h7>
                                            </div>
                                            <div className="col-sm-6">
                                                <h6>Rp. 100.000</h6>
                                            </div>
                                        </div>
                                        
                                        <div className="row mb-4">
                                            <div className="col-sm-6 text-color-grey">
                                                <h7>KODE_SAHAM</h7>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row mb-2">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-sm-6 bold">
                                                <h6>
                                                    Total
                                                </h6>
                                            </div>
                                            <div className="col-sm-6 bold">
                                                <h6>
                                                    Rp {this.state.totalHargaCheck ? helper.idr(Math.round(this.state.totalHargaCheck)) : helper.idr(Math.round(this.state.totalHarga))}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop:'8px'}}>
                                <Button style={but} type="submit">
                                    INVESTASI SEKARANG
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Cart;