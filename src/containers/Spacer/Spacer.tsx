import React from 'react';

interface Props {
    divHeight: number
}

export const Spacer: React.FC<Props> = ({ divHeight }) => {
    const divStyle = {
        height: divHeight
    };

    return (
        <div style={divStyle}>{/*Spacer*/}</div>
    )
}
