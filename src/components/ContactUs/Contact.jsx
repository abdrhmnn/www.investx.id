import React from 'react';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import Ojk from '../shared/Ojk';

import phoneIcon from '../../images/phoneicon.svg';
import emailIcon from '../../images/emailicon.svg';

export default function Contact() {
    
    window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="text-center mb-3" style={{marginTop:"150px"}}>
                    <h2>
                        REACH US IN
                    </h2>
                </div>
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <h5>
                            <img src={phoneIcon} alt="" style={{height:"25px", paddingBottom:"3px"}}/>
                            {" Call"}
                        </h5>
                        <p>(022) 8750 7088</p>
                    </div>
                    <div className="col-4">
                        <h5>
                            <img src={emailIcon} alt="" style={{height:"25px", paddingBottom:"3px"}}/>
                            {" Email"}
                        </h5>
                        <p>consult@sagara.asia</p>
                    </div>
                    <div className="col-4">
                        <h5>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNLjA1NyAyNGwxLjY4Ny02LjE2M2MtMS4wNDEtMS44MDQtMS41ODgtMy44NDktMS41ODctNS45NDYuMDAzLTYuNTU2IDUuMzM4LTExLjg5MSAxMS44OTMtMTEuODkxIDMuMTgxLjAwMSA2LjE2NyAxLjI0IDguNDEzIDMuNDg4IDIuMjQ1IDIuMjQ4IDMuNDgxIDUuMjM2IDMuNDggOC40MTQtLjAwMyA2LjU1Ny01LjMzOCAxMS44OTItMTEuODkzIDExLjg5Mi0xLjk5LS4wMDEtMy45NTEtLjUtNS42ODgtMS40NDhsLTYuMzA1IDEuNjU0em02LjU5Ny0zLjgwN2MxLjY3Ni45OTUgMy4yNzYgMS41OTEgNS4zOTIgMS41OTIgNS40NDggMCA5Ljg4Ni00LjQzNCA5Ljg4OS05Ljg4NS4wMDItNS40NjItNC40MTUtOS44OS05Ljg4MS05Ljg5Mi01LjQ1MiAwLTkuODg3IDQuNDM0LTkuODg5IDkuODg0LS4wMDEgMi4yMjUuNjUxIDMuODkxIDEuNzQ2IDUuNjM0bC0uOTk5IDMuNjQ4IDMuNzQyLS45ODF6bTExLjM4Ny01LjQ2NGMtLjA3NC0uMTI0LS4yNzItLjE5OC0uNTctLjM0Ny0uMjk3LS4xNDktMS43NTgtLjg2OC0yLjAzMS0uOTY3LS4yNzItLjA5OS0uNDctLjE0OS0uNjY5LjE0OS0uMTk4LjI5Ny0uNzY4Ljk2Ny0uOTQxIDEuMTY1LS4xNzMuMTk4LS4zNDcuMjIzLS42NDQuMDc0LS4yOTctLjE0OS0xLjI1NS0uNDYyLTIuMzktMS40NzUtLjg4My0uNzg4LTEuNDgtMS43NjEtMS42NTMtMi4wNTktLjE3My0uMjk3LS4wMTgtLjQ1OC4xMy0uNjA2LjEzNC0uMTMzLjI5Ny0uMzQ3LjQ0Ni0uNTIxLjE1MS0uMTcyLjItLjI5Ni4zLS40OTUuMDk5LS4xOTguMDUtLjM3Mi0uMDI1LS41MjEtLjA3NS0uMTQ4LS42NjktMS42MTEtLjkxNi0yLjIwNi0uMjQyLS41NzktLjQ4Ny0uNTAxLS42NjktLjUxbC0uNTctLjAxYy0uMTk4IDAtLjUyLjA3NC0uNzkyLjM3MnMtMS4wNCAxLjAxNi0xLjA0IDIuNDc5IDEuMDY1IDIuODc2IDEuMjEzIDMuMDc0Yy4xNDkuMTk4IDIuMDk1IDMuMiA1LjA3NiA0LjQ4Ny43MDkuMzA2IDEuMjYzLjQ4OSAxLjY5NC42MjYuNzEyLjIyNiAxLjM2LjE5NCAxLjg3Mi4xMTguNTcxLS4wODUgMS43NTgtLjcxOSAyLjAwNi0xLjQxMy4yNDgtLjY5NS4yNDgtMS4yOS4xNzMtMS40MTR6Ii8+PC9zdmc+" alt="" style={{height:"25px", paddingBottom:"3px"}}/>
                            {" Whatsapp"}
                        </h5>
                        <p>+62 856-4097-7356</p>
                    </div>
                </div>
                {/* JAKARTA */}
                <div className="text-center col-md-6 offset-md-3" style={{marginTop: "50px", marginBottom:"30px"}}>
                    <h4 style={{fontSize: "14px"}}>
                        JAKARTA, ID - BUSINESS OFFICE
                        <br/>
                        <span style={{color:"blue"}}>
                            Equity Tower Lt.22, Dreamhub
                            Sudirman Central Business District Lot 9 JRT.5,
                            Jl. Jend. Sudirman No.Kav.52-53, RT.5/RW.3, Senayan, Kec. Kby. Baru,
                            Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190
                        </span>
                        
                    </h4>
                </div>
                <div className="addmap" style={{marginBottom: "70px"}}>
                    <div className="container p-0 box-map">
                        <iframe
                            src="https://maps.google.com/maps?q=JAKARTA,%20ID%20-%20BUSINESS%20OFFICE%20Equity%20Tower%20Lt.22,%20Dreamhub%20Sudirman%20Central%20Business%20District%20Lot%209%20JRT.5,%20Jl.%20Jend.%20Sudirman%20No.Kav.52-53,%20RT.5/RW.3,%20Senayan,%20Kec.%20Kby.%20Baru,%20Kota%20Jakarta%20Selatan,%20Daerah%20Khusus%20Ibukota%20Jakarta%2012190&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0"
                            style={{
                                border: "0",
                                width: "100%",
                                height: "330px",
                            }}
                            title="sagaramap"
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0"
                        ></iframe>
                    </div>
                </div>
                
                {/* BANDUNG */}
                <div className="text-center col-md-6 offset-md-3" style={{marginTop: "50px", marginBottom:"30px"}}>
                    <h4 style={{fontSize: "14px"}}>
                        BANDUNG, ID
                        <br/>
                        <span style={{color:"blue"}}>
                            Kiarasari Permai V No 15 B
                            Kiarasari Asri Residence, Buah Batu
                            Bandung, Indonesia. 40286
                        </span>
                        
                    </h4>
                </div>
                <div className="addmap" style={{marginBottom: "70px"}}>
                    <div className="container p-0 box-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5125717360615!2d107.64579891537092!3d-6.948701694979725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e83fb5765d65%3A0xe3bfb9fb2c7588c7!2sSagara%20Technology!5e0!3m2!1sen!2sid!4v1595897960878!5m2!1sen!2sid"
                            frameborder="0"
                            style={{
                                border: "0",
                                width: "100%",
                                height: "330px",
                            }}
                            title="sagaramap"
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer/>
            <Ojk/>
        </>
    )
}
