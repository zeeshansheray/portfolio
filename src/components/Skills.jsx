import React from 'react'

import reactImg from '../images/skills/react.png'
import htmlImg from '../images/skills/html.png'
import nodeImg from '../images/skills/nodejs.png'
import firebaseImg from '../images/skills/firebase.png'
import mongodbImg from '../images/skills/mongodb.png'
import  gitImg from '../images/skills/git.png'
import javascriptImg from '../images/skills/javascript.png'
import sassImg from '../images/skills/sass.png'
import tailWindImg from '../images/skills/tailwind.png'
import nextImg from '../images/skills/next.png'
import chatbotImg from '../images/skills/chatbot.png'


export default function Skills() {

    const [delay, setDelay] = React.useState(500);

    const skillList = [
        {
            title : 'React js',
            image: reactImg,
        },
        {
            title : 'Next js',
            image: nextImg,
        },
        {
            title : 'Javascript',
            image: javascriptImg,
        },
        {
            title : 'Node js',
            image: nodeImg,
        },
        {
            title : 'HTML',
            image: htmlImg,
        }, 
        {
            title : 'Firebase',
            image: firebaseImg,
        },
        {
            title : 'MongoDb',
            image: mongodbImg,
        },
        {
            title : 'Sass',
            image: sassImg,
        },
        {
            title : 'Tailwind',
            image: tailWindImg,
        },
        {
            title : 'Chatbots',
            image: chatbotImg,
        },
        {
            title : 'Git',
            image: gitImg,
        },
      
    ]

    const [skills, setskills] = React.useState([]);

   React.useEffect(()=>{
    setskills(skillList);    
   },[])


    return (
        <div id="Skills">
           <div className="contents">
            <div className="topHeading text-center">
                    Skills
                </div>
                <div className='d-flex circleContainer'>
                    {skills.map((skill, idx)=>
                        <div className='singleCircle middle'>
                            <img src={skill.image} alt="" height={60} width={60} />
                            <p className='skillTitle' >{skill.title}</p>
                        </div>
                    )}
                    
                </div>
           </div>
        </div>
    )
}
