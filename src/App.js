import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // will allow to use the redux in all the application

import './config/ReactotronConfig';

import GlobalStyles from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
