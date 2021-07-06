/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'

import TypeWriter from 'typewriter-effect';


import SvgIcons from '../icons/SvgIcons';

const Main = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [show, setShow] = useState({
        userDetail : false,
    })

    const handleDarkModeFunc = () => {
        setDarkMode(!darkMode);
        // localStorage.setItem('mode', darkMode);
    }

    const userDetailShowFunc =(e) => {
        setShow({...show, userDetail : true})
    }

    return (
        // <div id="main" onScroll={userDetailShowFunc} className={darkMode ? 'darkTheme' : 'lightTheme' }>
        //     <div className="row toggleRow justify-content-flex-end">
        //         <div className={`toggleSwitch ${darkMode ? 'darkMode' : 'lightMode'}`} onClick={handleDarkModeFunc} >
        //             <div className="selectCircle">  
        //             </div>
        //             <span className="modeIcon">
        //                { darkMode ?
        //                     <SvgIcons.lightMode/>
        //                     :
        //                     <SvgIcons.darkMode/>
        //                 }
        //             </span>
        //         </div>
        //     </div>
        //     <div className="introText">
        //             <div className="leftText">
        //                 I'm a
        //             </div>
        //             <TypeWriter 
        //                 onInit={(typewriter)=>{typewriter.typeString('Web Developer.').callFunction(()=>{})
        //                     .pauseFor(3000)
        //                     .deleteAll()
        //                     .typeString('Freelancer.')
        //                     .pauseFor(3000)
        //                     .deleteAll()
        //                     .start() ;        
        //                 }}  
        //                 options={{
        //                     autoStart: true,
        //                     loop: true,
        //                     delay: 150,
        //                 }}
        //             />
        //     </div>

        //     <div className="row">
        //         <div className="userProfileImg" onClick={userDetailShowFunc}>
        //             <SvgIcons.Blacky color={darkMode ? '#757575' : '#000000'}/>
        //             <h1 class="home-title leftText">
        //                 <span>Zeeshan Ali</span>
        //             </h1>
        //         </div>  
        //     </div>
        // </div>


        <div class="container">
        <div class="container__image" st>
                <div className="ourImage">
                    <SvgIcons.Blacky height="inherit" width="inherit" color={darkMode ? '#757575' : '#000000'}/>
                </div>
          <div class="container__info container__author">Photo by <a class="link" href="https://instagram.com/silvia.diaconescu" target="_blank">Silvia Diaconescu</a></div>
          <div class="container__info container__location">Geneva Lake Switzerland </div>
      
        </div>
      </div>
    )
}

export default Main;
