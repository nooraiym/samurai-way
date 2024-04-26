import React from 'react';
import { styled } from 'styled-components';
import { PostTabs } from '../../components/PostTabs';
import { postDataType } from '../../state/state';

//TYPES:
type PostPropsType = {
    postData: postDataType
}

//UI:
export const Posts = ({postData}: PostPropsType) => {
    return (
        <StyledPost>
            <PostImg src={postData.postPhotoSrc} alt="" />
            <StyledPostText>
                <PostHeader>
                    <p><b>Emily</b> @emily.bsky.team · 24h</p>
                    <img src={postData.detailsIconSrc} alt="" />
                </PostHeader>
                <p>{postData.postText[0]}</p>
                <PostTabs postData={postData} />
            </StyledPostText>
        </StyledPost>
    );
};

//STYLES:
const StyledPost = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 4px 16px 12px;
    border: 1px solid #c2c2c2;
`
const PostImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`
const StyledPostText = styled.div`
    display: flex;
    flex-direction: column;
`

const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        min-width: 500px;
    }
`