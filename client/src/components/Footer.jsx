import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-3">
                            <h4>FOOTER</h4>
                        </div>

                        <div className="col-2">
                            <h5>Links</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a to="#" className="nav-link p-0 text-black">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to="#" className="nav-link p-0 text-black">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to="#" className="nav-link p-0 text-black">
                                        Services
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-2">
                            <h5>Links</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a to="#" className="nav-link p-0 text-black">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to="#" className="nav-link p-0 text-black">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to="#" className="nav-link p-0 text-black">
                                        Services
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-4 offset-1">
                            <form>
                                <h5>Lorem ipsum dolor sit amet.</h5>
                                <p>CSS here</p>
                            </form>
                        </div>
                    </div>
                </footer>
            </div>
        </footer>
    );
}

export default Footer;