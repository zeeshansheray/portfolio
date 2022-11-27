import React from 'react'

import SvgIcons from '../icons/SvgIcons';

import Fade from 'react-reveal/Fade';

import WalletlyImg from '../images/walletly.png'
import SnapThatHomeImg from '../images/snapthathome.png'
import BeastyImg from '../images/beasty.png'
import MintiImg from '../images/minti.png'


export default function Projects() {

    const [delay, setDelay] = React.useState(500);

    const projects = [
        {
            title : 'Walletly',
            detail: 'Loyalty program offering platform.',
            websiteLink: 'https://walletly.ai/old_version/',
            githubLink: '',
            image: WalletlyImg,
            active: false,   
        },
        {
            title : 'Minti',
            detail: 'Minti is a job finding portal.',
            websiteLink: 'https://minti.ai/',
            githubLink: '',
            image: MintiImg,
            active: false,   
        },
        {
            title : 'Snap That Home',
            detail: 'A property sale/purchase website.',
            websiteLink: 'https://snapthathome.com.au/',
            githubLink: '',
            image: SnapThatHomeImg,
            active: false,
        },
        {
            title : 'Beasty Webstie',
            detail: 'Coupon redeem website',
            websiteLink: 'https://www.beasty.app/',
            githubLink: '',
            image: BeastyImg,
            active: false,
        },
        // {
        //     title : 'Intelligent Tour Companion',
        //     detail: 'Tour Planner (Final Year Project)',
        //     websiteLink: 'https://github.com/zeeshansheray/itourplannerfrontend',
        //     githubLink: 'https://github.com/zeeshansheray/itourplannerfrontend',
        //     image: '',
        //     active: false,
        // },
        
        // {
        //     title : 'Apex Financial Planning',
        //     detail: 'Apex Financial Planning was established to help everyday Australians to take control of their retirement planning and savings.',
        //     websiteLink: 'https://apexfinancialplanning.com.au/',
        //     githubLink: 'https://github.com/zeeshansheray/ApexFinancialPlanning',
        //     image: '/images/apex.png',
        //     active: false,
        // },
    ]

    const [myProjects, setMyProjects] = React.useState([]);

   React.useEffect(()=>{
    setMyProjects(projects);    
   },[])

    const openUrl = (url) => {
        window.open(url,'_blank');
    }

    return (
        <div id="Projects">
           <div className="contents">
            <div className="topHeading text-center">
                    Projects
                </div>
                <div className="projectContainer">
                    {
                        myProjects.map((project, idx)=>
                        <Fade left delay={(idx+1)*500}>
                            <div className={'flip-card col-md-4'}>
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div className="cardTop">
                                            <span>
                                                <SvgIcons.ProjectIcon/>
                                            </span>
                                            <span onClick={()=>openUrl(project.websiteLink)}>
                                                <SvgIcons.LinkIcon/>
                                            </span>
                                        </div>
                                        <div className="middleContent">
                                            <div className="title" onClick={()=>openUrl(project.websiteLink)}>
                                                {project.title}
                                            </div>
                                            <div className="projectDetails">
                                                {project.detail}
                                            </div>  
                                            <div className="imgBox">
                                            <div class="p-browser"><div class="p-circle"></div><div class="p-circle"></div><div class="p-circle"></div></div>
                                                <img className="projectImg" src={project.image} width="100%" height={"100%"} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        )
                    }
                </div>
           </div>
        </div>
    )
}
