import React from 'react';
import back from '../../assets/img/profile_back.jpg'
import profile from '../../assets/img/profile_image.png'
import { styled } from 'styled-components';
import { Post } from '../posts/Post';

export const Profile = () => {
    return (
        <StyledProfile>
            <img src={back} alt="" />
            <img src={profile} alt="" />
            <Post message={`Something new`} />
            <Post message={`Something new new new`} />
        </StyledProfile>
    );
};

const StyledProfile = styled.main`
  /* max-width: 600px; */

    grid-area: c;
    background-color: #d8d8d8;

`