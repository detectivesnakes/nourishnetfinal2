import React from "react";
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <div>
            <div class='anim_gradient'>
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-4"><b>Featured Recipes</b></h1>
                            <hr className="w-25 mx-auto" />
                            <div className="container my-5 py-5">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div class="card p-3">
                                            <div class="card-body text-center">
                                                <Link to={`/recipe/663aebe45d2644a9d1aca52b`}>
                                                    <h5 class="card-title fw-bold">Curry Rice</h5>
                                                </Link>
                                                <p class="card-text lead">By chris</p>
                                                <img src="/assets/curry.jpg" alt="About" className="w-25" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div class="card p-3">
                                            <div class="card-body text-center">
                                                <Link to={`/recipe/663ad7b3ccc4037db1e6178f`}>
                                                    <h5 class="card-title fw-bold">BLT Wrap</h5>
                                                </Link>
                                                <p class="card-text lead">By admin</p>
                                                <img src="/assets/blt.jpg" alt="About" className="w-25" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div class="card p-3">
                                            <div class="card-body text-center">
                                                <Link to={`/recipe/663aece25d2644a9d1aca534`}>
                                                    <h5 class="card-title fw-bold">Rice and Beans</h5>
                                                </Link>
                                                <p class="card-text lead">By chris</p>
                                                <img src="/assets/rice.jpg" alt="About" className="w-25" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;