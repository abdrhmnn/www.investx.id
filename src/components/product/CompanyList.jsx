import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import { Link } from 'react-router-dom';
import Card from '../shared/Card';
import Slide from 'react-reveal/Slide';
import FilterCheck from './FilterCheck';
import triangle from '../../images/companylist/triangle.svg'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



class CompanyList extends Component {
    state={
        filterShow : true,
        most_funded : false,
        industriesCount : [],
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
        const filterIndustries = [
            {id : 0, name : 'Fashion',},
            {id : 1, name : 'Automotive',},
            {id : 2, name : 'Energy',},
            {id : 3, name : 'Finance',},
        ]
        return (
            <>
             <ToastContainer
             position="top-center"
            />
                <Navbar/>
                <div className='company-list'>
                    <div className="container"> 
                        <div className="breadcrumb-custom"><Link to='/'>Home</Link>  <span> > </span><Link to='/company-list'>Company list</Link> </div>
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
                                            <li>
                                                <FilterCheck label='Most Funded' 
                                                isCheck={this.state.most_funded} onClick={()=>this.handleCheckFilter('most_funded', !this.state.most_funded )} 
                                                />
                                            </li>
                                            <li>
                                                <FilterCheck label='Recently launched' />
                                            </li>
                                            <li>
                                                <FilterCheck label='Closing Soon' />
                                            </li>
                                            <li>
                                                <FilterCheck label='In Progress' />
                                            </li>
                                            <li>
                                                <FilterCheck label='Completed campaigns' />
                                            </li>
                                        </ul> 

                                        <hr/>

                                        <div className="title-check">Industries <img src={triangle} alt="triangle"/></div>
                                        <ul className='industries-check'>
                                            {
                                                filterIndustries.map((res,i)=>
                                                    <li key={i}>
                                                        <FilterCheck label={res.name} 
                                                        isCheck={this.state[`${res.name}`]} 
                                                        onClick={()=>this.handleCheckIndustries(res.name, !this.state[`${res.name}`], res.id )} 
                                                        />
                                                    </li>
                                                    )
                                            }
                                        </ul> 
                                        
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
                                    <div className="card-sizing col-md-4 ">
                                        <Card />
                                    </div>
                                    <div className="card-sizing col-md-4 ">
                                        <Card />
                                    </div>
                                    <div className="card-sizing col-md-4 ">
                                        <Card />
                                    </div>
                                    <div className="card-sizing col-md-4 ">
                                        <Card />
                                    </div>
                                    <div className="card-sizing col-md-4 ">
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