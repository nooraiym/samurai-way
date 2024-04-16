import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Aside } from './layout/aside/Aside';
import { Header } from './layout/header/Header';
import { Nav } from './layout/nav/Nav';
import { Profile } from './layout/profile/Profile';
import { Messages } from './layout/dialogs/Messages';

// TODO:
// переписать на новый роутинг с 3 спринта
// добавить вкладку с добавлением нового поста на странице профиля

function App() {
  return (
    <AppWrapper>
      <Header />
      <Nav />
      {/* <Profile /> */}
      <Messages />
      <Aside />
    </AppWrapper>
  );
}

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
