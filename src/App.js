import React, { Fragment } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import GlobalStyle from './styles/global';

import Main from './pages/Main';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>
);

export default DragDropContext(HTML5Backend)(App);
