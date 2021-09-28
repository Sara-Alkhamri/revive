import React from 'react';
import barrera from '../barrera-logo.jpg'
import healthy from '../healthy.png'

export default function clients() {
    return (
        <div className="clients-container">
            <div className="clients">
                <h3>These guys would recommend us</h3>
                <a href="https://www.barrerafinancial.com/" target="_blank">
                    <img src={barrera} alt="barrera logo" className="img-fluid" />
                </a>
                <a href="https://icreatehealthy.com/" target="_blank">
                    <img src={healthy} alt="I create healthy logo" className="img-fluid" />

                </a>
            </div>
        </div>
    )
}
