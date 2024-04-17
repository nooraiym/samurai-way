import React from 'react';
import { styled } from 'styled-components';
import { Posts } from '../posts/Posts';
import { BackImage } from '../../components/BackImage';
import { ProfileImage } from '../../components/ProfileImage';
import { MessageSender } from '../../components/MessageSender';
import { buttonDataType, postDataType, profileDataType } from '../..';

//TYPES:
type ProfilePropsType = {
    profileData: profileDataType
    postData: postDataType
    buttonData: buttonDataType
}

// UI:
export const Profile = ( {profileData, postData, buttonData}: ProfilePropsType) => {
    return (
        <StyledProfile>
            <ProfileInfo>
                <BackImage imgsrc={profileData.backImgSrc} />
                <ProfileImage imgsrc={profileData.profileImgSrc} />
                <div>
                    <h2>{profileData.name} {profileData.surname}</h2>
                    <p>{profileData.nickname}</p>
                    <p><b>{profileData.followers}</b> followers <b>{profileData.following}</b> following <b>{profileData.posts}</b> posts</p>
                    <p>{profileData.info}</p>
                </div>
            </ProfileInfo>
            <ProfilePosts>
                <MessageSender buttonData={buttonData} />
                <Posts postData={postData}/>
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