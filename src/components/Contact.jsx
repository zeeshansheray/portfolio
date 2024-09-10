import React from 'react'

export default function Contact() {

    const date = new Date();
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

    const [show, setShow] = React.useState(false);

    React.useEffect(()=>{
        setShow(true);
    },[])

    return (
            <div id="Contact">
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
                    Zeeshan Ali®
                    <div className="date">
                    {date.getDate() + '-' + month[date.getMonth()] + ',' + date.getFullYear()}
                    </div>
                </div>
            </div>
    )
}
