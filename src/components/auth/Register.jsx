import React, { Component } from "react";
import logo from "../../images/logo-white.svg";
import logoMobile from "../../images/logo.svg";

import { Link } from "react-router-dom";
import bluewoman from "../../images/bg/bluewoman.jpg";

import phoneicon from "../../images/phoneicon.svg";
import emailicon from "../../images/emailicon.svg";
import Swal from "sweetalert2";
import kuki from "../../helpers/kuki";

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
import Loading from "../shared/Loading";

class Register extends Component {
  state = {
    showPassword: false,
    re_showPassword: false,
    isTnc: false,
    isModalConfirm: false,
    dataPost: {},
    loading: false,
  };

  phoneRemoveZero = (val) => {
    if (val[0] === "0" || val[0] === 0) {
      var x = val.split("");
      x[0] = "62";
      return x.join("");
    } else {
      return val;
    }
  };

  submitRegister = () => {
    this.setState({ loading: true });
    API.register(this.state.dataPost)
      .then((res) => {
        console.log(res);
        this.setState({ sModalConfirm: false, loading: false });
        kuki.set("token", res.data.token);
        kuki.set("status", { phone: false, email: false });
        kuki.set("auth", true);
        kuki.set("email", res.data.email);
        kuki.set("full_name", res.data.full_name);
        kuki.set("phone_number", res.data.phone_number);
        window.location.href = "/";
      })
      .catch((err) => {
        this.setState({ loading: false });
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error ${Object.keys(err.response.data)}, "${Object.values(
            err.response.data
          )}" `,
        });
      });
  };

  modalConfirm = () => (
    <div className="over">
      <div className="modal-confirm">
        <div className="title">
          Apakah email dan no handphone anda sudah benar?
        </div>
        <div className="desc">
          No hp digunakan untuk mendapatkan kode OTP dan Email digunakan untuk
          Verifikasi data
        </div>
        <div className="box">
          <div className="mailphone">
            <img src={phoneicon} alt="phone" /> +
            {this.state.dataPost.phone_number}
          </div>
          <div className="mailphone">
            <img src={emailicon} alt="phone" /> {this.state.dataPost.email}
          </div>
        </div>
        <div className="but-all">
          <p onClick={() => this.setState({ isModalConfirm: false })}>Ubah</p>
          <Button onClick={this.submitRegister}>Ya, Lanjutkan</Button>
        </div>
      </div>
    </div>
  );

  render() {
    console.log(this.state);

    const schemaObj = Yup.object({
      full_name: Yup.string().required().min(3),
      email: Yup.string().required().email(),
      phone_number: Yup.string()
        .required()
        .matches(/^\d+$/, "must be a number"),
      password: Yup.string()
        .required()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Number and one special case Character"
        ),
      re_password: Yup.string()
        .required("masukan ulang Kata sandi")
        .oneOf([Yup.ref("password"), null], "Kata sandi tidak sama"),
    });

    const initialValuesObj = {
      full_name: "",
      email: "",
      phone_number: "",
      password: "",
      re_password: "",
    };
    return (
      <div>
        {this.state.isModalConfirm ? this.modalConfirm() : null}
        <Loading onOpen={this.state.loading} />
        <div
          className="signup"
          style={{ backgroundImage: `url(${bluewoman})` }}
        >
          <div className="container">
            <img className="logo" src={logo} alt="logo" />
            <img className="logoMobile" src={logoMobile} alt="logo" />
            <div className="form-box">
              <div className="box-form">
                <div className="well">Register Now</div>
                <div className="well-desc">
                  Already have an account? <Link to="/login">Login</Link>
                </div>
                {/* <hr/> */}

                <Formik
                  initialValues={initialValuesObj}
                  validationSchema={schemaObj}
                  onSubmit={(val) => {
                    var body = {
                      full_name: val.full_name,
                      email: val.email,
                      password: val.password,
                      phone_number: this.phoneRemoveZero(val.phone_number),
                    };
                    this.setState({ dataPost: body, isModalConfirm: true });
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
                        name="full_name"
                        variant="outlined"
                        fullWidth={true}
                        label="Full Name ( Same as KTP )"
                        // onBlur={handleBlur}
                        error={
                          touched.full_name && errors.full_name ? true : false
                        }
                        helperText={touched.full_name && errors.full_name}
                        as={TextField}
                      />

                      <Field
                        className="custom_text_input"
                        name="email"
                        variant="outlined"
                        fullWidth={true}
                        label="Email"
                        // onBlur={handleBlur}
                        error={touched.email && errors.email ? true : false}
                        helperText={touched.email && errors.email}
                        as={TextField}
                      />

                      <Field
                        className="custom_text_input"
                        type="text"
                        name="phone_number"
                        variant="outlined"
                        fullWidth={true}
                        label="phone number"
                        placeholder="No. ( Ex : 628xxx/08xxxx )"
                        error={
                          touched.phone_number && errors.phone_number
                            ? true
                            : false
                        }
                        helperText={touched.phone_number && errors.phone_number}
                        as={TextField}
                      />

                      <FormControl
                        error={
                          touched.password && errors.password ? true : false
                        }
                        fullWidth={true}
                        className="custom_text_input"
                        onBlur={handleBlur}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Password
                        </InputLabel>
                        <OutlinedInput
                          name="password"
                          style={{ marginBottom: "0 !important" }}
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

                      <FormControl
                        error={
                          touched.re_password && errors.re_password
                            ? true
                            : false
                        }
                        className="custom_text_input"
                        fullWidth={true}
                        onBlur={handleBlur}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-re_password">
                          Confirmation Password
                        </InputLabel>
                        <OutlinedInput
                          name="re_password"
                          // style={{marginBottom :'0 !important', }}
                          fullWidth={true}
                          id="outlined-adornment-re_password"
                          type={
                            this.state.re_showPassword ? "text" : "password"
                          }
                          value={values.re_password}
                          onChange={handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() =>
                                  this.setState({
                                    re_showPassword: !this.state
                                      .re_showPassword,
                                  })
                                }
                                edge="end"
                              >
                                {this.state.re_showPassword ? (
                                  <i className="far fa-eye"></i>
                                ) : (
                                  <i className="far fa-eye-slash"></i>
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          labelWidth={160}
                        />
                        <FormHelperText id="outlined-adornment-password">
                          {touched.re_password && errors.re_password}
                        </FormHelperText>
                      </FormControl>

                      <div className="w-forgot">
                        <div className="w-check">
                          <div
                            className="cbox"
                            onClick={() =>
                              this.setState({ isTnc: !this.state.isTnc })
                            }
                          >
                            {this.state.isTnc ? (
                              <i className="fas fa-check"></i>
                            ) : null}
                          </div>
                          <span>
                            I have read and I agree to InvestX’s Term of Service
                            and Privacy Policy
                          </span>
                        </div>
                        {/* <Link to='/' className="forgot">Forgot Password?</Link> */}
                      </div>
                      <Button
                        className="but-login"
                        type="submit"
                        disabled={!this.state.isTnc}
                      >
                        Sign Up
                      </Button>
                      {/* <div className="error">{this.state.isInvalid? 'Sorry, email or password you entered is incorrect' : null }</div> */}
                      {/* <p className="sign-up">Dont Have Account? <Link to='/signup'>Sign Up</Link> </p> */}
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

export default Register;
