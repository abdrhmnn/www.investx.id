import React, { useState } from "react";
import logo from "../../images/logo-white.svg";
import logoMobile from "../../images/logo.svg";
import { Link } from "react-router-dom";
import bluewoman from "../../images/bg/bluewoman.jpg";


import {
  Button,
  TextField,
} from "@material-ui/core";
// import { Formik, Field } from "formik";
// import * as Yup from "yup";
import API from "../../api";
// import kuki from "../../helpers/kuki";

export default function ForgotPassword() {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            email
        };

        API.forgotPassword(body).then(() => {
            setEmail("")
        }).catch((err) => {
            console.log(err)
        })
    }

    // const schemaObj = Yup.object({
    //     email: Yup.string().required(),
    // });

    return (
        <div>
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
                        <div className="well mb-3">Forgot your Password</div>  
                            <form onSubmit={handleSubmit}>
                                <input
                                    className="custom_text_input form-control"
                                    name="email"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    fullWidth={true}
                                    label="Email"
                                    // onBlur={handleBlur}
                                    as={TextField}
                                />
                                <Button className="but-login" type="submit">
                                    Send Email
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
