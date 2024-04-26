import React from 'react';
import { styled } from 'styled-components';
import { Button } from '../../components/Button';
import { buttonItem, menuItemType } from '../../state/state';


// TYPES:
type NavPropsType = {
    menuData: menuItemType[]
    buttonData: buttonItem[]
}

//UI:
export const Nav = ({menuData, buttonData} : NavPropsType) => {
    return (
        <StyledNav>
            <ul>
                {menuData.map((i:menuItemType) => (
                    <li key={i.id}><img src={i.source} alt={i.alt} />{i.title}</li>
                ))}
            </ul>
            <Button name={buttonData[0].name} onClick={ () => {}}/>
        </StyledNav>
    );
};

//STYLES:
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