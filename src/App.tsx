import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Aside } from './layout/aside/Aside';
import { Header } from './layout/header/Header';
import { Nav } from './layout/nav/Nav';
import { Profile } from './layout/profile/Profile';
import { Messages } from './layout/messages/Messages';
import { buttonDataType, friendsDataType, menuDataType, postDataType, profileDataType } from '.';

// TODO:
// переписать на новый роутинг с 3 спринта
// посмотреть снова структуру проекта

//TYPES:
type AppPropsType = {
  menuData: menuDataType
  profileData: profileDataType
  postData: postDataType
  friendsData: friendsDataType
  buttonData: buttonDataType
}

// UI:
function App( { menuData,
                profileData,
                postData,
                friendsData,
                buttonData }:AppPropsType ) {
  return (
    <AppWrapper>
      <Header />
      <Nav menuData={menuData} buttonData={buttonData} />
      <Profile profileData={profileData} postData={postData} buttonData={buttonData} />
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
