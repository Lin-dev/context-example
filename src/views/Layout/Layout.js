import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from 'providers';

export default function Layout(props) {
  const {
    children,
  } = props;

  const user = useUser();

  return (
    <div>
      <div>
        <Link to="/">Page 1</Link>
        <Link to="/page2">Page 2</Link>
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
