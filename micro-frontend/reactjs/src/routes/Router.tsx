/* eslint-disable import/no-extraneous-dependencies */
import React, { Suspense, useContext } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Routes from './index';

const history = createBrowserHistory();

const MainRoutes: React.FC = () => {

  const renderLoader = () => (
    <div
      style={{
        height: 50,
        width: '100vw',
        backgroundColor: '#F8F9FC',
      }}
    />
  );

  return (
    <Suspense fallback={renderLoader()} >
      <BrowserRouter>
        <Router history={history}>
          <Routes />
        </Router>
      </BrowserRouter>
    </Suspense>
  )
}
export default MainRoutes;