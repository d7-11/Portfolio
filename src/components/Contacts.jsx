import React, { useState } from "react";
import './Contacts.css';
import headerLine from '../img/headerLine.png'

function Contacts() {
    //Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState('');

    //Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate a form submission response
        console.log('Form submitted:', formData);

        setFormStatus('Thank you! Your message has been sent.');

        // Reset the form after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section className="contacts">
            <h1><img src={headerLine} alt="line" className="contacts-img"/>Let's Talk</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input 
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input 
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button className="btn-send" type="submit">Send</button>
            </form>

            {/* Form Status Message */}
            {formStatus && <p className="form-status">{formStatus}</p>}
        </section>
    );
}

export default Contacts;