import React from "react";
import mail from '../img/mail.png';

function Contact() {
    return (
        <div className="contact">
            <div id="contact-container" className="container">
                <div className="row align-items-center d-flex h-100">

                    <div className="col-lg-5">
                        <h2 className="secondary-headline text-center text-uppercase">Contact</h2>
                        <div className="line mb-3"></div>
                        <h3 className="sub-text text-center">Let's get in touch!</h3>
                        <form name="contact" method="POST" data-netlify="true">
                            <div className="form-group">
                                <label className="form-label mb-1">Name</label>
                                <input className="form-control shadow-none d-block mb-3" type="text" name="name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label mb-1">Company</label>
                                <input className="form-control shadow-none d-block mb-3" type="text" name="company" />
                            </div>
                            <div className="form-group">
                                <label className="form-label mb-1">Email</label>
                                <input className="form-control shadow-none d-block mb-3" type="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label className="form-label mb-1">Message</label><textarea className="form-control shadow-none d-block mb-3" name="message"></textarea>
                            </div>

                            <button id="contact-button" className="btn btn-blue mt-2" type="submit">Submit</button>

                        </form>


                    </div>
                    <div id="contact-right" className="col-lg-7 align-self-center justify-content-center">
                        <img
                            className="mail-graphic img-fluid mt-1"
                            src={mail}
                            alt=""
                        />
                    </div>

                </div>
            </div>
        </div >
    );
}

export default Contact;