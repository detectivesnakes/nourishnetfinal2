import React from 'react'

const FAQ = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-4"><b>Frequently Asked Questions</b></h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">

                        <section id="faq">
                            <div className="container mt-3 mb-3">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 mt-4 mb-1">
                                        <h1 className="display-4 fw-bolder mb-2 text-center">Q: Is this site free?</h1>
                                        <h2 className="lead text-center fs-4">Yes! Every feature on our website is free of charge</h2>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="faq">
                            <div className="container mt-3 mb-3">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 mt-4 mb-1">
                                        <h1 className="display-4 fw-bolder mb-2 text-center">Q: Do I Need An Account?</h1>
                                        <h2 className="lead text-center fs-4">An account is required to create and submit recipes. For everything else though, no account is required!</h2>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="faq">
                            <div className="container mt-3 mb-3">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 mt-4 mb-1">
                                        <h1 className="display-4 fw-bolder mb-2 text-center">Q: What Is My Data Used For?</h1>
                                        <h2 className="lead text-center fs-4">User preferences aren't stored in our database. As such, we don't do anything with your data.</h2>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="faq">
                            <div className="container mt-3 mb-3">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 mt-4 mb-1">
                                        <h1 className="display-4 fw-bolder mb-2 text-center">Q: Will There Be Ads?</h1>
                                        <h2 className="lead text-center fs-4">Never! Advertisements interrupt and soil the user experience.</h2>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ;