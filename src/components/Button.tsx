import * as React from 'react';
import { styled } from 'styled-components';

// TYPES:
type ButtonPropsType = {
    name: string
    onClick?: () => void
};

// UI:
export const Button = ({name, onClick}: ButtonPropsType) => {
    return (
        <StyledButton onClick={onClick}>{name}</StyledButton>
    );
};


// STYLES:
const StyledButton = styled.button`
    padding: 15px 84px;
    background-color: #1DA1F2;
    border: none;
    border-radius: 47px;

    font-weight: 600;
    font-size: 15px;
    color: #FFF;

    &:hover {
            background-color: #fff;
            color: #1DA1F2;
            outline: 2px solid #1DA1F2;
        }
    &:active {
        outline: 2px solid #000000;
    }
`