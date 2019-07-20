// Example of a global provider.
// In general, providers would have a value as an object containing any read properties and actions combined.
// e.g. look at the <TabsProvider />
// Here a single read property is set as the value makes sense for its usage.
import React, { useContext, useEffect, useState } from 'react';
import CurrentTimeContext from './CurrentTimeContext';

export function useCurrentTime() {
  return useContext(CurrentTimeContext);
}

export function CurrentTimeProvider(props) {
  const [currentTime, setCurrentTime] = useState(new Date().toISOString());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentTime(new Date().toISOString());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <CurrentTimeContext.Provider {...props} value={currentTime} />
  );
}
