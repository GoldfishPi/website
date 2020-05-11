import React, { FC, useRef, useState, useEffect } from 'react';

interface LogoProps {
}

const CircleSvg = () => {
    const circleRadius = 10;
    return (
        <svg width="100" height="100">
            <circle  cx={10} cy="50" r={circleRadius} strokeWidth="3" fill="var(--blue)"/>
            <circle  cx={35} cy="50" r={circleRadius} strokeWidth="3" fill="var(--yellow)"/>
            <circle  cx={60} cy="50" r={circleRadius} strokeWidth="3" fill="var(--red)"/>
            <circle  cx={85} cy="50" r={circleRadius} strokeWidth="3" fill="var(--green)"/>
        </svg>
    )
}

const Logo:FC<LogoProps> = ({}) => {


    return (
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', width:700 }}>
            <CircleSvg />
            <svg width="100" height="100">
                <line x1="95" y1="95" x2="95" y2="0" stroke="var(--yellow)" strokeWidth="10"/>
                <line x1="0" y1="95" x2="100" y2="95" stroke="var(--red)" strokeWidth="10"/>
                <line x1="5" y1="5" x2="100" y2="5" stroke="var(--blue)" strokeWidth="10"/>
                <line x1="5" y1="0" x2="5" y2="100" stroke="var(--green)" strokeWidth="10"/>
            </svg>
            <svg width="100" height="100">
                <rect x="0" width="50" height="50" fill="var(--blue)"/>
                <rect x="50" width="50" height="50" fill="var(--yellow)"/>
                <rect x="50" y="50" width="50" height="50" fill="var(--red)"/>
                <rect x="0" y="50" width="50" height="50" fill="var(--green)"/>
            </svg>
            <svg width="100" height="100" style={{ transform:'rotate(45deg)', borderRadius:'var(--corner)' }}>
                <rect x="0" width="50" height="50" fill="var(--blue)"/>
                <rect x="50" width="50" height="50" fill="var(--yellow)"/>
                <rect x="50" y="50" width="50" height="50" fill="var(--red)"/>
                <rect x="0" y="50" width="50" height="50" fill="var(--green)"/>
            </svg>
        </div>
    );
};

export default Logo;
