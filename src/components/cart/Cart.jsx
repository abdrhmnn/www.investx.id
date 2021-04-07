import React, { Component } from 'react';
import arrowback from "../../images/arrowback.svg";
import helper from '../../helpers/helper';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Button, Fab} from '@material-ui/core';
import logo from "../../images/logo.svg";
import API from "../../api";




class Cart extends Component {
    state={
        data : [],
        qty : '',
        activeButton : ''
    }

    componentDidMount(){
        this.getCart()
        // this.getData('R')
    }

    
    getCart = ()=>{
        API.getCart().then(res=>{
            this.setState({
                data : res.data.results
            })
            console.log(res.data.results)
        }).catch(err=>{
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
        }).catch(err=>{
            console.log(err.response)
        })
        e.preventDefault()
    }

    handleDelete = (id) =>{
        API.deleteCart(id).then(res =>{
            console.log(res)
            this.getCart()
            alert('sukses delete')

        }).catch(err =>{
            console.log(err.response)
            alert('gagal delete')
        })
    }
      
    render() {
        console.log(this.state.data2)
        return (
            <div className="all-forms-style invoice">
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
                                            <img style={{width : 30, height: 30, borderRadius: '50%'}} src={res.fundraise.logo} alt="logo" /> &nbsp;
                                            {res.fundraise.name}
                                        </Td>
                                        <Td>
                                        <form className="wrap-cal" id='calculator-invest' onSubmit={(e)=>this.handleSubmit(e, res.id62)}>
                                            <input 
                                            type="number" 
                                            min={res.min_invest_share} 
                                            defaultValue={res.qty} 
                                            onChange={(e)=> this.setState({qty : e.target.value})}
                                            onClick={()=> this.setState({activeButton : res.id62})}
                                            />
                                            {
                                                this.state.activeButton === res.id62 ?
                                                <Button type='submit' variant='contained'>Save</Button>
                                                : null
                                            }
                                        </form>
                                        </Td>
                                        <Td>
                                            <Button variant='contained' onClick={()=> this.handleDelete(res.id62)}>
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

export default Cart;