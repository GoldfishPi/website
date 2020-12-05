import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {FC} from 'react';
import styled from 'styled-components';

interface SidebarProps {
}

const iconSize = "3x";

/**
 * @description Sidebar Component
 */
const Sidebar:FC<SidebarProps> = ({}) => {
    return (
        <Nav>
            <div className="__logo">
                <p>EB</p>
            </div>
            <div className="__links">
                <a href="https://github.com/GoldfishPi" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size={iconSize}/>
                </a>
            </div>
        </Nav>
    );
};

const Nav = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    padding:var(--padding-20) var(--padding-10);

    height:100vh;

    background:var(--background);
    box-sizing:border-box;

    a {
        padding-bottom:var(--padding-10);
    }

    .__logo {
        width:50px;
        height:50px;

        border-radius:100%;

        display:flex;
        justify-content:center;
        align-items:center;
        
        padding:var(--padding-05);

        background:linear-gradient(335deg,var(--blue) 0%,var(--blue) 10%,var(--magenta) 100%);

        p {
            font-size:2rem;
            font-family:'Lobster', cursive;
        }
    }

    .__nav {
        display:flex;
        flex-direction:column;
        flex-grow:1;

        & > a {
            padding-bottom:var(--padding-20);
        }
    }
`

export default Sidebar;
