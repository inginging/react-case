import React from 'react';

const Circle = ( {diameter, onClick} ) => {

    let circleWidth;

    if (diameter) {
        
        circleWidth = {
            width: diameter + '%'
        }

    } else {

        circleWidth = {
            width: 0
        }

    }

    return (

        <div style={circleWidth} onClick={() => onClick(diameter)} className="c-circle">
            <svg viewBox="0 0 200 200" className="c-circle__svg">
                <circle cx="100" cy="100" r="100" />
            </svg>
        </div>

    ); 
};

export default Circle;