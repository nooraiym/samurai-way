import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Profile } from './components/profile/Profile';
import { Aside } from './components/aside/Aside';



function App() {
  return (
    <AppWrapper>
      <Header />
      <Nav />
      <Profile />
      <Aside />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 100px;

  display: grid;
  grid-template-areas: "h h h"
                      "n c a";
  grid-template-rows: 50px 1fr;
  grid-template-columns: 2fr 10fr 2fr;
  grid-gap: 10px;
`

export default App;
