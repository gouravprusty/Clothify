import { useState } from 'react';
import './CSS/Contact.css';

export default function Contact() {
    let [formData, setFormData] = useState({name: '', mail: '', subject: '', message: ''})
    let handleChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;
        setFormData((currectData) => {
            return{...currectData, [fieldName]:newValue};
        })
    };
    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({name: '', mail: '', subject: '', message: ''});
    };

    return(
        <div className="contact-page">
            <div className="container">
                <div className="contact__inner">
                    <div className="contact__left">
                        <h1 className='page-heading'>Get in Touch with Us!</h1>
                        <p className='contact__para'>We’re here to help! Whether you have a question about your order, need assistance with our products, or just want to share your feedback, we’d love to hear from you. At Clothify, customer satisfaction is our top priority.</p>
                        <h3 className='contact__sub-head'>Contact Information</h3>
                        <div className="contact__info">
                            <div className="contact_info__box">
                                <h4>Customer Support:</h4>
                                <ul>
                                    <li><a href="tel:1234567890">Phone: +1-234-567-890</a></li>
                                    <li><a href="mailto:support@clothify.com">Email: support@clothify.com</a></li>
                                    <li>Available: Monday to Friday, 9 AM - 6 PM</li>
                                </ul>
                            </div>
                            <div className="contact_info__box">
                                <h4>Business Inquiries:</h4>
                                <ul>
                                    <li><a href="mailto:business@clothify.com">Email: business@clothify.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact__info">
                            
                        </div>
                        <h3 className='contact__sub-head'>Social Media</h3>
                        <div className="contact__info">
                            <div className="contact_info__box">
                                <h4>Connect with us on social media for the latest updates, deals, and more!</h4>
                                <ul>
                                    <li><a target='_blank' href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i> Instagram: @clothify</a></li>
                                    <li><a target='_blank' href="https://www.facebook.com/"><i className="fa-brands fa-square-facebook"></i> Facebook: @clothify</a></li>
                                    <li><a target='_blank' href="https://x.com/?lang=en"><i className="fa-brands fa-square-x-twitter"></i> Twitter: @clothify</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="contact__right">
                        <h4>Send us a message:</h4>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="contact-form__field">
                                <label htmlFor="name_input">Name:</label>
                                <input name='name' id='name_input' type="text" placeholder='Enter your name' required value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="contact-form__field">
                                <label htmlFor="email_input">Email:</label>
                                <input name='mail' id='email_input' type="email" placeholder='Enter email address' required value={formData.mail} onChange={handleChange} />
                            </div>
                            <div className="contact-form__field">
                                <label htmlFor="subject_input">Subject:</label>
                                <input name='subject' id='subject_input' type="text" placeholder='Enter your subject' required value={formData.subject} onChange={handleChange} />
                            </div>
                            <div className="contact-form__field">
                                <label htmlFor="message_input">Message:</label>
                                <textarea name="message" id="message_input" placeholder='Enter your message' required rows='5' value={formData.message} onChange={handleChange}></textarea>
                            </div>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};
