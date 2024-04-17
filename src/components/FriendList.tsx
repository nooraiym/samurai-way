import React from 'react';
import { styled } from 'styled-components';
import { friendsDataType } from '..';

// TYPES:
type FriendListPropsType = {
    friendsData: friendsDataType
}

// UI:
export const FriendList = ( {friendsData}: FriendListPropsType ) => {
    return (
        <>
            <FriendUnList>
                {friendsData.map(f => (<li><a href="#">{`${f.name} ${f.surname}`}</a></li>))}
            </FriendUnList>
        </>
    );
};


// STYLES:
const FriendUnList = styled.ul`
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