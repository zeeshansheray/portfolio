/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'

import TypeWriter from 'typewriter-effect';


import Lottie from 'lottie-web';
import AnimatedCursor from "react-animated-cursor"

import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import SvgIcons from '../icons/SvgIcons';

const Homepage = ({className}) => {

    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeFunc = () => {
        setDarkMode(!darkMode);
        console.log('Hello')
    }

    const lottieRef = React.useRef(null);
    const arrowLottieUpRef = React.useRef(null);
    const arrowLottieDownRef = React.useRef(null);

    useEffect(()=>{
        Lottie.loadAnimation({
            container: lottieRef.current, 
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../icons/lottie.json'),
            
        })
    },[])

    useEffect(()=>{
        Lottie.loadAnimation({
            container: arrowLottieUpRef.current, 
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../icons/arrowUp.json'),
            
        })
    },[])

    useEffect(()=>{
        Lottie.loadAnimation({
            container: arrowLottieDownRef.current, 
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../icons/arrowUp.json'),
            
        })
    },[])

    return (
        <div id="main" className={darkMode ? 'darkTheme' : 'lightTheme' }>
            <AnimatedCursor
                innerSize={8}
                outerSize={20}
                color={!darkMode ? '32, 190, 234' : '255,255,255'}
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
            />
            <div className="row toggleRow">
               <Fade right>
                <div className={`toggleSwitch ${darkMode ? 'darkMode' : 'lightMode'}`} onClick={handleDarkModeFunc} >
                        <div className="selectCircle">  
                        </div>
                        <span className="modeIcon">
                        { darkMode ?
                                <SvgIcons.lightMode/>
                                :
                                <SvgIcons.darkMode/>
                            }
                        </span>
                    </div>
               </Fade>
            </div>
            <Fade left>
            <div className="introText">
                <div className="greetText">
                    Hi, my name is
                </div>
                        <div className="leftText">
                            Zeeshan Ali. 
                        </div>
                        <div className="d-flex">
                            <span className="Typewriter">I 'm a&nbsp;</span>
                            <TypeWriter 
                                onInit={(typewriter)=>{typewriter.typeString('Software Engineer.').callFunction(()=>{})
                                    .pauseFor(3000)
                                    .deleteAll()
                                    .typeString('Freelancer.')
                                    .pauseFor(3000)
                                    .deleteAll()
                                    .start() ;        
                                }}  
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                }}
                            />
                        </div>
            </div>
            <div className="descriptionText">
                I am an ardent software engineer having extensive React JS experience with an eager to learn and master new technologies.
                <br/>
                Currently working at this role for <a className="currentComapnyName" target="_blank" href="http://www.isystematic.com.pk/">Isystematic LLC.</a>
            </div>
            <div className="resumeDownloadBox">
                    <a className="downloadResumeBtn" href="/pdf/ZeeshanResume.pdf" download>Download Resume</a>
            </div>
            </Fade>
            <Slide bottom>
                    <div className="socialIconsLeft">
                        <span className="singleIcon">
                            <SvgIcons.FacebookIcon/>
                        </span>
                        <span className="singleIcon">
                            <SvgIcons.InstagramIcon/>
                        </span>
                        <span className="singleIcon">
                            <SvgIcons.LinkedInIcon/>
                        </span>
                        <span className="singleIcon">
                            <SvgIcons.GitHubIcon/>
                        </span>
                        <div className="bar">
                        </div>
                    </div>
                    <div className="emailRightSection">
                        <span className="email">
                            zeeshansheray1@gmail.com
                        </span>
                        <div className="bar"></div>
                    </div>
                </Slide>
        </div>
    )
}

export default Homepage;
