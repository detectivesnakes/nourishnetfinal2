import React from 'react'

const About = () => {
  return (
    <div class="anim_gradient">
        <section>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/clipart_0.png" alt='embed' class="w-3 h-3"/>
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-6">Our Mission</h1>
                        <hr className="w-50"/>
                        <p className="lead mb-4">Here at NourishNet, we pride ourselves on providing you with the tools you'll need to give you control of your diet!

                        You don't need to create an account to search our recipe book. We swear! Accounts are only necessary to add to the database, or save your preferences.

                        With an ever expanding userbase, we're eager to lend our helping hand to the online culinary world!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default About;