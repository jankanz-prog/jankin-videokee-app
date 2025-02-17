import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="contact-form">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
