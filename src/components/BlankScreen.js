import React from 'react'

import Lottie from 'lottie-web';

import Fade from 'react-reveal/Fade';

export default function BlankScreen({className}) {

    // const helloRef = React.useRef(null);

    // React.useEffect(()=>{
    //     Lottie.loadAnimation({
    //         container: helloRef.current, 
    //         renderer: 'svg',
    //         loop: true,
    //         autoplay: true,
    //         animationData: require('../icons/hello.json'),
            
    //     })
    // },[])

    return (
        <div id="Blankscreen" className={className}>
            <div className="Title">
                        {/* Hello    <span className="name">I'm <span className="red-text">Zeeshan</span></span> */}
                <div className="name">
                    {`${'< HELLO />'}`}
                </div>
            </div>
        </div>
    )
}
