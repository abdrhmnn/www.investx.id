import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import bluewoman from "../../images/bg/bluewoman.jpg";
import logo from "../../images/logo-white.svg";
import logoMobile from "../../images/logo.svg";

// import API from "../../api";
// import kuki from "../../helpers/kuki";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [re_showPassword, setReShowPassword] = useState(false);

  const handleSubmit = (val) => {
    console.log(val);

    // const body = {
    //     email
    // };

    // API.forgotPassword(body).then(() => {
    //     setEmail("")
    // }).catch((err) => {
    //     console.log(err)
    // })
  };

  const schemaObj = Yup.object({
    password: Yup.string()
      .required()
      .matches(
        // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[0-9])[A-Za-z\d0-9]{8,}$/,
        "Must Contain 8 Characters and One Number"
      ),
    re_password: Yup.string()
      .required("Re-enter Password")
      .oneOf([Yup.ref("password"), null], "Password does not match"),
  });

  const initialValuesObj = {
    password: "",
    re_password: "",
  };

  return (
    <div>
      <div className="login" style={{ backgroundImage: `url(${bluewoman})` }}>
        <div className="container">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <img className="logoMobile" src={logoMobile} alt="logo" />
          <div className="form-box">
            <div className="box-form">
              <div className="well mb-3">Reset your Password</div>
              <Formik
                initialValues={initialValuesObj}
                validationSchema={schemaObj}
                onSubmit={(val) => {
                  handleSubmit(val);
                }}>
                {({
                  errors,
                  handleSubmit,
                  touched,
                  handleChange,
                  values,
                  handleBlur,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <FormControl
                      error={touched.password && errors.password ? true : false}
                      fullWidth={true}
                      className="custom_text_input"
                      onBlur={handleBlur}
                      variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        name="password"
                        style={{ marginBottom: "0 !important" }}
                        fullWidth={true}
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end">
                              {showPassword ? (
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
                        touched.re_password && errors.re_password ? true : false
                      }
                      className="custom_text_input"
                      fullWidth={true}
                      onBlur={handleBlur}
                      variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-re_password">
                        Confirmation Password
                      </InputLabel>
                      <OutlinedInput
                        name="re_password"
                        style={{ marginBottom: "0 !important" }}
                        fullWidth={true}
                        id="outlined-adornment-re_password"
                        type={re_showPassword ? "text" : "password"}
                        value={values.re_password}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() =>
                                setReShowPassword(!re_showPassword)
                              }
                              edge="end">
                              {re_showPassword ? (
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
                    <Button className="but-login" type="submit">
                      Reset Password
                    </Button>
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
