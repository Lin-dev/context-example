import React from 'react';
import { CountProvider } from 'providers';
import Site from './views/Site';

export default function App() {
  console.log('app rendered');

  return (
    <CountProvider>
      <Site />
    </CountProvider>
  );
}
