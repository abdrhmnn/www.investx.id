import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import { Link } from 'react-router-dom';

class CompanyList extends Component {
    state={
        filterShow : false
    }
    render() {
        return (
            <>
                <Navbar/>
                <div className='company-list'>
                    <div className="container"> 
                        <div className="breadcrumb-custom"><Link to='/'>Home</Link>  <span> > </span><Link to='/company-list'>Company list</Link> </div>
                        <p className="title">Find your favourite company. Invest now, or regret later</p>
                        <p className="desc">All companies are rigorously screened & pass due diligence.</p>
                    </div>

                    <div className={this.state.filterShow ?"container-fluid":"container"}>
                        <div className="list-boxes">
                            <div 
                            className={this.state.filterShow ?' filter-box-active' : "filter-box " }
                            onMouseEnter={() => this.setState({filterShow : true})}
                            onMouseLeave={() => this.setState({filterShow : false})}
                            >
                                <div className="title-filter">
                                    <i className={this.state.filterShow ?"fas fa-caret-right mr-2":"fas fa-caret-left mr-2"}></i>
                                    Filter
                                </div>
                                {
                                    this.state.filterShow?
                                    <ul>
                                        <li>ffdasfas</li>
                                        <li>ffdasfas</li>
                                        <li>ffdasfas</li>
                                        <li>ffdasfas</li>
                                        <li>ffdasfas</li>
                                        <li>ffdasfas</li>
                                        <li>ffdasfas</li>
                                        <li>ffdasfas</li>
                                        <li>ffdasfas</li>
                                    </ul> : null
                                }
                            </div>
                            <div className="list-box">
                                <div className="header-list-company">Discover 6 Investments</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </>
        );
    }
}

export default CompanyList;