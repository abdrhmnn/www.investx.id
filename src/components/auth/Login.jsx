import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg'
import {Link} from 'react-router-dom'


class Login extends Component {
    render() {
        return (
            <div>
              <div className="login">
                  <div className="w-left">
                      <div className="logo">
                        <img src={logo} alt="logo"/>    
                      </div>
                      <div className="box-title">
                          <p className='title'>Kemudahan ber investasi dalam genggaman</p>
                          <p className='t-foot'>Daftarkan bisnis mu atau bergabung sebagai Investor secara gratis.</p>
                      </div>
                  </div>
                  <div className="w-right">
                      <div className="box-form">
                          <div className="well">Hi, welcome back !</div>
                          <div className="well-desc">Enter your e-mail and password to log in to InvestX</div>
                          <hr/>
                          <p className="lw"> <span>Login with</span> </p>
                          <div className="wrap-button">
                              <button>Google</button>
                              <button>Facebook</button>
                          </div>
                          <p className="or">or</p>
                          <form >
                              <div className="w-inp">
                                <input type="email" placeholder='Email'/>
                              </div>
                              <div className="w-inp">
                                <input type="text" placeholder='Password'/>
                              </div>
                              <div className="w-forgot">
                                  <div className="w-check">
                                        <div className="cbox"></div>
                                        <span>Remember me</span>
                                  </div>
                                  <p className="forgot">Forgot Password?</p>
                              </div>
                              <button className='but-login' type='submit'>Log in</button>
                              <hr className='s-b'/>
                              <p className="sign-up">Dont Have Account? <Link to='/'>Sign Up</Link> </p>
                          </form>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}

export default Login;