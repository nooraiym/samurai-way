import React from 'react';
import { styled } from 'styled-components';
import { Button } from './Button';
import { buttonDataType } from '..';

type MessageSenderPropsType = {
    buttonData: buttonDataType
}

export const MessageSender = ( {buttonData}: MessageSenderPropsType ) => {
    return (
        <MessageSenderWrapper>
            <textarea
                    title={buttonData[2].title}
                    placeholder={buttonData[2].placeholder}
                />
            <Button name={buttonData[2].name} />
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
`