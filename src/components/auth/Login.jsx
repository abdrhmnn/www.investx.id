import React, { Component } from 'react';
import logo from '../../images/logo-white.svg'
import {Link} from 'react-router-dom'
import bluewoman from '../../images/bg/bluewoman.jpg'
import { FormValidation } from "calidation";


class Login extends Component {
    state={
        hidePass : true,
        rememberMe : false,
        isSignUp : false,
        // email : '',
        // password : '',
        disabled : true,
        borderActive : ''
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }, ()=> this.setState({disabled : false}))
    }

    // handleSubmit = (e)=>{
    //     e.preventDefault()
    //     const dummyuser = {
    //         email : 'kemal@kemal.com',
    //         password : 'kemal'
    //     }
    //     if (this.state.email === dummyuser.email && this.state.password === dummyuser.password) {
    //         this.props.history.push('/term')
    //     }else{
    //         this.setState({isInvalid : true})
    //     }
    // }

    onSubmit = ({ fields, errors, isValid }) => {
        if (isValid) {
          // This is where we'd handle our submission...
          // `fields` is an object, { field: value }
            const dummyuser = {
                email : 'kemal@email.com',
                password : 'password'
            }
            if (fields.email === dummyuser.email && fields.password === dummyuser.password) {
                this.props.history.push('/term')
            }else{
                alert('pass/email salah')
            }
          console.log('Everything is good:', fields.email);
          console.log('Everything is good:', fields.password);
        } else {
          // `errors` is also an object!
          console.log('Something is wrong:', errors);
          console.log('Something is wrong:', fields.email);
        }
    }

    borderBlue = (e)=>{
        if (e.target.id.length !== 0) {
            console.log(e.target.id);
            this.setState({borderActive : e.target.id})
            console.log();
        }else{
            console.log(e.target.id);
            console.log('kosong');
        }
    }

    render() {
        const config = {
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
                message: "7+ character password is required",
                length: 7
                }
            }
        };
    
        return (
            <div>
              <div className="login" style={{backgroundImage: `url(${bluewoman})`}}>
                
                  <div className="container">
                    <img className="logo" src={logo} alt="logo"/>    
                    <div className="form-box">
                        <div className="box-form">
                            <div className="well">Hi, welcome back !</div>
                            <div className="well-desc">Enter your e-mail and password to log in to InvestX</div>

                            <FormValidation onSubmit={this.onSubmit} config={config}>
                                {
                                    ({ fields, errors, submitted })=>(
                                        <div>
                                            <div className={this.state.borderActive === 'email' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                                <div className="has-float-label">
                                                    <input 
                                                    id="email" 
                                                    name='email' 
                                                    type="text" 
                                                    // onChange={this.handleChange} 
                                                    // value={fields.email}
                                                    placeholder="Email or Phone number"/>
                                                    <label htmlFor="email">Email or Phone number</label>
                                                </div>
                                            </div>
                                            <div className="box-err">
                                                {submitted && errors.email && <div className="error">{errors.email}</div>}
                                            </div>
            
                                            <div className={this.state.borderActive === 'Password' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                                <div className="has-float-label">
                                                    <input 
                                                    id="Password" 
                                                    name='password' 
                                                    // onChange={this.handleChange} 
                                                    type={this.state.hidePass? 'password' : 'text'} 
                                                    placeholder="Password"/>
                                                    <label htmlFor="Password">Password</label>
                                                </div>
                                                <i id='Password' 
                                                onClick={()=> this.setState({hidePass : !this.state.hidePass})} 
                                                className={this.state.hidePass?"far fa-eye":"far fa-eye-slash"}>
                                                </i>
                                            </div>
                                            <div className="box-err">
                                                {submitted && errors.password &&<div className="error">{errors.password}</div>}
                                            </div>
                                                
                                            <div className="w-forgot">
                                                <div className="w-check">
                                                    <div className="cbox" onClick={()=> this.setState({rememberMe : !this.state.rememberMe})}>
                                                        {this.state.rememberMe?<i className="fas fa-check"></i>:null}
                                                    </div>
                                                    <span>Remember me</span>
                                                </div>
                                                <Link to='/' className="forgot">Forgot Password?</Link>
                                            </div>
                                            <button className='but-login' type='submit'>Log in</button>
                                            {/* <div className="error">{this.state.isInvalid? 'Sorry, email or password you entered is incorrect' : null }</div> */}
                                            <p className="sign-up">Dont Have Account? <Link to='/signup'>Sign Up</Link> </p>

                                        </div>
                                    )
                                }
                            </FormValidation>

                        </div>
                    </div>

                  </div>
              </div>
            </div>
        );
    }
}

export default Login;