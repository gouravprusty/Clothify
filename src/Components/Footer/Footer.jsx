import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return(
        <div className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__top">
                        <div className="footer__top-logo">
                            <div className="footer__logo">
                                <img src="/logo.png" alt="Logo" width="400" height='203' />
                            </div>
                            <p className="footer__logo-text">Clothify brings you the latest trends in fashion with unmatched quality and style. Explore a curated collection for men, women, and kids—all at unbeatable prices. Shop confidently, knowing we prioritize customer satisfaction above all. Your style, our passion!</p>
                        </div>
                        <div className="footer__social">
                            <p className="footer__sub-head">FOLLOW US</p>
                            <ul className='footer__social-list'>
                                <li><a target='_blank' href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i> @clothify</a></li>
                                <li><a target='_blank' href="https://www.facebook.com/"><i className="fa-brands fa-square-facebook"></i> @clothify</a></li>
                                <li><a target='_blank' href="https://x.com/?lang=en"><i className="fa-brands fa-square-x-twitter"></i> @clothify</a></li>
                            </ul>
                        </div>
                        <div className="footer__contact">
                            <p className="footer__sub-head">CONTACT US</p>
                            <ul className='footer__contact-list'>
                                <li><a href="tel:1234567890"><i className="fa-solid fa-phone"></i>+1-234-567-890</a></li>
                                <li><a href="mailto:support@clothify.com"><i className="fa-solid fa-envelope"></i> support@clothify.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <p className="footer__bottom-left">&copy; 2024 Clothify. All Rights Reserved.</p>
                        <p className="footer__bottom-right">
                            <Link to="/policy">Privacy Policy</Link>
                            <Link to="/terms">Terms and conditions</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
