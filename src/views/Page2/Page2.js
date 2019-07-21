import React from 'react';
import { Page2Provider } from './Page2Provider';
import SomeComponent from './SomeComponent';
import SomeOtherComponent from './SomeOtherComponent';

export default function Page2() {
  return (
    <Page2Provider>
      <SomeComponent />
      <SomeOtherComponent />
    </Page2Provider>
  );
}
