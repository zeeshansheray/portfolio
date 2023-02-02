import React from 'react'

import ProfilePicture from '../images/zeeshan.png';

import Fade from 'react-reveal/Fade';

export default function About() {

    const [show, setShow] = React.useState(false);

    React.useEffect(()=>{
        setShow(true);
    },[])

    return (
        <div id="About">
        <Fade when={show} duration={1500} delay={500} left>
            <div className="topHeading text-left">
                About Me
            </div>
            <div className="row contents"> 
                <div className="col-12 col-md-6 aboutMe">
                    Hello! My name is Zeeshan Ali.
                    I am a person who has always had a great passion and determination for areas requiring an
                    analytical approach and logical thinking.<br/><br/>
                    As time went on, my qualifications increased, and my interest became more specific. Just after my
                    high school degree, I was determined to pursue Computer Science as my field for higher studies.
                    <br/><br/>
                    Here are a few technologies I've been working with recently:    
                    <br/><br/>
                    <div className="d-flex">
                        <div className="leftList">
                            <div className="technology">JavaScript (ES6+)</div>
                            <div className="technology">React JS</div>
                            <div className="technology">Node JS</div>
                        </div>
                        <div className="rightList">
                            <div  className="technology" >Mongo db</div>
                            <div className="technology">HTML5</div>
                            <div className="technology">Ghost CMS</div>
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

            <div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style={{display: 'inline-block'}}>
                <a itemprop='url' href="https://www.fiverr.com/zeeshansheray7" rel="nofollow" target="_blank" style={{display: 'inline-block'}}>
                    <div class='fiverr-seller-content' id='fiverr-seller-widget-content-2f700be4-ff02-46cf-9d63-94213745c6a0' itemprop='contentURL' style={{display: 'none'}}></div>
                    <div id='fiverr-widget-seller-data' style={{display: 'none'}}>
                        <div itemprop='name' >zeeshansheray7</div>
                        <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
                        <div itemprop='jobtitle'>Seller</div>
                        <div itemprop='description'>I'm a full-time software engineer with a passion for coding and problem-solving. When I'm not working on complex software projects, I love to keep my skills sharp and stay up-to-date with the latest technologies. In my free time, I enjoy playing video games, reading about the latest advancements in technology, and working on personal programming projects. I also have a background in graphic design, which allows me to bring a creative touch to my software projects and ensure they not only function well but also look great. Let's create something amazing together!</div>
                    </div>
                </a>
            </div>


            </Fade>
        </div>
    )
}
