import React from 'react'

const Home = () => {
    const handleChange = async (event) =>{
        event.preventDefault();
        console.log("HandleChange");
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log("HandleSubmit");
    }

    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                        <form onSubmit={handleSubmit}>
                            <div class="mb-2">
                                <label for="exampleInputEmail1" class="form-label">
                                    Recipe Name
                                </label>
                                <input 
                                    type="text"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    name="recipename"
                                    onChange={handleChange}
                                />
                            </div>
                            <div class="mb-2">
                                <label for="exampleInputPassword1" class="form-label">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    name="description"
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" class="btn btn-primary my-2 mb-3">Create Recipe</button>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;