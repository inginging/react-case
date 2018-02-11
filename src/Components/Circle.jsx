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

        <div style={circleWidth} onClick={() => onClick(diameter)}>
            <svg viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="100" />
            </svg>
        </div>
        
    ); 
};

export default Circle;