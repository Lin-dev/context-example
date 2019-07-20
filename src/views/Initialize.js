import React, { useEffect, useState } from 'react';
import { useUser } from 'providers';

export default function Initialize(props) {
  const {
    children,
  } = props;

  const user = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function initialize() {
      await user.loadUser();

      setIsLoading(false);
    }

    initialize();
  }, []);

  if (isLoading) {
    return (
      <span>loading...</span>
    );
  }

  return children ?? null;
}
