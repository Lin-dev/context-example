import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  CurrentTimeProvider,
  SnackBarProvider,
  UserProvider,
} from 'providers';
import Site from './views/Site';

export default function App() {
  return (
    <BrowserRouter>
      <CurrentTimeProvider>
        <SnackBarProvider>
          <UserProvider>
            <Site />
          </UserProvider>
        </SnackBarProvider>
      </CurrentTimeProvider>
    </BrowserRouter>
  );
}
