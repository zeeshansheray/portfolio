/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'

import TypeWriter from 'typewriter-effect';


import Lottie from 'lottie-web';
import AnimatedCursor from "react-animated-cursor"

import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';


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
                {/* <div className="detail">
                        Zeeshan Ali
                </div>        */}
            </div>
            <div className="introText">
                <Fade left>
                    <div className="leftText">
                            Who am I<div class="questionMark">?</div> 
                        </div>
                        <TypeWriter 
                            onInit={(typewriter)=>{typewriter.typeString('Web Developer.').callFunction(()=>{})
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
                </Fade>
                <Flip top>
                    <div className="lottieBox">
                        <div className="lottie" ref={lottieRef}>

                    </div>
                </div>
            </Flip>
            </div>
            <div className="arrowLottieBoxUp" id="arrowLottie">
                <div className="arrowLottieUp" ref={arrowLottieUpRef}>
                </div>
            </div>
            <div className="arrowLottieBoxDown" id="arrowLottie">
                <div className="arrowLottieUp" ref={arrowLottieDownRef}>
                </div>
            </div>
        </div>
    )
}

export default Homepage;


{/* <SvgIcons.Blacky height="inherit" width="inherit" color={darkMode ? '#757575' : '#000000'}/> */}