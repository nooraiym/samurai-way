import React from 'react';
import postPhoto from '../../assets/img/posts/cnn.png'
import { styled } from 'styled-components';

type PostPropsType = {
    message: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div>
            <PostImg src={postPhoto} alt="" />
            <p>{props.message}</p>
        </div>
    );
};

const PostImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`