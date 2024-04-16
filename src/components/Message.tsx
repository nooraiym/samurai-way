import React from 'react';
import { styled } from 'styled-components';
import profilePhoto from '../assets/img/profile/profile_img.png'

export const Message = () => {
    return (
        <MessageWrapper>
            <MessageContent>
                <img src={profilePhoto} alt="" />
                <MessageText>
                    <MessageName>Kim Chi</MessageName>
                    <MessageInnerText>Hello, how are you, what did you do yesterday?</MessageInnerText>
                </MessageText>
            </MessageContent>
            <MessageTime>22:23</MessageTime>
        </MessageWrapper>
    );
};


const MessageWrapper = styled.div`
    margin: 10px 0 30px;
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;

    img {
        max-width: 48px;
    }
`
const MessageText = styled.div`
    -webkit-box-shadow:  2px 2px 6px 0px #cfcfcf;
    -moz-box-shadow:  2px 2px 6px 0px #cfcfcf;
    box-shadow: 2px 2px 6px 0px #cfcfcf;
    max-width: 400px;
    width: 100%;
    padding: 8px 12px;
    overflow-wrap: break-word;

    border-radius: 10px 10px 0 10px;
    background-color: #1DA1F2;

    position: relative;
    margin-right: 12px;

    &:after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        border-bottom: 12px solid #1DA1F2; 
        border-right: 14px solid transparent;

        position: absolute;
        bottom: 0;
        right: -12px;
    }
`
const MessageName = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-align: right;
    margin-bottom: 3px;
    
`
const MessageInnerText = styled.p`
    font-size: 16px;
    color: white;
    text-align: right;

`
const MessageTime = styled.div`
    font-size: 10px;
    font-weight: 700;
    text-align: right;
    margin: 5px 10px;
`