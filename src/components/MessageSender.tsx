import React from 'react';
import { styled } from 'styled-components';

export const MessageSender = () => {
    return (
        <MessageSenderWrapper>
            <textarea
                    title='Shift+Enter for send'
                    placeholder='Type your message'
                />
            <button>Send</button>
        </MessageSenderWrapper>
    );
};

const MessageSenderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;

    textarea {
        -webkit-box-shadow: inset 0 0 4px #dddddd;
        -moz-box-shadow: inset 0 0 4px #dddddd;
        box-shadow: inset 0 0 4px #dddddd;

        max-width: 330px;
        width: 100%;
        padding: 14px 20px;
        overflow: hidden;
        resize: none;

        border-radius: 30px;
        border: none;
        background-color: #F5F7FB;

        font-size: 14px;
        color: #00000099;
    }

    button {
        padding: 10px 20px;

        border: none;
        border-radius: 20px;
        background-color: #1DA1F2;
        color: white;

        font-weight: 700;
        font-size: 16px;

        &:hover {
            background-color: #fff;
            color: #1DA1F2;
            outline: 2px solid #1DA1F2;
        }
        &:active {
            outline: 2px solid #000000;
        }
    }
`