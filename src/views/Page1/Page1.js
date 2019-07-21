import React from 'react';
import { useSnackBar } from 'providers';
import Tabs, { Tab } from 'components/Tabs/Tabs';
import Time from 'components/Time/Time';

export default function Page1() {
  const snackBar = useSnackBar();

  return (
    <div>
      <button
        type="button"
        onClick={() => snackBar.show('alert!')} // calls an action to a global provider
      >
        alert
      </button>
      <Tabs>
        <Tab header="Tab 1">
          tab 1 content
          <Time />
        </Tab>
        <Tab header="Tab 2">
          tab 2 content
        </Tab>
      </Tabs>
    </div>
  );
}
