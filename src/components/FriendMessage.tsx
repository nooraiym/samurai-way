import React from 'react';
import { styled } from 'styled-components';
import profilePhoto from '../assets/img/profile/friend-profile-photo.png'

//TYPES:
type FriendMessagePropsType = {

}

//UI:
export const FriendMessage = ({}:FriendMessagePropsType) => {
    return (
        <>
            <FriendMessageContent>
                <img src={profilePhoto} alt="" />
                <FriendMessageText>
                    <FriendMessageName>Brad Pitter</FriendMessageName>
                    <FriendMessageInnerText>Hello, she didn’t do anything and rested all day, how are you doing?</FriendMessageInnerText>
                </FriendMessageText>
            </FriendMessageContent>
            <FriendMessageTime>22:24</FriendMessageTime>
        </>
    );
};

//STYLES:
const FriendMessageContent = styled.div`
    display: flex;
    align-items: flex-end;

    img {
        max-width: 48px;
    }
`
const FriendMessageText = styled.div`
    -webkit-box-shadow:  2px 2px 6px 0px #cfcfcf;
    -moz-box-shadow:  2px 2px 6px 0px #cfcfcf;
    box-shadow: 2px 2px 6px 0px #cfcfcf;

    max-width: 635px;
    width: 100%;
    padding: 8px 12px;

    border-radius: 10px 10px 10px 0;
    background-color: #F5F7FB;

    position: relative;
    margin-left: 12px;

    &:after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        border-bottom: 14px solid #F5F7FB;
        border-left: 16px solid transparent;

        position: absolute;
        bottom: 0;
        left: -10px;
        z-index: -1;

        filter: drop-shadow( -4px 2px 2px #cfcfcf);
    }
`
const FriendMessageName = styled.div`
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 3px;
`
const FriendMessageInnerText = styled.p`
    font-size: 16px;

`
const FriendMessageTime = styled.div`
    font-size: 10px;
    font-weight: 700;
    text-align: left;
    margin: 5px 10px;
`