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
                        <p className="lead mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempora doloribus alias dolorum illo quis vel laborum amet! Adipisci, obcaecati asperiores omnis atque sunt vero reprehenderit quae fuga facere amet id. Blanditiis porro nam eaque reprehenderit voluptates rem consequatur. Nihil eius mollitia aspernatur temporibus voluptatibus dolorem iste. Voluptatem, ut cumque molestias, laboriosam aspernatur quas ipsa, unde totam ea fuga exercitationem sapiente inventore minus. Optio ad molestiae unde labore quas est odit? Ullam sapiente aliquam mollitia fuga sed eveniet, iste placeat.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default About;