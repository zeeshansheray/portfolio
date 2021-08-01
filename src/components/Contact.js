import React from 'react'

export default function Contact() {
    return (
        <div id="Contact">
            <div className="topHeading text-center">
                Get in Touch
            </div>
            <div className="row contents">
                 <div className="description"> 
                     Whether you have a question or just want to say hi, I'll try my best to get back to you!
                 </div>
            </div>
            <div className="getInTouchBox text-center">
                    <a target="_blank" href="mailto:zeeshansheray1@gmail.com" className="getInTouchButton">Say Hello!</a>
            </div>
        </div>
    )
}
