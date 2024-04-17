import React from 'react';
import { styled } from 'styled-components';


export const Header = () => {
    return (
        <StyledHeader>
            <p>BSKY SOCIAL</p>
        </StyledHeader>
    );
};

export const StyledHeader = styled.header`
    grid-area: h;
    background-color: #e6e6e6;
    padding: 12px 40px;
    color: #1DA1F2;
    font-weight: 700;
    font-size: 20px;
`