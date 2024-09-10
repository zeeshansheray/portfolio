import React from 'react';

import CustomTimeline from './CustomTimeline'; 

import IsystmaticLogo from '../images/isystematic.png';
import AgaKhanSchoolLogo from '../images/agakhanschool.png';
import ComsatsLogo from '../images/comsats.png';
import AKULogo from '../images/AKU-Logo.png';

export default function Education() {

    
    const [show, setShow] = React.useState(false);

    React.useEffect(()=>{
        setShow(true);
    },[])

    const EducationalJourney = [
        {
            institutionName: 'Aga Khan University',
            location       : 'Karachi',
            study          : 'Programmer Analyst (Dec-2023)',
            icon           : AKULogo,
            website        : 'https://www.aku.edu',
        },
        {
            institutionName: 'Isystematic LLC',
            location       : 'Karachi',
            study          : 'Software Engineer (Feb-2021)',
            icon           : IsystmaticLogo,
            website        : 'http://www.isystematic.com.pk/',
        },
        {
            institutionName: 'COMSATS University',
            location       : 'Islamabad',
            study          : 'Bachelors in Computer Science (2017-2021)',
            icon           : ComsatsLogo,
            website        : 'https://www.comsats.edu.pk/',
        },
        {
            institutionName: 'Aga Khan Higher Secondary School',
            location       : 'Karachi',
            study          : 'Intermediate in Pre-engineering (2014-2016)',
            icon           :  AgaKhanSchoolLogo,
            website        : 'https://www.agakhanschools.org/pakistan/akhsskar/index',
        },
        {
            institutionName: 'S.M.S Aga Khan School',
            location       : 'Karachi',
            study          : 'Matriculation in Science (2001-2014)',
            icon           :  AgaKhanSchoolLogo,
            website        : 'https://www.agakhanschools.org/Pakistan/SMS/Index',
        },
]

    return (
        <div id="Education">
                <div className="topHeading text-center">
                    Work & Education
                </div>
                <div className="row contents">
                    <CustomTimeline content={EducationalJourney}/>
                </div>
        </div>
    )
}
