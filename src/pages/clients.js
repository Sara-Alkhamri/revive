import React, { useState } from 'react';
import barrera from '../barrera-logo.jpg'
import healthy from '../healthy.png'
import pcCoaching from '../pc-coaching.png'

export default function Clients(props) {
    const [title, setTitle] = useState('');

    function handleInput(e) {
        setTitle(e.target.value)
    }

    return (
        <div className="clients-container">
            <h3>Recent Clients</h3>

            <div className="clients">
                <a href="https://www.barrerafinancial.com/" target="_blank">
                    <img src={barrera} alt="barrera logo" className="img-fluid" />
                </a>
                <a href="https://icreatehealthy.com/" target="_blank">
                    <img src={healthy} alt="I create healthy logo" className="img-fluid" />

                </a>
                <a href="https://premiumcoachingsem.wixsite.com/my-site/" target="_blank">
                    <img src={pcCoaching} alt="PC Coaching logo" className="img-fluid" />

                </a>
                <div>{title}</div>
                {/* <input placeholder='Update title' onChange={handleInput} /> */}
                {/* <ul>
                    {props.id}
                    {props.name}
                </ul> */}
            </div>
        </div>
    )
}
