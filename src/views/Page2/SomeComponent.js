import React from 'react';
import { usePage2 } from './Page2Provider';

export default function SomeComponent() {
  const page2 = usePage2();

  return (
    <input
      type="text"
      value={page2.text}
      onChange={(e) => page2.setText(e.currentTarget.value)}
    />
  );
}
