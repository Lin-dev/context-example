import React from 'react';
import { Switch, Route } from 'react-router';
import Authenticated from 'components/Authenticated/Authenticated';
import Initialize from './Initialize';
import Layout from './Layout/Layout';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';

export default function Site() {
  return (
    <Initialize>
      <Authenticated>
        <Layout>
          <Switch>
            <Route path="/" exact component={Page1} />
            <Route path="/page2" component={Page2} />
          </Switch>
        </Layout>
      </Authenticated>
    </Initialize>
  );
}
