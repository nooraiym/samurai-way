import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Aside } from './layout/aside/Aside';
import { Header } from './layout/header/Header';
import { Nav } from './layout/nav/Nav';
import { Profile } from './layout/profile/Profile';
import { Messages } from './layout/messages/Messages';
import { RootStateType } from './state/state';

// TODO:
// переписать на новый роутинг с 3 спринта
// внедрить реф в текстареа в Профиле let newPostElement = React.createRef(); и закинуть в функцию коллбек для кнопки с доступом к value: let text = newPostElement.current.value; и вывести в консоль

//TYPES:
type AppPropsType = {
  state: RootStateType
  addPost: ( postText: string ) => void
}

// UI:
function App( { state, addPost }: AppPropsType ) {
  return (
    <AppWrapper>
      <Header />
      <Nav menuData={state.sideMenu} buttonData={state.components.buttonData} />
      <Profile profileData={state.profilePage.profileData} postData={state.profilePage.postData} buttonData={state.components.buttonData} addPost={addPost} />
      {/* <Messages friendsData={state.messagesPage.friendsList} buttonData={state.components.buttonData}/> */}
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
