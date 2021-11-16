import React, { useState } from 'react'
import { Axios, db } from '../firebase/firebaseConfig'
import './styled.scss'

const ContactForm = () => {
    const [formData, setFormData] = useState({})

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }
    const sendEmail = () => {
        Axios.post(
            'https://us-central1-revive-2e0d3.cloudfunctions.net/submit/',
            formData
        )
            .then(res => {
                db.collection('emails').add({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date(),
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (

        <div className="contact-form">
            <h1 style={{ 'color': '#ff5757' }}>Ready to Get Started?</h1>
            <h1 style={{ 'color': '#1969a8' }}>Or Have More Questions?</h1>
            <h5>Please use the form below to reach out to our team with any information about your project you’d like to share or questions you have. <br>
            </br>We respond to all emails within 1-2 business days.</h5>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={updateInput}
                    value={formData.name || ''}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={updateInput}
                    value={formData.email || ''}
                />
                <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    onChange={updateInput}
                    value={formData.message || ''}
                ></textarea>
                <button className="btn" type="submit" style={{ 'background-color': '#ff5757' }}>Submit</button>
            </form>
        </div>


    )
}

export default ContactForm