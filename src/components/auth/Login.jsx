import React, { Component } from 'react';
import logo from '../../assets/img/logo-white.svg'
import {Link} from 'react-router-dom'
import gogico from  '../../assets/img/google.svg'
import fb from  '../../assets/img/fb.svg'
import jeruk from '../../assets/img/bg/jeruk.jpg'


class Login extends Component {
    state={
        hidePass : true,
        rememberMe : false,
        isSignUp : false,
        email : '',
        password : '',
        isInvalid : false
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
    render() {
        return (
            <div>
              <div className="login">
                    <img className="logo" src={logo} alt="logo"/>    
                  <div className="w-left"  style={{backgroundImage: `url(${jeruk})`}}>
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
                              <button><img src={gogico} alt=""/> Google</button>
                              <button> <img src={fb} alt=""/> Facebook</button>
                          </div>
                          <p className="or">Or</p>
                          <form onSubmit={this.handleSubmit}>
                              <div className="w-inp">
                                <input type="email" name='email' value={this.state.email} onChange={this.handleChange} placeholder='Email'/>
                              </div>
                              <div className="w-inp">
                                <input placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} type={this.state.hidePass?'password' :'text' }/>
                                <i onClick={()=> this.setState({hidePass : !this.state.hidePass})} class={this.state.hidePass?"far fa-eye":"far fa-eye-slash"}></i>
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
                              <hr className='s-b'/>
                              <p className="sign-up">Dont Have Account? <Link to='/signup'>Sign Up</Link> </p>
                          </form>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}

export default Login;