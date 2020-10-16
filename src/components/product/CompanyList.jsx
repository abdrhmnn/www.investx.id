import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import { Link } from 'react-router-dom';
import Card from '../shared/Card';
import Slide from 'react-reveal/Slide';
import FilterCheck from './FilterCheck';
import triangle from '../../images/company/triangle.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import greenshield from '../../images/greenshield.svg'
import { Button } from '@material-ui/core';


import Select from 'react-select'

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import helper from '../../helpers/helper'

import Pagination from "react-js-pagination";





class CompanyList extends Component {
    state={
        filterShow : true,
        most_funded : false,
        industriesCount : [],
        amount: { min: 2, max: 10 },
        page : 1

    }
    
    componentDidMount(){
        window.scrollTo(0, 0)
        if(window.screen.width <= 768){
            this.setState({filterShow : false})
        }
    }
    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({page: pageNumber});
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

        const dummyCards =[
            {id : 0, name : 'Bukalapak',},
            {id : 1, name : 'Tokopedia',},
            {id : 2, name : 'Facebook',},
            {id : 3, name : 'Travelio',},
            {id : 4, name : 'Alkulaku',},
            {id : 5, name : 'Spotify',},
        ]

        const options = [
            { value: 'bandung', label: 'Bandung' },
            { value: 'jakarta', label: 'Jakarta' },
            { value: 'bekasi', label: 'Bekasi' }
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
                        <p className="desc-company "> <img src={greenshield} alt=""/> All companies are rigorously screened & pass due diligence.</p>
                    </div>

                    <div className={this.state.filterShow ?"container-fluid":"container-fluid"}>

                        <div className="row list-boxes no-gutters">

                            <div className="col-md-2 d-flex align-items-end flex-column overflow-hidden " onMouseLeave={() => this.setState({filterShow : false})}>

                                <div className={this.state.filterShow ?"title-filter-active":"title-filter"} onMouseEnter={() => this.setState({filterShow : true})}>
                                    <i className={this.state.filterShow ?"fas fa-caret-right mr-2":"fas fa-caret-left mr-2"}></i>Filter
                                </div>

                                <div className="title-filter-mobile" data-toggle="modal" data-target="#modalFilterMobile">
                                    <i className="fas fa-caret-left mr-2"></i>Filter
                                </div>

                                <div class="modal fade" id="modalFilterMobile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Filter</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div className="filter-box-mobile">
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
                                                    <div className='w-100 pr-3 city-select'>
                                                        <Select  options={options} />
                                                    </div>

                                                    <hr/>

                                                    <div className="title-check">Industries <img src={triangle} alt="triangle"/></div>
                                                    <ul className='industries-check-mobile'>
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

                                                    <div className="filter-amount-mobile">
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
                                                        <div className="range-wrap mb-3 mt-4">
                                                            <InputRange
                                                            // formatLabel={value => `${value}Jt`}
                                                            maxValue={15}
                                                            minValue={1}
                                                            value={this.state.amount}
                                                            onChange={value => this.setState({ amount : value })} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                        <div className='w-100 pr-3 city-select'>
                                            <Select  options={options} />
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
                                    <span>
                                        Discover <span style={{color: '#4CB5EF'}}> 6 </span>Investments 
                                    </span>
                                    <div className="tags">
                                        {this.state.industriesCount.map((res,i)=> <div className='box-tag' key={i}>#{res.name}</div> )}
                                    </div>
                                    <div className="filad">
                                        <span>Urutkan : </span> <Select className='selfil'  options={options} />
                                    </div>
                                </div>

                                <div className="row box-row no-gutters">
                                {
                                    dummyCards.map((res,i)=>
                                        <div className="mb-5 col-md-4 " key={i}>
                                            <Link to={`/company-list/detail/${res.id}`}>
                                                <Card name={res.name} />
                                            </Link>
                                        </div>
                                    )
                                }
                                </div>
                                <div className="pagination_cus">
                                    <span className="mr-3">Page</span>
                                    <Pagination
                                    hideDisabled
                                    activePage={this.state.page}
                                    itemsCountPerPage={10}
                                    totalItemsCount={450}
                                    pageRangeDisplayed={5}
                                    onChange={this.handlePageChange}
                                    activeClass='activeClass'
                                    itemClass='itemClass'
                                    innerClass='innerClass'
                                    itemClassNext='activeArrows'
                                    itemClassPrev='activeArrows'
                                    itemClassFirst='activeArrows'
                                    itemClassLast='activeArrows'
                                    />
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