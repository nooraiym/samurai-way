// @flow 
import * as React from 'react';
import { styled } from 'styled-components';
import { MessagesWindow } from '../../components/MessagesWindow';


export const Messages = () => {
    return (
        <StyledMessages>
            <FriendList>
                <li><a href="#">Michael Tierry</a></li>
                <li><a href="#">Edgar Po</a></li>
                <li><a href="#">Sofi Lawrence</a></li>
                <li><a href="#">Brad Pitter</a></li>
                <li><a href="#">Lily Collet</a></li>
            </FriendList>
            <MessagesWindow />
        </StyledMessages>
    );
};

const StyledMessages = styled.main`
    min-height: 80vh;
    background-color: #d5d5d5;
    display: grid;
    grid-template-columns: 2fr 6fr;
`

const FriendList = styled.ul`
    list-style: none;
    padding: 14px;

    li {
        margin-bottom: 10px;
        font-weight: 500;
    }

    li > a {
        text-decoration: none;
        color: #5c5c5c;
        &:hover {
            color: #1DA1F2;
        }
    }
`