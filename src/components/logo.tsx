import React, { FC, useRef, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

interface LogoProps {
}

interface CircleSvgProps {
    ref:any;
}
const CircleSvg:FC<CircleSvgProps> = ({ref}) => {

    const [on, toggle] = useState(false);

    const initY = 50;
    const spring = useSpring({
        radius: on ? 5 : 10,

        blueX: on ? 10 : 10,
        blueY: on ? 10 : initY,

        yellowX: on ? 90 : 35,
        yellowY: on ? 10 : initY,

        redX: on ? 90 : 60,
        redY: on ? 90 : initY,

        greenX: on ? 10 : 85,
        greenY: on ? 90 : initY,

        ref
    })
    

    return (
        <div
            onMouseOver={() => toggle(true)}

            onMouseLeave={() => toggle(false)}
        >
            <svg 
                width="100" 
                height="100"
            >
                <animated.circle cx={spring.blueX} cy={spring.blueY} r={spring.radius} strokeWidth="3" fill="var(--blue)"/>
                <animated.circle  cx={spring.yellowX} cy={spring.yellowY} r={spring.radius} strokeWidth="3" fill="var(--yellow)"/>
                <animated.circle  cx={spring.redX} cy={spring.redY} r={spring.radius} strokeWidth="3" fill="var(--red)"/>
                <animated.circle  cx={spring.greenX} cy={spring.greenY} r={spring.radius} strokeWidth="3" fill="var(--green)"/>
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

const SquareSvg = () => {
    const [on, toggle] = useState(false);
    const spring = useSpring({
        size:on ? 50 : 10,
        pos: on ? 50 : 90,
    })

    return (
        <div
            onMouseOver={() => toggle(true)}
            onMouseLeave={() => toggle(false)}
        >
            <svg width="100" height="100">
                <animated.rect x="0" width={spring.size} height={spring.size} fill="var(--blue)"/>
                <animated.rect x={spring.pos} width={spring.size} height={spring.size} fill="var(--yellow)"/>
                <animated.rect x={spring.pos} y={spring.pos} width={spring.size} height={spring.size} fill="var(--red)"/>
                <animated.rect x="0" y={spring.pos} width={spring.size} height={spring.size} fill="var(--green)"/>
            </svg>
        </div>
    )
}

const SquareRotateSvg = () => {
    const [on, toggle] = useState(false);
    const spring = useSpring({
        transform:`rotate(${on ? 45 : 0}deg)`,
        borderRadius:on ? '5px' : '0px',
        scale:on ?'0.7' : '1'
    });
    return (
        <div
            onMouseOver={() => toggle(true)}
            onMouseLeave={() => toggle(false)}
        >
            <animated.svg width="100" height="100" style={spring}>
                <rect x="0" width="50" height="50" fill="var(--blue)"/>
                <rect x="50" width="50" height="50" fill="var(--yellow)"/>
                <rect x="50" y="50" width="50" height="50" fill="var(--red)"/>
                <rect x="0" y="50" width="50" height="50" fill="var(--green)"/>
            </animated.svg>
        </div>
    );
}

const Logo:FC<LogoProps> = ({}) => {

    const circleRef = useRef();
    return (
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', width:700 }}>
            <CircleSvg ref={circleRef}/>
            <LinesSvg />
            <SquareSvg />
            <SquareRotateSvg />
        </div>
    );
};

export default Logo;
