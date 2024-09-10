import React from 'react'

import SvgIcons from '../icons/SvgIcons';

import WalletlyImg from '../images/walletly.png'
import SnapThatHomeImg from '../images/snapthathome.png'
import BeastyImg from '../images/beasty.png'
import MintiImg from '../images/minti.png'
import WainoImg from '../images/waino.png'
import RealestateIntegrateImg from '../images/realestateintegrate.png'



export default function Projects() {

    const projects = [
        {
            title : 'Waino',
            detail: 'Discover the best wines.',
            websiteLink: 'https://www.waino.io/',
            githubLink: '',
            image: WainoImg,
            active: false,   
        },
        {
            title : 'RealEstateIntegrate',
            detail: 'Accelerate your real estate business with customizable solutions.',
            websiteLink: 'https://realestateintegrate.com/',
            githubLink: '',
            image: RealestateIntegrateImg,
            active: false,   
        },
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
                <div className="row">
                    {
                        myProjects.map((project, idx)=>
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
                        )
                    }
                </div>
           </div>
        </div>
    )
}
