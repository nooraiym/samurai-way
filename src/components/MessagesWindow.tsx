// @flow 
import * as React from 'react';
import { styled } from 'styled-components';
import { Message } from './Message';
import { FriendMessage } from './FriendMessage';
import { MessageSender } from './MessageSender';

export const MessagesWindow = () => {
    return (
        <MessagesBox>
            <div>
                <Message />
                <FriendMessage />
            </div>
            <MessageSender />
        </MessagesBox>
    );
};

const MessagesBox = styled.div`
    background-color: #FFF;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`