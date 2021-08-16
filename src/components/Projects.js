import React from 'react'

import SvgIcons from '../icons/SvgIcons';

export default function Projects() {

    const projects = [
        // {
        //     title : 'Snap That Home Landing',
        //     detail: 'Snap that home is an Australian based property sale/purchase website.',
        //     websiteLink: 'https://snapthathome.com.au/',
        //     githubLink: '',
        //     image: '/images/snapthathome.png',
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
        {
            title : 'Intelligent Tour Companion',
            detail: 'Intelligent tour companion allows you to plan tours across Pakistan. Either automated or manual way.',
            websiteLink: 'https://github.com/zeeshansheray/itourplannerfrontend',
            githubLink: 'https://github.com/zeeshansheray/itourplannerfrontend',
            image: '',
            active: false,
        },
        {
            title : 'Beasty Landing',
            detail: 'Beasty is a white-label product that allows users to redeem coupons from Walletly website.',
            websiteLink: 'https://www.beasty.app/',
            githubLink: '',
            image: '/images/beasty.png',
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
                <div className="projectContainer">
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
                                            {/* <div className="footerContent" onClick={()=>openUrl(project.githubLink)}>
                                                <SvgIcons.FlipIcon/>
                                            </div> */}
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
