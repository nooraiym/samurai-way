import * as React from 'react';
import { styled } from 'styled-components';
type ProfileImagePropsType = {
    imgsrc: string
};

export const ProfileImage = ({imgsrc}: ProfileImagePropsType) => {
    return (
        <StyledProfileImage imgsrc={imgsrc} />
    );
};

const StyledProfileImage = styled.div<ProfileImagePropsType>`
    width: 160px;
    height: 160px;

    background-image: url(${props => props.imgsrc});
    background-position: 0;
    background-repeat: no-repeat;

    position: absolute;
    top: 125px;
    left: 20px;
`