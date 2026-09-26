import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    formData.fullname.trim() &&
    formData.message.trim() &&
    isEmailValid(formData.email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    setStatus('submitting');

    try {
      const response = await fetch('https://getform.io/f/bdrnjnjb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if(!response.ok) throw new Error(`Form endpoint returned ${response.status}`);

      // Clear the form
      setFormData({ fullname: '', email: '', message: '' });
      setStatus('success');
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <article className="contact active">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44994.220705928434!2d5.674340591754503!3d45.18428659082372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af48bd689be6f%3A0x618c10cd6e995398!2sGrenoble!5e0!3m2!1sen!2sfr!4v1745584521245!5m2!1sen!2sfr"
            width="400"
            height="300"
            loading="lazy"
            title="Google Maps Location"
          />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleChange}
              autoComplete="name"
              required
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            className="form-btn"
            type="submit"
            disabled={!isFormValid || status === "submitting"}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
          </button>

          {status === "success" && <p className="form-status success" role="status">Message sent - Thanks, I'll get back to you soon.</p>}
          {status === "error" && <p className="form-status error" role="alert">Something went wrong. Please try again or email me directly.</p>}
        </form>
      </section>
    </article>
  );
};

export default Contact;
