import React, { Component } from 'react';
import arrowback from "../../images/arrowback.svg";
import helper from '../../helpers/helper';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Fab} from '@material-ui/core';
import {Link} from 'react-router-dom'
import logo from "../../images/logo.svg";
import API from "../../api";




class Cart extends Component {
    state={
        data : []
    }

    componentDidMount(){
        this.getData()
    }
    getData = ()=>{
        API.getTransaction().then(res=>{
            console.log(res.data.results)
            this.setState({data : res.data.results})
        }).catch(err=>{
            console.log(err.response)
        })
    }
    render() {
        return (
            <div className="all-forms-style invoice">
                <div className="bg">
                <div className="bg-round"></div>
                </div>
                <Link onClick={() => this.props.history.goBack()}>
                    <Fab className="back-button">
                        <img src={arrowback} alt="" />
                    </Fab>
                </Link>
                <div className="logo-invest">
                <img src={logo} alt="LOGO" />
                </div>
                <p className="title">KERANJANG</p>

                {
                    this.state.data.map((res,i)=>(
                        <div className='box-form-data'>
                            <h6 className="info"><span>Status</span>:&nbsp;<i>{res.status}</i>  </h6>
                            <h6 className="info"><span>Nomor invoice</span>:&nbsp;{res.number} </h6>
                            <h6 className="info"><span>Daftar item :</span></h6>
                            <div className="table-wrap">
                                <Table>
                                    <Thead>
                                        <Tr>
                                        <Th>Nama</Th>
                                        <Th>Qty</Th>
                                        <Th>Total</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                    {
                                        res.items.map((res,i)=>(
                                            <Tr key={i} style={{backgroundColor : '#e9e9e9'}}>
                                                <Td>{res.name}</Td>
                                                <Td>{res.qty}</Td>
                                                <Td>Rp. {helper.idr(res.amount)}</Td>
                                            </Tr>
                                        ))
                                    }
                                    </Tbody>
                                </Table>

                            </div>
                            <br/>
                            <h6 className="total"> Total  <b> Rp. {helper.idr(Math.round(res.amount))}</b> </h6>
                        </div>

                    ))
                }

            </div>
        );
    }
}

export default Cart;