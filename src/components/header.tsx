import React, { FC } from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HeaderProps {
}

const HeaderStyles = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;

    padding:0 var(--padding-10);

    .__badges {
        display:flex;
        a {
            padding-right:var(--padding);
            display:flex;
            justify-content:center;
            align-items:center;

            p {
                padding-left:var(--padding-05);
            }
        }
        a:last-child {
            padding-right:0;
        }
    }
`;

const Header:FC<HeaderProps> = ({}) => {
    return (
        <HeaderStyles>
            <h3>Erik Badger</h3>
            <div className="__badges">
                <Link to="/">
                    <FontAwesomeIcon
                        icon={faHome}
                    />
                    <p>Home</p>
                </Link>
            </div>
        </HeaderStyles>
    );
};

export default Header;
