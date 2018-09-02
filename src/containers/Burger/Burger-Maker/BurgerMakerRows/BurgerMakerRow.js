import React from 'react';

const burgerMakerRow = (props) => {
    return (
        <div>
            <span>{props.label}</span>
            <button onClick={() => props.update(props.value, -1)}>Less</button>
            <button onClick={() => props.update(props.value, 1)}>More</button>
        </div>
    )
};


export default burgerMakerRow;