import React, { Component } from 'react';
import logo from '../../images/logo-white.svg'
import {Link} from 'react-router-dom'
import bluewoman from '../../images/bg/bluewoman.jpg'
import { FormValidation } from "calidation";
import phoneicon from '../../images/phoneicon.svg'
import emailicon from '../../images/emailicon.svg'




class Register extends Component {
    state={
        hidePass : true,
        hideConPass : true,
        isAgree : false,
        isSignUp : false,
        borderActive : '',
        password : '',
        c_password : '',
        isSamePass : false,
        isModalConfirm : false,
        phone : '',
        email : ''
    }

    handleChange = (e)=>{
        console.log(e.target.name);
        this.setState({[e.target.name] : e.target.value}, ()=>{
            if (this.state.password === this.state.c_password) {
                this.setState({isSamePass : true})
            }else{
                this.setState({isSamePass : false})
            }
        })
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

    onSubmit = ({ fields, errors, isValid }) => {
        console.log('====================================');
        console.log(fields.phone_number[0]);
        console.log('====================================');
        this.setState({email : fields.email})
        if (fields.phone_number[0] === '0') {
            var removeZero = fields.phone_number - 1
            var phone = '62' + removeZero
            this.setState({'phone' : phone})
        }else{
            var phone = '62' + fields.phone_number
        }
        if (isValid) {
        //   console.log('Everything is good:', fields.email);
          console.log('Everything is good:', phone);
        //   console.log('Everything is good:', fields.password);
          this.setState({isModalConfirm : true})
        } else {
          console.log('Something is wrong:', errors);
          console.log('Something is wrong:', fields.email);
        }
    }

    modalConfirm = ()=>(
        <div className="over">
            <div className='modal-confirm'>
                <div className="title">Apakah email dan no handphone anda sudah benar?</div>
                <div className="desc">No hp digunakan untuk mendapatkan kode OTP dan Email digunakan untuk Verifikasi data</div>
                <div className="box">
                    <div className="mailphone"> <img src={phoneicon} alt="phone"/> +{this.state.phone}</div>
                    <div className="mailphone"> <img src={emailicon} alt="phone"/> {this.state.email}</div>
                </div>
                <div className="but-all">
                    <p onClick={()=>this.setState({isModalConfirm : false})}>Ubah</p>
                    <Link to='/otp'>
                        <button>Ya, Lanjutkan</button>
                    </Link>
                </div>
            </div>
        </div>
    )

    render() {
        const config = {
            full_name : {
                isRequired : 'Full Name field is required!',
            },
            email: {
                isRequired: "Email field is required!",
                isRegexMatch: {
                    message: 'Harus format email yang benar contoh : xxxx@xxxx.xx',
                    regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                },
            },
            password: {
                isRequired: "Password field required!",
                isMinLength: {
                    message: "8+ character password is required",
                    length: 8
                },
                isRegexMatch: {
                    message: 'Minimum eight characters, at least one letter and one number',
                    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                },
            },
            phone_number: {
                isRequired: "phone number field required!",
                isMinLength: {
                    message: "Minimum characters is 8",
                    length: 8
                },
                isMaxLength: {
                    message: "Maximum character is 20",
                    length: 20
                },
            }
        };
        return (
            <div>
                {this.state.isModalConfirm? this.modalConfirm() : null}
              <div className="signup" style={{backgroundImage: `url(${bluewoman})`}}>
                
                  <div className="container">
                    <img className="logo" src={logo} alt="logo"/>    
                    <div className="form-box">
                        <div className="box-form">
                            <div className="well">Register Now</div>
                            <div className="well-desc">Already have an account? <Link to='/login'>Login</Link></div>
                            {/* <hr/> */}
                    
                            {/* <form onSubmit={this.handleSubmit}> */}
                            <FormValidation onSubmit={this.onSubmit} config={config}>
                                {
                                     ({ fields, errors, submitted })=>(
                                         <div>

                                             <div className={this.state.borderActive === 'fullName' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                                 <div class="has-float-label">
                                                     <input id="fullName" name='full_name' type="text" placeholder="Full Name ( Same as KTP )"/>
                                                     <label for="fullName">Full Name ( Same as KTP )</label>
                                                 </div>
                                             </div>
                                             <div className="box-err">
                                                {submitted && errors.full_name &&<div className="error">{errors.full_name}</div>}
                                            </div>
             
                                             <div className={this.state.borderActive === 'email' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                                 <div class="has-float-label">
                                                     <input id="email" name='email' type="text" onChange={this.handleChange} placeholder="Email"/>
                                                     <label for="email">Email</label>
                                                 </div>
                                             </div>
                                             <div className="box-err">
                                                {submitted && errors.email &&<div className="error">{errors.email}</div>}
                                            </div>
             
                                             <div className={this.state.borderActive === 'phone' ?"w-input w-input-active phone-sp" :"w-input phone-sp"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                                 <div className="spoil">+62</div>
                                                 <div class="has-float-label">
                                                     <input id="phone" name='phone_number' type="tel" placeholder="phone"/>
                                                     <label for="phone">Phone No. ( Ex : 85720001212 )</label>
                                                 </div>
                                             </div>
                                             <div className="box-err">
                                                {submitted && errors.phone_number &&<div className="error">{errors.phone_number}</div>}
                                            </div>
             
                                             <div className={this.state.borderActive === 'Password' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                                 <div class="has-float-label">
                                                    <input id="Password" name='password' 
                                                    value={fields.password}
                                                    name='password'
                                                    type={this.state.hidePass? 'password' : 'text'} 
                                                    onChange={this.handleChange}
                                                    placeholder="Password"/>
                                                     <label for="Password">Password</label>
                                                 </div>
                                                 <i onClick={()=> this.setState({hidePass : !this.state.hidePass})} className={this.state.hidePass?"far fa-eye":"far fa-eye-slash"}></i>
                                             </div>
                                             <div className="box-err">
                                                {submitted && errors.password &&<div className="error">{errors.password}</div>}
                                            </div>
             
                                            <div className={this.state.borderActive === 'c_password' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                                <div class="has-float-label">
                                                    <input id="c_password" name='c_password' onChange={this.handleChange} type={this.state.hideConPass? 'password' : 'text'} placeholder="c_password"/>
                                                    <label for="c_password">Confirmation Password</label>
                                                </div>
                                                <i onClick={()=> this.setState({hideConPass : !this.state.hideConPass})} className={this.state.hideConPass?"far fa-eye":"far fa-eye-slash"}></i>
                                            </div>
                                            <div className="box-err">
                                                {submitted && !this.state.isSamePass &&<div className="error">password tidak sama!</div>}
                                            </div>
             
                                             {/* <div className={this.state.borderActive === 'promo' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                                 <div class="has-float-label">
                                                     <input id="promo" name='promo' type="text" onChange={this.handleChange} placeholder="promo"/>
                                                     <label for="promo">Promo code/ Referral ( Optional )</label>
                                                 </div>
                                             </div> */}
                                                 
                                             <div className="w-forgot">
                                                 <div className="w-check">
                                                     <div className="cbox" onClick={()=> this.setState({isAgree : !this.state.isAgree})}>
                                                     {this.state.isAgree?<i className="fas fa-check"></i>:null}
                                                     </div>
                                                     <span>I have read and I agree to InvestX’s Term of Service and Privacy Policy</span>
                                                 </div>
                                                 {/* <Link to='/' className="forgot">Forgot Password?</Link> */}
                                             </div>
                                             <button disabled={ !this.state.isAgree} className='but-login' type='submit'>Sign Up</button>
                                             <div className="error">{this.state.isInvalid? 'Sorry, email or password you entered is incorrect' : null }</div>

                                         </div>
                                     )
                                }
                                {/* <p className="sign-up">Dont Have Account? <Link to='/signup'>Sign Up</Link> </p> */}
                            </FormValidation>
                            {/* </form> */}
                        </div>
                    </div>

                  </div>
              </div>
            </div>
        );
    }
}

export default Register;