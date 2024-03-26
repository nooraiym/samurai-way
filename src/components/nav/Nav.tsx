import React from 'react';
import { styled } from 'styled-components';

export const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li>Home</li>
                <li>Explore</li>
                <li>Notifications</li>
                <li>Messages</li>
                <li>Lists</li>
                <li>Bookmarks</li>
                <li>Communities</li>
                <li>Premium</li>
                <li>Profile</li>
                <li>More</li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    max-width: 275px;

    grid-area: n;
    background-color: #b9b9b9;

`