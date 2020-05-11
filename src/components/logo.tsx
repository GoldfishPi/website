import React, { FC, useRef, useState, useEffect } from 'react';
import { useSpring, useChain, animated } from 'react-spring';

interface LogoProps {
}

const CircleSvg = React.forwardRef<any, any>(({ on }, ref:any) => {

    const initY = 50;
    const spring = useSpring({
        from: {
            radius:10,

            blueX:10,
            blueY:initY,

            yellowX: 35,
            yellowY:initY,

            redX:60,
            redY:initY,

            greenX:85,
            greenY:initY,

            opacity: 1,

        },

        opacity: 1,
        radius: on ? 5 : 10,

        blueX: on ? 5 : 10,
        blueY: on ? 5 : initY,

        yellowX: on ? 95 : 35,
        yellowY: on ? 5 : initY,

        redX: on ? 95 : 60,
        redY: on ? 95 : initY,

        greenX: on ? 5 : 85,
        greenY: on ? 95 : initY,

        ref
    })
    

    return (
        <animated.div style={{ opacity:spring.opacity }}>
            <svg 
                width="100" 
                height="100"
            >
                <animated.circle cx={spring.blueX} cy={spring.blueY} r={spring.radius} strokeWidth="3" fill="var(--blue)"/>
                <animated.circle  cx={spring.yellowX} cy={spring.yellowY} r={spring.radius} strokeWidth="3" fill="var(--yellow)"/>
                <animated.circle  cx={spring.redX} cy={spring.redY} r={spring.radius} strokeWidth="3" fill="var(--red)"/>
                <animated.circle  cx={spring.greenX} cy={spring.greenY} r={spring.radius} strokeWidth="3" fill="var(--green)"/>
            </svg>
        </animated.div>
    )
});

const LinesSvg = React.forwardRef<any,any>(({on}:any, ref:any) => {
    const spring = useSpring({
        from: {
            positive:10,
            negative:90,
            opacity:0,
        },
        positive: on ? 90 : 10,
        negative: on ? 10 : 90,

        opacity: on ? 1 : 0,

        ref
    })

    return (
        <animated.div style={{ opacity:spring.opacity }}>
            <svg width="100" height="100">
                <animated.line x1="0" y1="5" x2={spring.positive} y2="5" stroke="var(--blue)" strokeWidth="10"/>
                <animated.line x1="95" y1={spring.positive} x2="95" y2="0" stroke="var(--yellow)" strokeWidth="10"/>
                <animated.line x1={spring.negative} y1="95" x2="100" y2="95" stroke="var(--red)" strokeWidth="10"/>
                <animated.line x1="5" y1={spring.negative} x2="5" y2="100" stroke="var(--green)" strokeWidth="10"/>
            </svg>
        </animated.div>
    )
});

const SquareSvg = React.forwardRef<any, any>(({on}:any, ref:any) => {
    const spring = useSpring({

        from: {
            size:10,
            pos:90,
            opacity: 0,
        },

        size:on ? 50 : 10,
        pos: on ? 50 : 90,

        opacity: on ? 1 : 0,

        ref
    });

    return (
        <animated.div style={{ opacity: spring.opacity }}>
            <svg width="100" height="100">
                <animated.rect x="0" width={spring.size} height={spring.size} fill="var(--blue)"/>
                <animated.rect x={spring.pos} width={spring.size} height={spring.size} fill="var(--yellow)"/>
                <animated.rect x={spring.pos} y={spring.pos} width={spring.size} height={spring.size} fill="var(--red)"/>
                <animated.rect x="0" y={spring.pos} width={spring.size} height={spring.size} fill="var(--green)"/>
            </svg>
        </animated.div>
    )
})

const RotateAnimation = React.forwardRef<any, any>(({on, children}, ref:any) => {
    const spring = useSpring({

        from: {
            transform:'rotate(0deg)',
            borderRadius:'5px',
            scale:'1'
        },
        transform:`rotate(${on ? 45 : 0}deg)`,
        borderRadius:on ? '10px' : '0px',
        scale:on ?'0.7' : '1',

        overflow:'hidden',
        height:100,
        width:100,

        opacity: 1,

        ref
    });
    return (
        <animated.div style={ spring }>
            { children }
        </animated.div>
    );
});

const TextHeader = React.forwardRef<any, any>(({on}, ref:any) => {
    const spring = useSpring({
        from: {
            transform:'translate3d(-150%, 0, 0)',
            padding:'var(--padding)'
        },
        transform: on ? 'translate3d(0%, 0, 0)' : 'translate3d(-150%, 0, 0)',
        ref
    });

    return (
        <div style={{ overflow:'hidden' }}>
            <animated.h2 style={ spring }>
                Erik Badger
            </animated.h2>
        </div>
    )
});

const Logo:FC<LogoProps> = ({}) => {

    const [on, toggle] = useState(false);

    const circleRef = useRef<any>({});
    const lineRef = useRef<any>();
    const squareRef = useRef<any>();
    const rotateRef = useRef<any>();
    const textRef = useRef<any>();

    useEffect(() => {
        setTimeout(() => toggle(true), 1500);
    }, []);

    useChain(on ? [circleRef, lineRef, squareRef, rotateRef, textRef] : [textRef, rotateRef, squareRef, lineRef, circleRef])
    return (
        <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', padding:'var(--padding)'}}>
            <RotateAnimation 
                ref={rotateRef}
                on={on}
            >
                <div style={{ display:'grid' }}>
                    <div style={{ gridRow:1, gridColumn:1 }}>
                        <CircleSvg 
                            ref={circleRef}
                            on={on}
                        />
                    </div>
                    <div style={{ gridRow:1, gridColumn:1}}>
                        <LinesSvg
                            ref={lineRef}
                            on={on}
                        />
                    </div>
                    <div style={{ gridRow:1, gridColumn:1}}>
                        <SquareSvg 
                            ref={squareRef}
                            on={on}
                        />
                    </div>
                </div>
            </RotateAnimation>
            <TextHeader ref={textRef} on={on} />
        </div>
    );
};

export default Logo;
