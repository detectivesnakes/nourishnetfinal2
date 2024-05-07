import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-2">
                            <h5>Quick Links</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <NavLink to="/" className="nav-link p-0 text-black">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/recipes" className="nav-link p-0 text-black">
                                        Recipes
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/services" className="nav-link p-0 text-black">
                                        Features
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-3">
                            <h5>Need Help?</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <NavLink to="/faq" className="nav-link p-0 text-black">
                                        FAQ
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/about" className="nav-link p-0 text-black">
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/contact" className="nav-link p-0 text-black">
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-4 offset-3">
                            <img src="/assets/clipart_0.png" width={120} height={120} alt="About" className="offset-8"/>
                        </div>
                    </div>
                </footer>
            </div>
        </footer>
    );
}

export default Footer;