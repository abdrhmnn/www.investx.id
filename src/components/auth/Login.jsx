import React, { Component } from 'react';
import logo from '../../images/logo-white.svg'
import {Link} from 'react-router-dom'
import bluewoman from '../../images/bg/bluewoman.jpg'

import {Button, TextField, OutlinedInput, InputAdornment, InputLabel, FormControl,IconButton, FormHelperText} from '@material-ui/core'
import { Formik , Field} from "formik";
import * as Yup from 'yup'


class Login extends Component {
    state={
        showPassword : false
    }

    render() {
        const schemaObj = Yup.object({
            email : Yup.string().required(),
            password : Yup.string().required()
        })

        const initialValuesObj = {
            email : '',
            password : '',
        }
    
        return (
            <div>
              <div className="login" style={{backgroundImage: `url(${bluewoman})`}}>
                  <div className="container">
                    <img className="logo" src={logo} alt="logo"/>    
                    <div className="form-box">
                        <div className="box-form">
                            <div className="well">Hi, welcome back !</div>
                            <div className="well-desc">Enter your e-mail and password to log in to InvestX</div>
                            <Formik
                            initialValues={initialValuesObj}
                            validationSchema={schemaObj}
                            onSubmit={(val)=>{
                                console.log(val)

                            }}
                            >
                                {
                                    ({errors, handleSubmit, touched,handleChange, values, handleBlur})=>
                                    <form onSubmit={handleSubmit}>
                                        <Field
                                            className='custom_text_input'
                                            name='email'
                                            variant='outlined'
                                            fullWidth={true}
                                            label='Email or Phone number'
                                            // onBlur={handleBlur}
                                            error={touched.email && errors.email? true : false}
                                            helperText={touched.email && errors.email}
                                            as={TextField} 
                                        />

                                        <FormControl 
                                        error={touched.password && errors.password? true : false}
                                        className='custom_text_input'
                                        fullWidth={true}
                                        onBlur={handleBlur}
                                        variant="outlined">
                                            <InputLabel style={{fontSize :14, top : '-3px' }} htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                name='password'
                                                style={{marginBottom :'0 !important', }}
                                                label={'password'}
                                                fullWidth={true}
                                                id="outlined-adornment-password"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                onChange={handleChange}
                                                endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={()=> this.setState({showPassword : !this.state.showPassword})}
                                                    edge="end"
                                                    >
                                                    {this.state.showPassword ? <i className="far fa-eye"></i> :  <i className="far fa-eye-slash"></i>}
                                                    </IconButton>
                                                </InputAdornment>
                                                }
                                                labelWidth={70}
                                            />
                                            <FormHelperText id="outlined-adornment-password" >{touched.password && errors.password}</FormHelperText>
                                        </FormControl>
                                            
                                        <div className="w-forgot">
                                            <div className="w-check">
                                                <div className="cbox" onClick={()=> this.setState({rememberMe : !this.state.rememberMe})}>
                                                    {this.state.rememberMe?<i className="fas fa-check"></i>:null}
                                                </div>
                                                <span>Remember me</span>
                                            </div>
                                            <Link to='/' className="forgot">Forgot Password?</Link>
                                        </div>
                                        <Button className='but-login' type='submit'>Log in</Button>
                                        {/* <div className="error">{this.state.isInvalid? 'Sorry, email or password you entered is incorrect' : null }</div> */}
                                        <p className="sign-up">Dont Have Account? <Link to='/signup'>Sign Up</Link> </p>
                                    </form>
                                }
                            </Formik>

                        </div>
                    </div>

                  </div>
              </div>
            </div>
        );
    }
}

export default Login;