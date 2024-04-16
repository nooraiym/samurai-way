import React from 'react';
import icon1 from '../../assets/icons/menu-profile.png'
import icon2 from '../../assets/icons/menu-explore.png'
import icon3 from '../../assets/icons/menu-messages.png'
import icon4 from '../../assets/icons/menu-news.png'
import icon5 from '../../assets/icons/menu-music.png'
import icon6 from '../../assets/icons/menu-settings.png'

import { styled } from 'styled-components';
import { Button } from '../../components/Button';

export const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li><img src={icon1} alt="icon" />Profile</li>
                <li><img src={icon2} alt="icon" />Explore</li>
                <li><img src={icon3} alt="icon" />Messages</li>
                <li><img src={icon4} alt="icon" />News</li>
                <li><img src={icon5} alt="icon" />Music</li>
                <li><img src={icon6} alt="icon" />Settings</li>
            </ul>
            <Button name={'Post'}></Button>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    grid-area: n;
    background-color: #969696;
    padding: 10px 30px;

    font-size: 20px;
    color: #0F1419;

    ul {
        list-style: none;
        margin-bottom: 25px;
        cursor: pointer;
    }

    li {
        min-width: 200px;
        padding: 11px;
        display: flex;
        gap: 20px;

        font-weight: 600;
        font-size: 19px;
        color: #FFF;
    }
`