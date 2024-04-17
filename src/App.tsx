import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Aside } from './layout/aside/Aside';
import { Header } from './layout/header/Header';
import { Nav } from './layout/nav/Nav';
import { Profile } from './layout/profile/Profile';
import { Messages } from './layout/messages/Messages';

import icon1 from './assets/icons/menu-profile.png'
import icon2 from './assets/icons/menu-explore.png'
import icon3 from './assets/icons/menu-messages.png'
import icon4 from './assets/icons/menu-news.png'
import icon5 from './assets/icons/menu-music.png'
import icon6 from './assets/icons/menu-settings.png'

import { v1 } from 'uuid';

// TODO:
// переписать на новый роутинг с 3 спринта
// вынести все данные отдельно и отрисовать по map
// посмотреть снова структуру проекта
// перенеcти все данные наверх в index.tsx

// DATA and TYPES:
// for nav:
export type menuItemType = {
  id: string;
  source: string;
  alt: string;
  title: string;
}
export type menuDataType = menuItemType[]
let menuData: menuDataType = [
  {
      id: v1(),
      source: icon1,
      alt: "Profile icon",
      title: "Profile"
  },
  {
      id: v1(),
      source: icon2,
      alt: "Explore icon",
      title: "Explore"
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
]
// for messages:
type friendType ={
  id: string
  name: string
  surname: string
}
export type friendsDataType = friendType[]
let friendsData:friendsDataType = [
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

// for button:
type buttonItem = {
  id: string
  name: string
  title?: string
  placeholder?: string
}
export type buttonDataType = buttonItem[]
let buttonData:buttonDataType = [
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


// UI:
function App() {
  return (
    <AppWrapper>
      <Header />
      <Nav menuData={menuData} buttonData={buttonData} />
      <Profile />
      {/* <Messages friendsData={friendsData} buttonData={buttonData}/> */}
      <Aside />
    </AppWrapper>
  );
}


// STYLES:
const AppWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 100px;

  display: grid;
  grid-template-areas: "h h h"
                      "n c a";
  grid-template-rows: 50px 1fr;
  grid-template-columns: 4fr 10fr 4fr;
  grid-gap: 10px;
`

export default App;
