import React, { FC } from 'react';
import styled from 'styled-components';

interface CardProps {
}

const Styles = styled.div`
    background-color:#353940;
    padding:1rem;
    border-radius:5px;
    box-shadow:var(--shadow-00);
`

const Card:FC<CardProps> = ({ children }) => {
    return (
        <Styles>
            { children }
        </Styles>
    );
};

export default Card;
