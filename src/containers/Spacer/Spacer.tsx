import React from 'react';

interface Props {
    divHeight: number
}

export const Spacer: React.FC<Props> = ({ divHeight }) =>
    <div style={{height: divHeight}}>{/*Spacer*/}</div>
