import * as React from 'react';
import { styled } from 'styled-components';
import { Message } from './Message';
import { FriendMessage } from './FriendMessage';
import { MessageSender } from './MessageSender';
import { buttonDataType } from '..';

//TODO:
// переписать Message и FriendMessage с пропсами и отмапить

//TYPES:
type MessagesWindowPropsType ={
    buttonData: buttonDataType
}

// UI:
export const MessagesWindow = ( {buttonData}:MessagesWindowPropsType ) => {
    return (
        <MessagesBox>
            <div>
                <Message />
                <FriendMessage />
            </div>
            <MessageSender buttonData={buttonData} />
        </MessagesBox>
    );
};

//STYLES:
const MessagesBox = styled.div`
    background-color: #FFF;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`