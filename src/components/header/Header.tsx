import React from 'react';
import logo from '../../assets/logo/logo.png'
import { styled } from 'styled-components';


export const Header = () => {
    return (
        <StyledHeader>
            <img src={logo} alt="profile background image" />
        </StyledHeader>
    );
};

export const StyledHeader = styled.header`
    grid-area: h;
    background-color: #000000;

    img {
        width: 36px;
}
`