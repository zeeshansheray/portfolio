import React from 'react'

import TypeWriter from 'typewriter-effect';

import '../assets/css/main.scss'

import sample from '../background.mp4';

export default function main() {
    return (
        <div id="main" className="">
            <section>
                <div className="row video">
                    <video 
                    loop 
                    autoPlay
                    muted
                    >
                     <source src={sample} type="video/mp4"/>
                    </video>
                    <div className="videoText">
                        <span className="leftText">
                            Coding is&nbsp;
                        </span>
                        <TypeWriter 
                            onInit={(typewriter)=>{
                                typewriter
                                    .typeString('easy')
                                    .callFunction(()=>{
                                    
                                    })
                                    .pauseFor(3000)
                                    .deleteAll()
                                    .typeString('a journey')
                                    .pauseFor(3000)
                                    .deleteAll()
                                    .start() ;        
                            }}  
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 200,
                            }}

                        />
                     </div>
                </div>
            </section>
        </div>
    )
}
