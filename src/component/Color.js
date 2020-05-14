import React from 'react';

const Color = props => {
    return(
        <div style={{
            backgroundColor: props.bcolor,
            color: props.text
        }}>
            <h1>The word is: {props.word}</h1>
        </div>
    )
}

export default Color;