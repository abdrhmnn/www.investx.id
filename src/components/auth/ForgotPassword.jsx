import { Button, TextField } from "@material-ui/core";
import { Field, Formik } from "formik";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import API from "../../api";
import bluewoman from "../../images/bg/bluewoman.jpg";
import logo from "../../images/logo-white.svg";
import logoMobile from "../../images/logo.svg";

export default function ForgotPassword() {
  const handleSubmit = (val) => {
    API.forgotPassword(val)
      .then(() => {
        console.log(val);
      })
      .catch((err) => {
        console.log(err.response.data);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error ${Object.keys(err.response.data)}, "${Object.values(
            err.response.data
          )}" `,
        });
      });
  };

  const schemaObj = Yup.object({
    email: Yup.string().required().email(),
  });

  const initialValuesObj = {
    email: "",
  };

  return (
    <div className="login" style={{ backgroundImage: `url(${bluewoman})` }}>
      <div className="container">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <img className="logoMobile" src={logoMobile} alt="logo" />
        <div className="form-box">
          <div className="box-form">
            <div className="mb-3 well">Forgot your Password</div>
            <Formik
              initialValues={initialValuesObj}
              validationSchema={schemaObj}
              onSubmit={(val) => {
                handleSubmit(val);
              }}>
              {({ errors, handleSubmit, touched }) => (
                <form onSubmit={handleSubmit}>
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
                  <Button
                    className="but-login"
                    type="submit"
                    disabled={!touched.email && !errors.email}>
                    Send Email
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
