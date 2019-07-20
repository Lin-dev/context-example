import React from 'react';
import { useUser } from 'providers';

export default function Layout(props) {
  const {
    children,
  } = props;

  const user = useUser();

  return (
    <div>
      <div>
        {user.name}
        <img
          src={user.avatar}
          alt={user.name}
          style={{
            borderRadius: '100%',
            height: 50,
            objectFit: 'cover',
            width: 50,
          }}
        />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
