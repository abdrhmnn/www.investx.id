
import React, { Component } from 'react';
import arrowback from '../../images/arrowback.svg'
import logo from '../../images/logo.svg'
import StepsInvestor from './StepsInvestor';
import { Fab } from '@material-ui/core'
import { Link } from 'react-router-dom';
import kuki from '../../helpers/cookie'



class HeaderInvestForm extends Component {
    render() {
        const {activeStep} = this.props
        return (
            <>
                <div className="bg">
                    <div className="bg-round"></div>
                </div>
                <Link onClick={() => this.props.history.goBack()}>
                    <Fab className="back-button"><img src={arrowback} alt="" /></Fab>
                </Link>
                <div className="logo-invest"><img src={logo} alt="" /></div>

                <p className="title">Selamat datang {kuki.get('full_name')}</p>
                <p className="desc"> Terima kasih telah mendaftar di InvestX. <br /> Silahkan lengkapi daftar diri anda untuk mulai berinvestasi</p>

                <StepsInvestor active={activeStep} />
                
            </>
        );
    }
}

export default HeaderInvestForm;