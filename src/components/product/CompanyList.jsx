import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import { Link } from 'react-router-dom';
import Card from '../shared/Card';
import Slide from 'react-reveal/Slide';
import FilterCheck from './FilterCheck';
import triangle from '../../images/companylist/triangle.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Select from 'react-dropdown-select';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import helper from '../shared/helper'





class CompanyList extends Component {
    state={
        filterShow : true,
        most_funded : false,
        industriesCount : [],
        amount: { min: 2, max: 10 },
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    handleCheckFilter = (name, value)=>{
        this.setState({[name] : value})
        console.log(this.state);
    }

    handleCheckIndustries = (name, value , id)=>{
        if (this.state.industriesCount.length < 3 && value === true) {
            this.setState({[name] : value, industriesCount : [...this.state.industriesCount, {id: id, name : name, value : value}] })
        }

        if (this.state.industriesCount.length >= 3 && value) {
            toast.warn("Pilihan Industri Maksimal 3!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        }

        if (!this.state.industriesCount.length < 3 && !value) {
            const arrRemove = this.state.industriesCount.filter(res => res.id !== id)
            this.setState({
                [name] : value, 
                industriesCount : arrRemove
            })
            console.log(this.state.industriesCount);
        }
    }

    render() {
        console.log(this.state);
        const filterCheck = [
            {id : 0, name : 'Most Funded',},
            {id : 1, name : 'Recently launched',},
            {id : 2, name : 'Closing Soon',},
            {id : 3, name : 'In Progress',},
            {id : 4, name : 'Completed campaigns',},
        ]
        const filterCheckIndustries = [
            {id : 0, name : 'Fashion',},
            {id : 1, name : 'Automotive',},
            {id : 2, name : 'Energy',},
            {id : 3, name : 'Finance',},
            {id : 4, name : 'Creative',},
            {id : 5, name : 'Food',},
        ]
        return (
            <>
             <ToastContainer
             position="top-center"
            />
                <Navbar/>
                <div className='company-list'>
                    <div className="container"> 
                        <div className="breadcrumb-custom"><Link to='/'>Home</Link>  <span> {`>`} </span><Link to='/company-list'>Company list</Link> </div>
                        <p className="title-company">Find your favourite company. Invest now, or regret later</p>
                        <p className="desc-company">All companies are rigorously screened & pass due diligence.</p>
                    </div>

                    <div className={this.state.filterShow ?"container-fluid":"container-fluid"}>

                        <div className="row list-boxes no-gutters">

                            <div className="col-md-2 d-flex align-items-end flex-column overflow-hidden " onMouseLeave={() => this.setState({filterShow : false})}>

                                <div className={this.state.filterShow ?"title-filter-active":"title-filter"} onMouseEnter={() => this.setState({filterShow : true})}>
                                    <i className={this.state.filterShow ?"fas fa-caret-right mr-2":"fas fa-caret-left mr-2"}></i>Filter
                                </div>

                                <Slide right when={this.state.filterShow} > 
                                    <div className={this.state.filterShow? "filter-box1" : 'filter-box1 filter-hidden'}>
                                        <ul>
                                            {filterCheck.map((res,i)=>
                                                <li key={i}>
                                                    <FilterCheck label={res.name}
                                                    isCheck={this.state[`${res.name}`]} onClick={()=>this.handleCheckFilter(res.name, !this.state[`${res.name}`] )} 
                                                    />
                                                </li>
                                            )}
                                        </ul> 

                                        <hr/>

                                        <div className="title-check">City </div>
                                        <div className="w-100 pr-3">
                                                <Select
                                                    options={[
                                                        {label:'jakarta', value: 'jakarta'},
                                                        {label:'bandung ', value: 'bandung'},
                                                        {label:'bekasi', value: 'bekasi'}]}
                                                    className='rs'
                                                    name='kawin'
                                                    style={{boxShadow : 'none'}}
                                                    placeholder='Pilih Kota'
                                                    onChange={(values) => console.log(values)}
                                                    closeOnSelect={true}
                                                    dropdownHandleRenderer={({ state }) => (
                                                        // if dropdown is open show "–" else show "+"
                                                        <span style={{}}>{state.dropdown ? <i className="fas fa-chevron-up px-2"></i> : <i class="fas fa-chevron-down px-2"></i>}</span>
                                                    )}
                                                />
                                        </div>

                                        <hr/>

                                        <div className="title-check">Industries <img src={triangle} alt="triangle"/></div>
                                        <ul className='industries-check'>
                                            {filterCheckIndustries.map((res,i)=>
                                                <li key={i}>
                                                    <FilterCheck label={res.name} 
                                                    isCheck={this.state[`${res.name}`]} 
                                                    onClick={()=>this.handleCheckIndustries(res.name, !this.state[`${res.name}`], res.id )} 
                                                    />
                                                </li>
                                            )}
                                        </ul> 

                                        <hr/>

                                        <div className="title-check text-center justify-content-center pr-4">Investment amount ( Rp )</div>

                                        <div className="filter-amount">
                                            <div className="wrap-disp">
                                                <div className="amount-disp">
                                                    <div className="label">Min. ammount</div>
                                                    <div className="value-amount">{helper.idr(this.state.amount.min * 1000000)}</div>
                                                </div>
                                                <span>-</span>
                                                <div className="amount-disp">
                                                    <div className="label">Max. ammount</div>
                                                    <div className="value-amount">{helper.idr(this.state.amount.max * 1000000)}</div>
                                                </div>

                                            </div>
                                            <div className="range-wrap">
                                                <InputRange
                                                // formatLabel={value => `${value}Jt`}
                                                maxValue={15}
                                                minValue={1}
                                                value={this.state.amount}
                                                onChange={value => this.setState({ amount : value })} />
                                            </div>
                                        </div>

                                    </div>
                                </Slide>


                            </div>

                            <div className="col-md-10 bg-light">

                                <div className="header-list-company">
                                    Discover 6 Investments 
                                    <div className="tags">
                                        {this.state.industriesCount.map((res,i)=> <div className='box-tag' key={i}>#{res.name}</div> )}
                                    </div>
                                    Page 1
                                </div>

                                <div className=" row no-gutters">
                                    <div className="mb-5 col-md-4 ">
                                        <Card />
                                    </div>
                                    <div className="mb-5 col-md-4 ">
                                        <Card />
                                    </div>
                                    <div className="mb-5 col-md-4 ">
                                        <Card />
                                    </div>
                                    <div className="mb-5 col-md-4 ">
                                        <Card />
                                    </div>
                                    <div className="mb-5 col-md-4 ">
                                        <Card />
                                    </div>

                                </div>
                                
                            </div>
                        </div>

                    </div>
                    
                </div>
            </>
        );
    }
}

export default CompanyList;