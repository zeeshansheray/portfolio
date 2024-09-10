import React from 'react'

import ProfilePicture from '../images/zeeshan.png';

export default function About() {

    const [show, setShow] = React.useState(false);

    React.useEffect(()=>{
        setShow(true);
    },[])

    return (
        <div id="About">
            <div className="topHeading text-left">
                About Me
            </div>
            <div className="row contents"> 
                <div className="col-12 col-md-6 aboutMe">
                    Hello! My name is Zeeshan Ali.
                    A person who has always had a great passion and determination for areas requiring an
                    analytical approach and logical thinking.<br/><br/>
                    As time went on, my qualifications increased, and my interest became more specific. Just after my
                    high school degree, I was determined to pursue Computer Science as my field for higher studies.
                    <br/><br/>
                    Here are a few technologies I've been working with recently:    
                    <br/><br/>
                    <div className="d-flex">
                        <div className="leftList">
                            <div className="technology">Vanilla JavaScript</div>
                            <div className="technology">React JS</div>
                            <div className="technology">Typescript</div>
                            <div className="technology">Next JS</div>
                        </div>
                        <div className="rightList">
                            <div  className="technology" >Mongo db</div>
                            <div className="technology">Node JS</div>
                            <div className="technology">HTML5</div>
                            <div className="technology">Firebase</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="myPicture">
                      <img className="image" src={ProfilePicture} width="300px" height="300px" alt=""/>
                      <div className="imageBehindBorder">
                      </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
