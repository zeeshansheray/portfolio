import React from 'react'

export default function BlankScreen({className}) {
    return (
        <div id="Blankscreen" className={className}>
            <div className="Title">
                <div className="name">
                    {`${'< Greetings />'}`}
                </div>
            </div>
        </div>
    )
}
