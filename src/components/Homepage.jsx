import React, { useState, useEffect } from 'react';
import TypeWriter from 'typewriter-effect';
import Particle from './Particle';
import Lottie from 'lottie-web';
import AnimatedCursor from "react-animated-cursor";

import SvgIcons from '../icons/SvgIcons';
import Resume from '../pdf/ZeeshanResume.pdf';

// Import JSON animations as ES modules
import lottieAnimationData from '../icons/lottie.json';
import arrowUpAnimationData from '../icons/arrowUp.json';

const Homepage = () => {

    const lottieRef = React.useRef(null);
    const arrowLottieUpRef = React.useRef(null);
    const arrowLottieDownRef = React.useRef(null);

    useEffect(() => {
        Lottie.loadAnimation({
            container: lottieRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: lottieAnimationData,
        });
    }, []);

    useEffect(() => {
        Lottie.loadAnimation({
            container: arrowLottieUpRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: arrowUpAnimationData,
        });
    }, []);

    useEffect(() => {
        Lottie.loadAnimation({
            container: arrowLottieDownRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: arrowUpAnimationData,
        });
    }, []);

    const SocialIcons = [
        {
            icon: <SvgIcons.FiverrIcon />,
            link: 'https://www.fiverr.com/zeeshansheray7',
        },
        {
            icon: <SvgIcons.InstagramIcon />,
            link: 'https://www.instagram.com/im_zeeshansheray/',
        },
        {
            icon: <SvgIcons.FacebookIcon />,
            link: 'https://www.facebook.com/zeeshansheray7/',
        },
        {
            icon: <SvgIcons.LinkedInIcon />,
            link: 'https://www.linkedin.com/in/zeeshansheray/',
        },
        {
            icon: <SvgIcons.GitHubIcon />,
            link: 'https://github.com/zeeshansheray',
        }
    ];

    const handleSocialLink = (socialLink) => {
        window.open(socialLink, '_blank');
    };

    return (
        <div id="main">
            <AnimatedCursor
                innerSize={8}
                outerSize={20}
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
            />
            <Particle />
            <div className="introText">
                <div className="greetText">Hi, my name is</div>
                <div className="leftText">Zeeshan Ali.</div>
                <div className="d-flex typeWriterTextBox">
                    <span className="TypewriterBefore">I'm a</span>
                    <TypeWriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Software Engineer.')
                                .pauseFor(3000)
                                .deleteAll()
                                .typeString('Freelancer.')
                                .pauseFor(3000)
                                .deleteAll()
                                .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 150,
                        }}
                    />
                </div>
            </div>
            <div className="descriptionText col-md-9 col-sm-12 col-xs-12">
                I am an ardent software engineer having extensive Javascript experience with an eager to learn and master new technologies.
                <br /> <br />
                Currently working at this role for <a className="currentComapnyName" target="_blank" href="https://www.aku.edu/">Aga Khan University.</a>
            </div>
            <div className="resumeDownloadBox">
                <a className="downloadResumeBtn" href={Resume} download>Download Resume</a>
            </div>
            <div className="socialIconsLeft">
                {SocialIcons.map((element, idx) =>
                    <span className="singleIcon" key={idx} onClick={() => handleSocialLink(element.link)}>
                        {element.icon}
                    </span>
                )}
                <div className="bar"></div>
            </div>
            <div className="emailRightSection">
                <span className="email" onClick={() => handleSocialLink('mailto:zeeshansheray1@gmail.com')}>
                    zeeshansheray1@gmail.com
                </span>
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default Homepage;
