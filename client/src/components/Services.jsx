import React from "react";

const Services = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-4"><b>Features</b></h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <div className="fa fa-laptop fa-4x mb-4 text-primary"></div>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">All Digital</h5>
                                    <p class="card-text lead">
                                        No more sticky notes!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <div className="fa fa-thumbs-up fa-4x mb-4 text-primary"></div>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Peer-Rated</h5>
                                    <p class="card-text lead">
                                        See what's hot (and what's not)! </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <div className="fa fa-cogs fa-4x mb-4 text-primary"></div>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Modular Search</h5>
                                    <p class="card-text lead">
                                        Find food to your tastes!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;