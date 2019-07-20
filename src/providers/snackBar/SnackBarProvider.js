// Example of a naive global error messaging system.
// Could very easily also render out messages styled as needed.
import React, { useContext } from 'react';
import SnackBarContext from './SnackBarContext';

export function useSnackBar() {
  return useContext(SnackBarContext);
}

export function SnackBarProvider(props) {
  const value = {
    show(message) {
      window.alert(message);
    },
  };

  return (
    <SnackBarContext.Provider {...props} value={value} />
  );
}
