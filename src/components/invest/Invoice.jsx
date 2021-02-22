import React, { Component } from 'react';
import API from "../../api";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import {Link} from 'react-router-dom'
import { Fab } from '@material-ui/core';
import logo from "../../images/logo.svg";
import arrowback from "../../images/arrowback.svg";
import helper from '../../helpers/helper';




class Invoice extends Component {
    state={
        data :{},
        items : []
    }

    componentDidMount(){
        this.getDataInvoice()
    }
    
    getDataInvoice = () =>{
        let id = this.props.match.params.idTransaction
        API.invoiceDetail(id).then(res=>{
          console.log(res)
          this.setState({ 
            data : res.data,
            items : res.data.items
          })
        }).catch(err => console.log(err.response))
    }

    render() {
        const {status, number, amount}= this.state.data
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
                <p className="title">INVOICE</p>

                    <div className='box-form-data'>
                        <h6 className="info"><span>Status</span>:&nbsp;<i>{status}</i>  </h6>
                        <h6 className="info"><span>Nomor invoice</span>:&nbsp;{number} </h6>
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
                                    this.state.items.map((res,i)=>(
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
                        <h6 className="total"> Total  <b> Rp. {helper.idr(Math.round(amount))}</b> </h6>
                    </div>
        </div>
        );
    }
}

export default Invoice;