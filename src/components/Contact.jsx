import React from "react";
import Form from "./Form";
import mail from '../img/mail.png';


function Contact() {
    return (
        <section className="d-flex align-items-center p-0 p-md-5 py-5">
            <div className="container">
                <h2 className="text-center text-light text-uppercase">Contact</h2>
                <div className="line mb-4"></div>
                <div className="row" id="contact-row">
                    <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end pe-lg-5">
                        <Form />
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-start mt-5 mb-4 mt-lg-0 ps-lg-5"><img
                        className="mail-graphic img-fluid"
                        src={mail}
                        alt=""
                    /></div>
                </div>
            </div>
        </section>
    );
}

export default Contact;