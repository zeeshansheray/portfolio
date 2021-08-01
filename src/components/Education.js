import React from 'react';

import CustomTimeline from './CustomTimeline'; 


export default function Education() {

    const EducationalJourney = [
        {
            institutionName: 'COMSATS University',
            location       : 'Islamabad',
            study          : 'Bachelors in Computer Science (2017-2021)',
            icon           : '/images/comsats.png',
            website        : 'https://www.comsats.edu.pk/',
        },
        {
            institutionName: 'Aga Khan Higher Secondary School',
            location       : 'Karachi',
            study          : 'Intermediate in Pre-engineering (2014-2016)',
            icon           : '/images/agakhanschool.png',
            website        : 'https://www.agakhanschools.org/pakistan/akhsskar/index',
        },
        {
            institutionName: 'S.M.S Aga Khan School',
            location       : 'Karachi',
            study          : 'Matriculation in Science (2001-2014)',
            icon           : '/images/agakhanschool.png',
            website        : 'https://www.agakhanschools.org/Pakistan/SMS/Index',
        },
]

    return (
        <div id="Education">
            <div className="topHeading text-center">
                Education
            </div>
            <div className="row contents">
                <CustomTimeline content={EducationalJourney}/>
            </div>
        </div>
    )
}
