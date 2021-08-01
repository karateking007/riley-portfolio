import React from "react";
import mail from '../img/mail.png';

function Contact() {
    return (
        <section className="d-flex align-items-center p-0 p-md-5 py-5">
            <div className="container d-flex flex-column align-items-center">
                <div>
                    <h2 className="text-center text-light text-uppercase">Contact</h2>
                    <div className="line mb-4"></div>
                </div>
                <img
                    className="mail-graphic mt-4"
                    src={mail}
                    alt=""
                />
                <button className="btn btn-blue mt-5" data-bs-toggle="modal" data-bs-target="#message">Send A Message</button>
            </div>
            {/* Modal */}
            <div class="modal fade bg-dark" id="message" tabindex="-1" aria-labelledby="messageLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="messageLabel">Send A Message</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
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
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-green mx-auto" id="contact-button">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;