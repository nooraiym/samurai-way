import React from 'react';
import { styled } from 'styled-components';
import { Posts } from '../posts/Posts';
import { BackImage } from '../../components/BackImage';
import { ProfileImage } from '../../components/ProfileImage';
import { buttonItem, postDataType, profileDataType } from '../../state/state';
import { Textarea } from '../../components/Textarea';

//TYPES:
type ProfilePropsType = {
    profileData: profileDataType
    postData: postDataType
    buttonData: buttonItem[]
    addPost:( postText: string ) => void
}

// UI:
export const Profile = ( {profileData, postData, buttonData, addPost}: ProfilePropsType) => {

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
                <Textarea buttonData={buttonData} addPost={addPost} />
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