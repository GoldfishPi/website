import React, { FC } from 'react';
import styled from 'styled-components';

interface CardProps {
}

const Styles = styled.div`
    background-color:var(--content);
    padding:var(--padding-10);
    border-radius:var(--corner);
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
