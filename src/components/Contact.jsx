import React from "react";
import mail from '../img/mail.png';

function Contact() {
    return (
        <section className="d-flex align-items-center p-0 p-md-5 py-5">
            <div className="container">
                <h2 className="text-center text-light text-uppercase">Contact</h2>
                <div className="line mb-4"></div>
                <div className="row" id="contact-row">
                    <div className="col-md-6 d-flex justify-content-center">
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
                            <div className="center-btn"><button type="submit" class="btn btn-green mx-auto">Submit</button></div>

                        </form>
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