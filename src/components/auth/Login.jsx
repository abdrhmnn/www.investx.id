import React, { Component } from "react";
import logo from "../../images/logo-white.svg";
import logoMobile from "../../images/logo.svg";
import { Link, Redirect } from "react-router-dom";
import bluewoman from "../../images/bg/bluewoman.jpg";

import {
  Button,
  TextField,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  FormControl,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import API from "../../api";
import kuki from "../../helpers/kuki";
import Loading from "../shared/Loading";
import Swal from "sweetalert2";

class Login extends Component {
  state = {
    showPassword: false,
    loading: false,
  };

  handleLoginSubmit = (val)=>{
    console.log(val);
  this.setState({ loading: true });
  API.login(val)
    .then((res) => {
      const {token,register_status,email,full_name,phone_number,} = res.data
      kuki.set("email", email);
      kuki.set("full_name", full_name);
      kuki.set("phone_number", phone_number);
      kuki.set("token", token);
      kuki.set("status", register_status);
      kuki.set("auth", true);

        API.getProfileCheck().then(result =>{
          if (result.data.profile.is_investor_approved) {
            kuki.set("isInvestorComplete", result.data.profile.is_investor_approved);
          }else{
            kuki.remove("isInvestorComplete")
          }
            console.log(result.data.profile, 'data profile')
            this.setState({loading : false})
            window.location.href = "/";
          }).catch(err =>{
              this.setState({loading : false})
              console.log(err.response, 'ini profile')
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${Object.entries(err.response.data)}` ,
              })
          })
              
    })
    .catch((err) => {
      this.setState({ loading: false });
      console.log(err.response);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${Object.entries(err.response.data)}`,
      });
    });

  }

  render() {
    const schemaObj = Yup.object({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    const initialValuesObj = {
      email: "",
      password: "",
    };
    console.log(kuki.get("status"));

    if (kuki.get("auth") && kuki.get("token").length !== 0) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: {
              // from: props.location
            },
          }}
        />
      );
    } else {
      return (
        <div>
          <Loading onOpen={this.state.loading} />
          <div
            className="login"
            style={{ backgroundImage: `url(${bluewoman})` }}
          >
            <div className="container">
              <Link to="/">
                <img className="logo" src={logo} alt="logo" />
              </Link>
              <img className="logoMobile" src={logoMobile} alt="logo" />
              <div className="form-box">
                <div className="box-form">
                  <div className="well">Hi, welcome back !</div>
                  <div className="well-desc">
                    Enter your e-mail and password to log in to InvestX
                  </div>
                  <Formik
                    initialValues={initialValuesObj}
                    validationSchema={schemaObj}
                    onSubmit={(val) => {
                      this.handleLoginSubmit(val)
                    }}
                  >
                    {({
                      errors,
                      handleSubmit,
                      touched,
                      handleChange,
                      values,
                      handleBlur,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <Field
                          className="custom_text_input"
                          name="email"
                          variant="outlined"
                          fullWidth={true}
                          label="Email or Phone number"
                          // onBlur={handleBlur}
                          error={touched.email && errors.email ? true : false}
                          helperText={touched.email && errors.email}
                          as={TextField}
                        />
                        <FormControl
                          error={
                            touched.password && errors.password ? true : false
                          }
                          className="custom_text_input"
                          fullWidth={true}
                          onBlur={handleBlur}
                          variant="outlined"
                        >
                          <InputLabel
                            style={{ fontSize: 14, top: "-3px" }}
                            htmlFor="outlined-adornment-password"
                          >
                            Password
                          </InputLabel>
                          <OutlinedInput
                            name="password"
                            style={{ marginBottom: "0 !important" }}
                            label={"password"}
                            fullWidth={true}
                            id="outlined-adornment-password"
                            type={this.state.showPassword ? "text" : "password"}
                            value={values.password}
                            onChange={handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() =>
                                    this.setState({
                                      showPassword: !this.state.showPassword,
                                    })
                                  }
                                  edge="end"
                                >
                                  {this.state.showPassword ? (
                                    <i className="far fa-eye"></i>
                                  ) : (
                                    <i className="far fa-eye-slash"></i>
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            labelWidth={70}
                          />
                          <FormHelperText id="outlined-adornment-password">
                            {touched.password && errors.password}
                          </FormHelperText>
                        </FormControl>

                        <div className="w-forgot">
                          <div className="w-check">
                            <div
                              className="cbox"
                              onClick={() =>
                                this.setState({
                                  rememberMe: !this.state.rememberMe,
                                })
                              }
                            >
                              {this.state.rememberMe ? (
                                <i className="fas fa-check"></i>
                              ) : null}
                            </div>
                            <span>Remember me</span>
                          </div>
                          <Link to="/" className="forgot">
                            Forgot Password?
                          </Link>
                        </div>
                        <Button className="but-login" type="submit">
                          Log in
                        </Button>
                        {/* <div className="error">{this.state.isInvalid? 'Sorry, email or password you entered is incorrect' : null }</div> */}
                        <p className="sign-up">
                          Dont Have Account? <Link to="/signup">Sign Up</Link>{" "}
                        </p>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
