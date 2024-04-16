// @flow 
import * as React from 'react';
import { styled } from 'styled-components';

type ButtonPropsType = {
    name: string
    // onClick: () => void
};

export const Button = ({name}: ButtonPropsType) => {
    return (
        <StyledButton>{name}</StyledButton>
    );
};

const StyledButton = styled.button`
    padding: 15px 84px;
    background-color: #1DA1F2;
    border: none;
    border-radius: 47px;

    font-weight: 600;
    font-size: 15px;
    color: #FFF;
`