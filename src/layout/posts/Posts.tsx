import React from 'react';
import postPhoto from '../../assets/img/profile/profile-post-photo.png'
import details from '../../assets/img/posts/post-details.png'
import comment from '../../assets/img/posts/post-comments.png'
import repost from '../../assets/img/posts/post-repost.png'
import like from '../../assets/img/posts/post-like.png'
import share from '../../assets/img/posts/post-share.png'
import { styled } from 'styled-components';

type PostPropsType = {
    message: string
}

export const Posts = (props: PostPropsType) => {
    return (
        <StyledPost>
            <PostImg src={postPhoto} alt="" />
            <StyledPostText>
                <PostHeader>
                    <p><b>Emily</b> @emily.bsky.team · 24h</p>
                    <img src={details} alt="" />
                </PostHeader>
                <p>{props.message}</p>
                <PostTabs>
                    <PostTab>
                        <img src={comment} alt="comment" />
                        <span>3</span>
                    </PostTab>
                    <PostTab>
                        <img src={repost} alt="comment" />
                    </PostTab>
                    <PostTab>
                        <img src={like} alt="comment" />
                        <span>16</span>
                    </PostTab>
                    <PostTab>
                        <img src={share} alt="comment" />
                    </PostTab>
                </PostTabs>
            </StyledPostText>
        </StyledPost>
    );
};

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

const PostTabs = styled.div`
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