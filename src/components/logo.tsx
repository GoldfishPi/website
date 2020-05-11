import React, { FC, useRef, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

interface LogoProps {
}

const CircleSvg = () => {
    const circleRadius = 10;

    const [blueX, setBlueX] = useState(10);
    const [blueY, setBlueY] = useState(50);
    const blueSpring = useSpring({
        x:blueX,
        y:blueY
    });

    const [yellowX, setYellowX] = useState(35);
    const [yellowY, setYellowY] = useState(50);
    const yellowSpring = useSpring({
        x:yellowX,
        y:yellowY
    });

    const [redX, setRedX] = useState(60);
    const [redY, setRedY] = useState(50);
    const redSpring = useSpring({
        x:redX,
        y:redY
    });

    const [greenX, setGreenX] = useState(85);
    const [greenY, setGreenY] = useState(50);
    const greenSpring = useSpring({
        x:greenX,
        y:greenY
    });
    

    return (
        <div
            onMouseOver={() => {
                setBlueX(10);
                setBlueY(10);

                setYellowX(90);
                setYellowY(10);

                setRedX(90);
                setRedY(90);

                setGreenX(10);
                setGreenY(90);
            }}

            onMouseLeave={() => {
                setBlueX(10);
                setBlueY(50);

                setYellowX(35);
                setYellowY(50);

                setRedX(60);
                setRedY(50);

                setGreenX(85);
                setGreenY(50);
            }}
        >
            <svg 
                width="100" 
                height="100"
            >
                <animated.circle cx={blueSpring.x} cy={blueSpring.y} r={circleRadius} strokeWidth="3" fill="var(--blue)"/>
                <animated.circle  cx={yellowSpring.x} cy={yellowSpring.y} r={circleRadius} strokeWidth="3" fill="var(--yellow)"/>
                <animated.circle  cx={redSpring.x} cy={redSpring.y} r={circleRadius} strokeWidth="3" fill="var(--red)"/>
                <animated.circle  cx={greenSpring.x} cy={greenSpring.y} r={circleRadius} strokeWidth="3" fill="var(--green)"/>
            </svg>
        </div>
    )
}

const LinesSvg = () => {
    const initPositive = 10;
    const [positive, setPositive] = useState(initPositive);
    const positiveSpring = useSpring({
        value:positive
    })

    const initNegative = 90;
    const [ negative, setNegative ] = useState(initNegative);
    const negativeSpring = useSpring({
        value:negative
    });
    
    return (
        <div
            onMouseOver={() => {
                setPositive(90);
                setNegative(10);
            }}
            onMouseLeave={() => {
                setPositive(initPositive);
                setNegative(initNegative);
            }}
        >
            <svg width="100" height="100">
                <animated.line x1="0" y1="5" x2={positiveSpring.value} y2="5" stroke="var(--blue)" strokeWidth="10"/>
                <animated.line x1="95" y1={positiveSpring.value} x2="95" y2="0" stroke="var(--yellow)" strokeWidth="10"/>
                <animated.line x1={negativeSpring.value} y1="95" x2="100" y2="95" stroke="var(--red)" strokeWidth="10"/>
                <animated.line x1="5" y1={negativeSpring.value} x2="5" y2="100" stroke="var(--green)" strokeWidth="10"/>
            </svg>
        </div>
    )
}

const Logo:FC<LogoProps> = ({}) => {


    return (
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', width:700 }}>
            <CircleSvg />
            <LinesSvg />
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
