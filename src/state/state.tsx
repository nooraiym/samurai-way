import { v1 } from "uuid";
import back from '../assets/img/profile/back_img.png'
import profile from '../assets/img/profile/profile_img.png'

import postPhoto from '../assets/img/profile/profile-post-photo.png'
import details from '../assets/img/posts/post-details.png'
import comment from '../assets/img/posts/post-comments.png'
import repost from '../assets/img/posts/post-repost.png'
import like from '../assets/img/posts/post-like.png'
import share from '../assets/img/posts/post-share.png'

import icon1 from '../assets/icons/menu-profile.png'
import icon2 from '../assets/icons/menu-explore.png'
import icon3 from '../assets/icons/menu-messages.png'
import icon4 from '../assets/icons/menu-news.png'
import icon5 from '../assets/icons/menu-music.png'
import icon6 from '../assets/icons/menu-settings.png'
//types:
//for nav:
export type menuItemType = {
    id: string;
    source: string;
    alt: string;
    title: string;
}
//for profile:
export type profileDataType = {
    id: string
    name: string
    surname: string
    nickname: string
    info: string
    followers: number
    following: number
    posts: number
    backImgSrc: string
    profileImgSrc: string
}
//for posts:
type postIconType = {
    id: string
    iconSrc: string
    alt: string
    count?: number
}
export type postDataType = {
    id: string
    postText: string[]
    postPhotoSrc: string
    detailsIconSrc: string
    // post: postType[]
    postIcons: postIconType[]
}
//for messages:
export type friendType ={
    id: string
    name: string
    surname: string
}
// for components:
export type buttonItem = {
    id: string
    name: string
    title?: string
    placeholder?: string
}

export type RootStateType = {
    profilePage: {
        profileData: profileDataType
        postData: postDataType
    },
    messagesPage: {
        friendsList: friendType[]
    },
    sideMenu: menuItemType[],
    components: {
        buttonData: buttonItem[]
    }
}


export const state: RootStateType = {
    profilePage: {
        profileData: {
            id: v1(),
            name: 'Kim',
            surname: 'Chi',
            nickname: '@kimchi.bsky.team',
            info: '🌀 Developer relations + community @bluesky. 🤖 @skies.bsky.social',
            followers: 5010,
            following: 471,
            posts: 823,
            backImgSrc: back,
            profileImgSrc: profile
        },
        postData: {
            id: '',
            postText: ['HEY'],
            postPhotoSrc: postPhoto,
            detailsIconSrc: details,
            postIcons: [
                {
                    id: v1(),
                    iconSrc: comment,
                    alt: 'comment icon',
                    count: 3
                },
                {
                    id: v1(),
                    iconSrc: repost,
                    alt: 'repost icon',
                },
                {
                    id: v1(),
                    iconSrc: like,
                    alt: 'like icon',
                    count: 16
                },
                {
                    id: v1(),
                    iconSrc: share,
                    alt: 'share icon'
                },
            ]
        }
    },
    messagesPage: {
        friendsList: [
            {
                id: v1(),
                name: 'Michael',
                surname: 'Tierry'
            },
            {
                id: v1(),
                name: 'Edgar',
                surname: 'Po'
            },
            {
                id: v1(),
                name: 'Sofi',
                surname: 'Lawrence'
            },
            {
                id: v1(),
                name: 'Brad',
                surname: 'Pitter'
            },
            {
                id: v1(),
                name: 'Lily',
                surname: 'Collet'
            },
        ]
    },
    sideMenu: [
        {
            id: v1(),
            source: icon1,
            alt: "Profile icon",
            title: "Profile"
        },
        {
            id: v1(),
            source: icon2,
            alt: "Friends icon",
            title: "Friends"
        },
        {
            id: v1(),
            source: icon3,
            alt: "Messages icon",
            title: "Messages"
        },
        {
            id: v1(),
            source: icon4,
            alt: "News icon",
            title: "News"
        },
        {
            id: v1(),
            source: icon5,
            alt: "Music icon",
            title: "Music"
        },
        {
            id: v1(),
            source: icon6,
            alt: "Settings icon",
            title: "Settings"
        }
        ],
    components: {
        buttonData: [
            {
                id: v1(),
                name: 'Post'
            },
            {
                id: v1(),
                name: 'Publish'
            },
            {
                id: v1(),
                name: 'Send',
                title: 'Shift+Enter for send',
                placeholder: 'Type your message',
            },
        ]
    }
}

let rerenderEntireTree = (state: RootStateType) => {}

export const addPost = ( postText: string ) => {
    let newPost = '';
    // {...state, profilePage: {...state.profilePage, postData: {...state.profilePage.postData, }} }
    state.profilePage.postData.postText.push(newPost);
    rerenderEntireTree(state)
}