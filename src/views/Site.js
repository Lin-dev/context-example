import React from 'react';
import Authenticated from 'components/Authenticated/Authenticated';
import Initialize from './Initialize';
import Layout from './Layout/Layout';
import SomePage from './SomePage/SomePage';

export default function Site() {
  return (
    <Initialize>
      <Authenticated>
        <Layout>
          <SomePage />
        </Layout>
      </Authenticated>
    </Initialize>
  );
}
