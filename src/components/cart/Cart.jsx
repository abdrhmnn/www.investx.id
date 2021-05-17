import React, { Component } from 'react';
import arrowback from "../../images/arrowback.svg";
import helper from '../../helpers/helper';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Button, ClickAwayListener, Fab} from '@material-ui/core';
import logo from "../../images/logo.svg";
import API from "../../api";
import Loading from '../shared/Loading';
import Swal from 'sweetalert2';





class Cart extends Component {
    state={
        data : [],
        qty : '',
        activeButton : '',
        loaading : false
    }

    componentDidMount(){
        this.getCart()
        // this.getData('R')
    }

    
    getCart = ()=>{
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
            })
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

    handleDelete = (id) =>{
        Swal.fire({
            title: `Konfirmasi hapus data?`,
            showConfirmButton: false,
            showCancelButton: true,
            // confirmButtonText: `Delete`,
            showDenyButton: true,
            denyButtonText: `Hapus`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isDenied) {
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
        console.log(this.state.data2)
        return (
            <div className="all-forms-style invoice">
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

                {
                    this.state.data.map((res,i)=>(
                        <div className='box-form-data' key={i}>
                            {/* <h6 className="info"><span>Status</span>:&nbsp;<i>{res.status}</i>  </h6>
                            <h6 className="info"><span>Nomor invoice</span>:&nbsp;{res.number} </h6>
                            <h6 className="info"><span>Daftar item :</span></h6> */}
                            <div className="table-wrap">
                                <Table>
                                    <Thead>
                                        <Tr>
                                        <Th>Nama</Th>
                                        <Th>Qty</Th>
                                        <Th>Action</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                    <Tr style={{backgroundColor : '#e9e9e9'}}>
                                        <Td>
                                            <div style={{display : 'flex', alignItems : 'center', margin : '0 5px', flexWrap: 'wrap'}}>
                                                <img style={{width : 30, height: 30, borderRadius: '50%', marginRight : 5}} src={res.fundraise.logo} alt="logo" />
                                                {res.fundraise.name}

                                            </div>
                                        </Td>
                                        <Td>
                                            <ClickAwayListener onClickAway={() => this.setState({ activeButton: null })}>
                                                <form style={{display : 'flex', flexWrap : 'wrap', padding : '0 5px'}} onSubmit={(e)=>this.handleSubmit(e, res.id62)}>
                                                    <input 
                                                    style={{width : "100%", marginBottom: '5px'}}
                                                    type="number" 
                                                    min={res.min_invest_share} 
                                                    defaultValue={res.qty} 
                                                    onChange={(e)=> this.setState({qty : e.target.value})}
                                                    onClick={()=> this.setState({activeButton : res.id62})}
                                                    />
                                                    {
                                                        this.state.activeButton === res.id62 ?
                                                        <Button style={{width : "100%"}} type='submit' color='primary' variant='outlined'>Simpan</Button>
                                                        : null
                                                    }
                                                </form>
                                            </ClickAwayListener>
                                        </Td>
                                        <Td>
                                            <Button variant='contained' className='mx-2' onClick={()=> this.handleDelete(res.id62)}>
                                                Delete
                                            </Button>
                                        </Td>
                                    </Tr>
                                    {/* {
                                        res.items.map((res,i)=>(
                                            <Tr key={i} style={{backgroundColor : '#e9e9e9'}}>
                                                <Td>{res.name}</Td>
                                                <Td>{res.qty}</Td>
                                                <Td>Rp. {helper.idr(res.amount)}</Td>
                                            </Tr>
                                        ))
                                    } */}
                                    </Tbody>
                                </Table>

                            </div>
                            <br/>
                            <h6 className="total"> Total  <b> Rp. {helper.idr(Math.round(res.amount * res.qty))}</b> </h6>
                        </div>

                    ))
                }

            </div>
        );
    }
}

  
  export default Cart