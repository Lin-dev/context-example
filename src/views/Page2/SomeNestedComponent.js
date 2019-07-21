import React from 'react';
import { usePage2 } from './Page2Provider';

export default function SomeNestedComponent() {
  const page2 = usePage2();

  return (
    <div>
      <div>
        text read in nested component:
      </div>
      <div>
        {page2.text}
      </div>
    </div>
  );
}
