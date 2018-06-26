import React from 'react';

const Contact = () => (
    <section id="contact" className="text-center sections">
        <div className="container">
            <h1 className="sections-h1">Contact Me</h1>
            <h2>Let's get in touch</h2>
            <div id="contact-body">
                <div className="row">
                    <div className="col-2">
                        <i className="fas fa-envelope fa-3x"></i>
                    </div>
                    <div className="col-10">
                        <h3>itsyousras@gmail.com</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                    <i className="fas fa-phone fa-3x"></i>
                    </div>
                    <div className="col-10">
                        <h3>5149006587</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                    <i className="fab fa-github fa-3x"></i>
                    </div>
                    <div className="col-10">
                        <h3>@yousrasdn</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                    <i className="fab fa-twitter fa-3x"></i>
                    </div>
                    <div className="col-10">
                        <h3>@8srayou</h3>
                    </div>
                </div>
                
            
            </div>
        </div>
        <div id="footer">
            <div className="container">
                Copyright @2018 Yousra Saidani
            </div>
        </div>
    </section>
);

export default Contact;