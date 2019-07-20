import React from 'react';
import {
  CurrentTimeProvider,
  SnackBarProvider,
  UserProvider,
} from 'providers';
import Site from './views/Site';

export default function App() {
  return (
    <CurrentTimeProvider>
      <SnackBarProvider>
        <UserProvider>
          <Site />
        </UserProvider>
      </SnackBarProvider>
    </CurrentTimeProvider>
  );
}
