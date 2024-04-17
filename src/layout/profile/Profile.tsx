import React from 'react';
import { styled } from 'styled-components';
import { Posts } from '../posts/Posts';
import { BackImage } from '../../components/BackImage';
import { ProfileImage } from '../../components/ProfileImage';


import back from '../../assets/img/profile/back_img.png'
import profile from '../../assets/img/profile/profile_img.png'
import { MessageSender } from '../../components/MessageSender';

//TYPES:
type ProfilePropsType = {

}

// UI:
export const Profile = ( {}: ProfilePropsType) => {
    return (
        <StyledProfile>
            <ProfileInfo>
                <BackImage imgSrc={back} />
                <ProfileImage imgSrc={profile} />
                <div>
                    <h2>Kim Chi</h2>
                    <p>@kimchi.bsky.team</p>
                    <p><b>5010</b> followers <b>471</b> following <b>82</b> posts</p>
                    <p>🌀 Developer relations + community @bluesky.</p>
                    <p>🤖 @skies.bsky.social</p>
                </div>
            </ProfileInfo>
            <ProfilePosts>
                <MessageSender buttonData={[]} />
                <Posts message={`Something new`} />
                <Posts message={`Welcome to Bluesky! 🦋`} />
            </ProfilePosts>
        </StyledProfile>
    );
};


// STYLES:
const StyledProfile = styled.main`
    max-width: 800px;

    grid-area: c;
    background-color: #d8d8d8;
    position: relative;
`

const ProfileInfo = styled.section`
    div {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 50px 40px;
    }
`
const ProfilePosts = styled.section`
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`