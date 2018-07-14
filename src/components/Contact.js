import React, { Component } from 'react';
import Header from "./Header";
import Nav from "./Navigation";
import '../css/contact.css';
import axios from 'axios'
import Footer from "./Footer";

class Contact extends Component {

    handleSubmit (e) {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const comment = document.getElementById('contact-comment').value;

        axios.post(`https://formula-test-api.herokuapp.com/contact`, { name,email,comment })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <div className="black-line"></div>
                <Header/>
                <Nav/>
                <main>
                    <div className = "contact-container">
                        <form onSubmit={this.handleSubmit} >
                            <div className="input-area">
                                <div className="input-usr">
                                    <input id = 'contact-name' type = "username" placeholder = 'Your name'/>
                                </div>
                                <div className="input-email">
                                    <input id = 'contact-email' type = "email" placeholder = 'Your email'/>
                                </div>
                                <textarea id = 'contact-comment' placeholder='Comment' />
                            </div>
                            <button className='submit'>Submit</button>
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Contact;