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
                    <div className="col-md-6 d-flex justify-content-center">
                        <Form />
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center mt-5 mt-md-0"><img
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