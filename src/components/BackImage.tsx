import { spawn } from 'child_process';
import * as React from 'react';
import { styled } from 'styled-components';

type BackImagePropsType = {
    imgSrc: string
};

export const BackImage = ({imgSrc}: BackImagePropsType) => {
    return (
        <StyledBackImage imgSrc={imgSrc} />
    );
};

const StyledBackImage = styled.div<BackImagePropsType>`
    max-width: 800px;
    height: 200px;
    background-image: url(${props => props.imgSrc});
    background-size: 100%;
    background-position: 0;
    background-repeat: no-repeat;
    margin-bottom: 30px;
`