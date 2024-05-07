import React from 'react'

const About = () => {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/clipart_0.png" alt="About"
                        className="w-50 mt-5" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-6">Our Mission</h1>
                        <hr className="w-50"/>
                        <p className="lead mb-4">Here at NourishNet, we pride ourselves on providing you with the tools you'll need to give you control of your diet!
                        With #NULL users and climbing, we can't wait to lend our helping hand to the culinary world! 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default About;