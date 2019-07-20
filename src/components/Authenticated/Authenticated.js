import React from 'react';
import { useUser } from 'providers';

export default function Authenticated(props) {
  const {
    children,
  } = props;

  const user = useUser();

  if (!user.isAuthenticated) {
    return (
      <span>unauthenticated</span>
    );
  }

  return children ?? null;
}
