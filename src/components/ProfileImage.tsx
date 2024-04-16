import * as React from 'react';
import { styled } from 'styled-components';
type ProfileImagePropsType = {
    imgSrc: string
};

export const ProfileImage = ({imgSrc}: ProfileImagePropsType) => {
    return (
        <StyledProfileImage imgSrc={imgSrc} />
    );
};

const StyledProfileImage = styled.div<ProfileImagePropsType>`
    width: 160px;
    height: 160px;

    background-image: url(${props => props.imgSrc});
    background-position: 0;
    background-repeat: no-repeat;

    position: absolute;
    top: 125px;
    left: 20px;
`