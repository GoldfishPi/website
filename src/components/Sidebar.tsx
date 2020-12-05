import React, { FC } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import Logo from './logo';
import {useSpring, animated, config} from 'react-spring';

interface SidebarProps {
}

const iconSize = "3x";

/**
 * @description Sidebar Component
 */
const Sidebar:FC<SidebarProps> = ({ }) => {
    return (
        <Nav>
            <Logo />
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

    padding:var(--padding-05);

    padding-left:20px;
    padding-bottom:var(--padding-20);

    height:100vh;

    background:var(--background);
    box-sizing:border-box;

    a {
        padding-bottom:var(--padding-10);
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
