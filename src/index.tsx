import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootStateType, addPost, state } from './state/state'


//BLL DATA and TYPES:


export const rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
      <App state={state} addPost={addPost} />,
      document.getElementById('root')
  );
}

rerenderEntireTree(state)

// //UI:
// ReactDOM.render(
//   <App state={state} />,
// document.getElementById('root')
// );