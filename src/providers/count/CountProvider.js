import React, { useContext, useState } from 'react';
import CountContext from './CountContext';

export function useCount() {
  return useContext(CountContext);
}

export function CountProvider(props) {
  const [count, setCount] = useState(0);

  const context = {
    value: count,

    add() {
      setCount((prevCount) => prevCount + 1);
    },
  };

  return (
    <CountContext.Provider {...props} value={context} />
  );
}
