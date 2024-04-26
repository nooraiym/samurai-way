import React from 'react';
import { styled } from 'styled-components';
import { postDataType } from '../state/state';

//TYPES:
type PostTabsPropsType = {
    postData: postDataType
}

export const PostTabs = ( {postData}:PostTabsPropsType) => {
    return (
        <PostTabsWrapper>
            {postData.postIcons.map( i => (
                <PostTab key={i.id}>
                    <img src={i.iconSrc} alt={i.alt} />
                    <span>{i.count}</span>
                </PostTab>
            ))}
        </PostTabsWrapper>
    );
};

//STYLES:
const PostTabsWrapper = styled.div`
    max-width: 425px;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const PostTab = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 18px;
        height: 18px;
    }
`