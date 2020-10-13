import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../shared/Navbar';
import {Button, Fab, Collapse} from '@material-ui/core'
import walleticon from '../../images/profile/walleticon.svg'
import plustopup from '../../images/profile/plustopup.svg'

import profile from '../../images/profile/profile.svg'
import busines from '../../images/profile/busines.svg'
import favorite from '../../images/profile/favorite.svg'
import history from '../../images/profile/history.svg'
import list from '../../images/profile/list.svg'
import dividen from '../../images/profile/dividen.svg'
import logout from '../../images/profile/logout.svg'

import DataDiriProfile from './profileMenu/DataDiriProfile'
import Footer from '../shared/Footer';
import Ojk from '../shared/Ojk';

// import Fade from 'react-reveal/Fade';
import BusinessIndex from './businessMenu/BusinessIndex';
import HistoryIndex from './historyMenu/HistoryIndex';
import FavoriteIndex from './favoriteMenu/FavoriteIndex';

import API from '../../api'
import kuki from '../../helpers/cookie'


class Profile extends Component {
    state={
        filterShow : false,
        dataProfile: {}
    }

    componentDidMount(){
        API.getProfile().then(res =>{
            console.log(res)
            this.setState({dataProfile : res.data})
        }).catch(err =>{
            console.log(err.response)
        })
    }

    handleClick = (e) => this.props.changeTab(e.target.id)

    
    render() {
        // console.log(this.props)

        const ftop = {
            textTransform: 'capitalize',
  color: '#0288D1',
  background: '#FFFFFF',
  boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.25)',
  fontSize: '18px'
        }
        const fsal = {
            fontSize: '18px',
  textTransform: 'capitalize',
  color: 'white',
  background: '#021F59',
  boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.25)'
        }
        return (
            <div className='profile'>
                <Navbar />
                <div className="container">
                    <div className="row head-profile">
                        <div className="col-md-3 ">
                            <figure>
                                <img className='profile-pict' src="https://placeimg.com/640/480/people" alt="card"/>
                                <Fab className="change-photo">
                                    <i className="fas fa-camera"></i>
                                </Fab>
                            </figure>
                            <p className="username">{this.state.dataProfile.full_name} <span><i className="fas fa-pen"></i></span></p>
                            <p className="since">Member since june 2020</p>
                        </div>
                        <div className="col-md profile-right">
                            <div className="row ">
                                <div className="col-md-7 border-right">
                                    <div className="walldesc">
                                        <img src={walleticon} alt="wallet"/>
                                        <div className="pnumber">
                                            Asset Balance
                                            <br/>
                                            <span>Rp. 20,000,000</span>
                                            <div className="saltot">
                                                <p className="box-saltot border-right">
                                                    Saldo Rupiah <br/>
                                                    <span>Rp. 15,000,000</span>
                                                </p>
                                                <p className="box-saltot">
                                                    Total Saham <br/>
                                                    <span>Rp. 15,000,000</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbuttons">
                                        <Button style={ftop} className='ftop'> <img className='mr-2' src={plustopup} alt="topup"/> Top Up Saldo</Button>
                                        <Button style={fsal} className='fsal'>Withdraw</Button>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="wesuh">
                                        <p className="usaha border-bottom">
                                            Usaha yang anda beri investasi <br/> <span>6</span>
                                        </p>
                                        <p className="usaha">
                                            Estimasi penghasilan dalam 1 tahun <br/> <span>Rp. 125,000,000</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CONTAIN PROFILE  */}
                    <div className="row body-profile">
                        <div className="col-md-3">
                            <div 
                            className={this.state.filterShow ? "tab-float tab-float-active"  : 'tab-float'}
                            onMouseEnter={() => this.setState({filterShow : true})} 
                            onMouseLeave={() => this.setState({filterShow : false})}>
                                <ul>
                                    <li className={this.props.activeTab === 'profile'? 'active-menu-profile' : ''} id='profile' onClick={this.handleClick}><img className='proficonmenu' src={profile} alt="menu-icon"/> My Profile</li>
                                    <li className={this.props.activeTab === 'business'? 'active-menu-profile' : ''} id='business' onClick={this.handleClick}><img className='proficonmenu' src={busines} alt="menu-icon"/> My Business</li>
                                    <li className={this.props.activeTab === 'history'? 'active-menu-profile' : ''} id='history' onClick={this.handleClick}><img className='proficonmenu' src={history} alt="menu-icon"/> History</li>
                                    <li className={this.props.activeTab === 'favorite'? 'active-menu-profile' : ''} id='favorite' onClick={this.handleClick}><img className='proficonmenu' src={favorite} alt="menu-icon"/> Favorite</li>
                                    <li className={this.props.activeTab === 'list'? 'active-menu-profile' : ''} id='list' onClick={this.handleClick}><img className='proficonmenu' src={list} alt="menu-icon"/> List of Investment</li>
                                    <li className={this.props.activeTab === 'dividen'? 'active-menu-profile' : ''} id='dividen' onClick={this.handleClick}><img className='proficonmenu' src={dividen} alt="menu-icon"/> Dividend</li>
                                        <hr/>
                                    <li><img className='proficonmenu' src={logout} alt="menu-icon"/> Logout</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md fbodycon">
                        <Collapse in={this.props.activeTab === 'profile'}>
                            <DataDiriProfile />
                        </Collapse>
                        <Collapse in={this.props.activeTab === 'business'}>
                            <BusinessIndex />
                        </Collapse>
                        <Collapse in={this.props.activeTab === 'history'}>
                            <HistoryIndex />
                        </Collapse>
                        <Collapse in={this.props.activeTab === 'favorite'}>
                            <FavoriteIndex />
                        </Collapse>
                        </div>
                    </div>
                </div>
                <Footer />
                <Ojk />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab,
        // number : state.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTab: (data) => dispatch({type:'CHANGE_TAB' , data: data})
        }
}




export default connect(mapStateToProps, mapDispatchToProps)(Profile);