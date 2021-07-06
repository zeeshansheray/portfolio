/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'

import TypeWriter from 'typewriter-effect';


import Lottie from 'lottie-web';
import AnimatedCursor from "react-animated-cursor"

import SvgIcons from '../icons/SvgIcons';

const Main = () => {

    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeFunc = () => {
        setDarkMode(!darkMode);
    }

    const lottieRef = React.useRef(null);

    useEffect(()=>{
        Lottie.loadAnimation({
            container: lottieRef.current, 
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../icons/lottie.json'),
            
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
            <div className="row toggleRow justify-content-flex-end">
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
            </div>
            <div className="introText">
                    <div className="leftText">
                        I'm a
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
            </div>
            <div className="row lottieBox">
                <div className="lottie" ref={lottieRef}>

                </div>
            </div>
        </div>
    )
}

export default Main;


{/* <SvgIcons.Blacky height="inherit" width="inherit" color={darkMode ? '#757575' : '#000000'}/> */}