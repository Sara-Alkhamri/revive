import React from 'react'


export default function Process() {
    return (
        <div className="process-container">
            <div className="process">
                <h1>-the Process</h1>
                <div className="process-list">
                    <h4>Select and Purchase your Package</h4>
                    <p>
                        -  Share blog posts, products, or promotions with your customers.
                    </p>
                    <h4>Creative Review Call</h4>
                    <p>
                        -  Let's meet to talk about your project needs
                    </p>
                    <h4>Send your Branding and Content</h4>
                    <p>
                        -  Including copy, images, and branding
                    </p>
                    <h4>Work on your Website Begins</h4>
                    <p>
                        -  The first page we tackle is always the homepage, laying out your text and images and adding your branding so you can see what your site will look like
                    </p>
                    <h4>Meet to Review hhe Progress on your Website</h4>
                    <p>
                        -  We’ll have our first meeting to review the work that has been done and get your feedback on the site styles
                    </p>
                    <h4>Work Continues</h4>
                    <p>
                        -  The full scope of what we’ll be able to do depends upon the time in your package and how well prepared and clear you are. If you need help getting clarity, please let us know!
                    </p>
                    <h4>Hand-Off</h4>
                    <p>
                        -  Your website goes live and you can share it with the world
                    </p>
                </div>
            </div>

            <div className="packages">
                <h1>-the Packages</h1>

                <h3>Starter Package</h3>
                <h4>$3500</h4>
                <p>
                    + 45-minute Planning Call<br>
                    </br>
                    + 45-minute Content Review Call
                        <br></br>
                    + 20 Hours of Styling Work, Homepage Content Layout + Work on Additional Pages
                        <br></br>
                    + 3 30-minute Meetings Across 5 Days of Work
                </p>


                <h3>Advanced Package</h3>
                <h4>$4500 +</h4>
                <p>
                    + 60-minute Planning Call
                        <br></br>
                    + 60-minute Content Review Call
                        <br></br>
                    + 30 Hours of Styling Work, Homepage Content Layout + Work on Additional Pages
                        <br></br>
                    + 4 30-minute Meetings Across 10 Days of Work
                 </p>

                <button className="btn" type="submit" style={{ 'background-color': '' }}>Work With Us!</button>

            </div>
        </div>
    )
}
