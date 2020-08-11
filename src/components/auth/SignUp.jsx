import React, { Component } from 'react';
import logo from '../../images/logo-white.svg'
import {Link} from 'react-router-dom'
import gogico from  '../../images/google.svg'
import fb from  '../../images/fb.svg'
import bluewoman from '../../images/bg/bluewoman.jpg'



class Register extends Component {
    state={
        hidePass : true,
        rememberMe : false,
        isSignUp : false,
        borderActive : '',
        c_password : '',
    }

    borderBlue = (e)=>{
        if (e.target.id.length !== 0) {
            console.log(e.target.id);
            this.setState({borderActive : e.target.id})
        }else{
            console.log(e.target.id);
            console.log('kosong');
        }
    }
    render() {
        return (
            <div>
              <div className="signup" style={{backgroundImage: `url(${bluewoman})`}}>
                
                  <div className="container">
                    <img className="logo" src={logo} alt="logo"/>    
                    <div className="form-box">
                        <div className="box-form">
                            <div className="well">Register Now</div>
                            <div className="well-desc">Already have an account?</div>
                            {/* <hr/> */}
                    
                            <form onSubmit={this.handleSubmit}>
                                <div className={this.state.borderActive === 'fullName' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                    <div class="has-float-label">
                                        <input id="fullName" name='fullName' type="text" onChange={this.handleChange} placeholder="Full Name ( Same as KTP )"/>
                                        <label for="fullName">Full Name ( Same as KTP )</label>
                                    </div>
                                </div>

                                <div className={this.state.borderActive === 'email' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                    <div class="has-float-label">
                                        <input id="email" name='email' type="text" onChange={this.handleChange} placeholder="Email"/>
                                        <label for="email">Email</label>
                                    </div>
                                </div>

                                <div className={this.state.borderActive === 'phone' ?"w-input w-input-active phone-sp" :"w-input phone-sp"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                    <div className="spoil">+62</div>
                                    <div class="has-float-label">
                                        <input id="phone" name='phone' type="text" onChange={this.handleChange} placeholder="phone"/>
                                        <label for="phone">Phone No. ( Ex : 85720001212 )</label>
                                    </div>
                                </div>

                                <div className={this.state.borderActive === 'Password' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                    <div class="has-float-label">
                                        <input id="Password" name='password' onChange={this.handleChange} type={this.state.hidePass? 'password' : 'text'} placeholder="Password"/>
                                        <label for="Password">Password</label>
                                    </div>
                                    <i onClick={()=> this.setState({hidePass : !this.state.hidePass})} className={this.state.hidePass?"far fa-eye":"far fa-eye-slash"}></i>
                                </div>

                                <div className={this.state.borderActive === 'c_password' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                    <div class="has-float-label">
                                        <input id="c_password" name='c_password' onChange={this.handleChange} type={this.state.hidePass? 'c_password' : 'text'} placeholder="c_password"/>
                                        <label for="c_password">Confirmation Password</label>
                                    </div>
                                    <i onClick={()=> this.setState({hidePass : !this.state.hidePass})} className={this.state.hidePass?"far fa-eye":"far fa-eye-slash"}></i>
                                </div>

                                <div className={this.state.borderActive === 'promo' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                    <div class="has-float-label">
                                        <input id="promo" name='promo' type="text" onChange={this.handleChange} placeholder="promo"/>
                                        <label for="promo">Promo code/ Referral ( Optional )</label>
                                    </div>
                                </div>
                                    
                                <div className="w-forgot">
                                    <div className="w-check">
                                        <div className="cbox" onClick={()=> this.setState({rememberMe : !this.state.rememberMe})}>
                                        {this.state.rememberMe?<i className="fas fa-check"></i>:null}
                                        </div>
                                        <span>I have read and I agree to InvestX’s Term of Service and Privacy Policy</span>
                                    </div>
                                    {/* <Link to='/' className="forgot">Forgot Password?</Link> */}
                                </div>
                                <button className='but-login' type='submit'>Log in</button>
                                <div className="error">{this.state.isInvalid? 'Sorry, email or password you entered is incorrect' : null }</div>
                                {/* <p className="sign-up">Dont Have Account? <Link to='/signup'>Sign Up</Link> </p> */}
                            </form>
                        </div>
                    </div>

                  </div>
              </div>
            </div>
        );
    }
}

export default Register;