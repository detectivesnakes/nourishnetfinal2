import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const [msg, setMsg] = useState({
        name: '',
        email: '',
        message: ''
    });

    // handle change
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setMsg({...msg, [name]:value});
    }

    // handle submissions
    const handleSubmit = async(event) => {
        event.preventDefault();
        const {name, email, message} = msg;
        try {
            // push port 3001 instead of 3000 (backend)
            const res = await fetch ('/message', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, message
                })
            })

            if(res.status === 400 || !res){
                window.alert ("Message Error")
            } else {
                window.alert("Message Sent");
                setMsg({
                    name: '',
                    email: '',
                    message: ''
                })
                navigate('/');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <section id='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='fs-5 text-center mt-4 mb-0'>Need Help?</h3>
                            <h1 className='display-6 text-center mb-4'>Contact Us!</h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src='/assets/clipart_1.png' alt='Contact' className='w-75' />
                        </div>
                        <div className='col-md-6 mb-4'>
                            <form onSubmit={handleSubmit} method="POST">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        name="name"
                                        value={msg.name}
                                        onChange={handleChange}
                                        />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Your Email</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                        name="email"
                                        value={msg.email}
                                        onChange={handleChange}
                                        />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Your Question</label>
                                    <textarea
                                        class="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="5"
                                        placeholder="Ask Away!"
                                        name="message"
                                        value={msg.message}
                                        onChange={handleChange}
                                        />
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Submit
                                <i className="fa fa-paper-plane ms-2"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;