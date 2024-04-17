import * as React from 'react';
import { styled } from 'styled-components';
import { MessagesWindow } from '../../components/MessagesWindow';
import { FriendList } from '../../components/FriendList';
import { buttonDataType, friendsDataType } from '../../App';

// TYPES:
type MessagesPropsType = {
    friendsData: friendsDataType
    buttonData: buttonDataType
}

export const Messages = ( {friendsData, buttonData} : MessagesPropsType) => {
    return (
        <StyledMessages>
            <FriendList friendsData={friendsData} />
            <MessagesWindow buttonData={buttonData} />
        </StyledMessages>
    );
};

const StyledMessages = styled.main`
    min-height: 80vh;
    background-color: #d5d5d5;
    display: grid;
    grid-template-columns: 2fr 6fr;
`