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

                        <section id="home">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 mt-4 mb-2">
                                        <h1 className="display-4 fw-bolder mb-2 text-center">Q: Is this site free?</h1>
                                        <h2 className="lead text-center fs-4">Yes! Every feature on our website is free of charge</h2>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="home">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 mt-4 mb-2">
                                        <h1 className="display-4 fw-bolder mb-2 text-center">Q: Lorem Ipsum</h1>
                                        <h2 className="lead text-center fs-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia distinctio, natus magnam ducimus ipsam maiores?</h2>
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