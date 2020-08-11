import React, { Component } from 'react';
import logo from '../../images/logo-white.svg'
import {Link} from 'react-router-dom'
import gogico from  '../../images/google.svg'
import fb from  '../../images/fb.svg'
import bluewoman from '../../images/bg/bluewoman.jpg'


class Login extends Component {
    state={
        hidePass : true,
        rememberMe : false,
        isSignUp : false,
        email : '',
        password : '',
        isInvalid : false,
        borderActive : ''
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }, ()=> this.setState({isInvalid : false}))
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const dummyuser = {
            email : 'kemal@kemal.com',
            password : 'kemal'
        }
        if (this.state.email === dummyuser.email && this.state.password === dummyuser.password) {
            this.props.history.push('/term')
        }else{
            this.setState({isInvalid : true})
        }
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
              <div className="login" style={{backgroundImage: `url(${bluewoman})`}}>
                
                  <div className="container">
                    <img className="logo" src={logo} alt="logo"/>    
                    <div className="form-box">
                        <div className="box-form">
                            <div className="well">Hi, welcome back !</div>
                            <div className="well-desc">Enter your e-mail and password to log in to InvestX</div>
                            {/* <hr/> */}
                    
                            <form onSubmit={this.handleSubmit}>
                                <div className={this.state.borderActive === 'email' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                    <div class="has-float-label">
                                        <input id="email" name='email' type="text" onChange={this.handleChange} placeholder="Email or Phone number"/>
                                        <label for="email">Email or Phone number</label>
                                    </div>
                                </div>

                                <div className={this.state.borderActive === 'Password' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                    <div class="has-float-label">
                                        <input id="Password" name='password' onChange={this.handleChange} type={this.state.hidePass? 'password' : 'text'} placeholder="Password"/>
                                        <label for="Password">Password</label>
                                    </div>
                                    <i id='Password' 
                                    // onBlur={()=> this.setState({borderActive : ''})} 
                                    onClick={()=> this.setState({hidePass : !this.state.hidePass})} 
                                    className={this.state.hidePass?"far fa-eye":"far fa-eye-slash"}>
                                    </i>
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
                                <div className="error">{this.state.isInvalid? 'Sorry, email or password you entered is incorrect' : null }</div>
                                <p className="sign-up">Dont Have Account? <Link to='/signup'>Sign Up</Link> </p>
                            </form>
                        </div>
                    </div>

                  </div>
              </div>
            </div>
        );
    }
}

export default Login;