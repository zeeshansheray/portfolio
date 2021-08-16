import React from 'react'

import Zoom from 'react-reveal/Zoom';

export default function Contact() {

    const date = new Date();

    const [show, setShow] = React.useState(false);

    React.useEffect(()=>{
        setShow(true);
    },[])

    return (
            <div id="Contact">
              <Zoom bottom duration={1500} delay={500}>
                <div className="topHeading text-center">
                    Contact Me
                </div>
                <div className="row contents">
                    <div className="description col-12 col-md-6"> 
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </div>
                </div>
                <div className="getInTouchBox text-center">
                        <a target="_blank" href="mailto:zeeshansheray1@gmail.com" className="getInTouchButton">Say Hello!</a>
                </div>
                <div className="greetText text-center">
                    Zeeshan Sheray®
                    <div className="date">
                    {date.toLocaleDateString('en-US')}
                    </div>
                </div>
                </Zoom>
            </div>
    )
}
