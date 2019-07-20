import React from 'react';
import { useCurrentTime } from 'providers';

export default function Time() {
  const currentTime = useCurrentTime();

  return (
    <span>
      {currentTime}
    </span>
  );
}
