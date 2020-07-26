import React, { Component } from 'react';
import logo from '../../images/logo-white.svg'
import {Link} from 'react-router-dom'
import gogico from  '../../images/google.svg'
import fb from  '../../images/fb.svg'
import jeruk from '../../images/bg/jeruk.jpg'



class Register extends Component {
    state={
        hidePass : true,
        rememberMe : false,
        isSignUp : false,
    }
    render() {
        return (
            <div>
              <div className="signup">
                    <img className="logo" src={logo} alt="logo"/>    
                  <div className="w-left" style={{backgroundImage: `url(${jeruk})`}}>
                      <div className="box-title">
                          <p className='title'>Kemudahan ber investasi dalam genggaman</p>
                          <p className='t-foot'>Daftarkan bisnis mu atau bergabung sebagai Investor secara gratis.</p>
                      </div>
                  </div>
                  <div className="w-right">
                      <div className="box-form">
                          <div className="well">Daftar Sekarang</div>
                          <div className="well-desc">Already have an account? <Link to='/login'>Login</Link></div>
                          <hr/>
                          <p className="lw"> <span>sign up with</span> </p>
                          <div className="wrap-button">
                              <button><img src={gogico} alt=""/> Google</button>
                              <button> <img src={fb} alt=""/> Facebook</button>
                          </div>
                          <p className="or">Or</p>
                          <form >
                              <div className="grp-inp">
                                <div className="w-inp">
                                    <input type="text" placeholder='Firstname'/>
                                </div>
                                <div className="w-inp">
                                    <input type="text" placeholder='Lastname'/>
                                </div>
                                </div>
                                <div className="w-inp">
                                    <input type="email" placeholder='Email'/>
                                </div>
                                <div className="w-inp">
                                    <input type="text" placeholder='No Phone'/>
                                </div>

                              <div className="grp-inp">
                                <div className="w-inp">
                                    <input placeholder="Password (min 8 Character)" minLength='8' type={this.state.hidePass?'password' :'text' }/>
                                    <i onClick={()=> this.setState({hidePass : !this.state.hidePass})} class={this.state.hidePass?"far fa-eye":"far fa-eye-slash"}></i>
                                </div>
                                <div className="w-inp">
                                    <input type="password" placeholder='Password Confirmation'/>
                                </div>
                              </div>
                              <button className='but-login' type='submit'>Sign Up</button>
                              <hr className='s-b'/>
                              <p className="term">By Signing Up I agree to <Link to='/'>InvestX’s Term of Service</Link> and <Link to='/'>Privacy Policy</Link> </p>
                          </form>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}

export default Register;