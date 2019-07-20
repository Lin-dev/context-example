// Example of a global provider.
// Performs actions related to a user and contains user values returned from a mocked server.
// Shows an example of some async action - also uses another global provider's actions.
// Side note: please don't place all api request in global state....have no idea why so many devs/projects place every api request
// with { data, isLoading, error } in global state...
import React, { useContext, useState } from 'react';
import { useSnackBar } from 'providers';
import { useApi } from 'hooks';
import UserContext from './UserContext';

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const snackBar = useSnackBar();
  const api = useApi();

  const [user, setUser] = useState();

  const value = {
    ...user,

    async loadUser() {
      try {
        const nextUser = await api.get('/current-user');

        setUser(nextUser);
      } catch (err) {
        setUser({ isAuthenticated: false });

        snackBar.show('Throw me a fricking bone here!');
      }
    },
  };

  return (
    <UserContext.Provider {...props} value={value} />
  );
}
