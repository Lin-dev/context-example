// Example of a provider kept at the 'shared component' level.
import React, { useContext, useState } from 'react';
import TabsContext from './TabsContext';

export function useTabs() {
  return useContext(TabsContext);
}

export function TabsProvider(props) {
  const {
    contentRef,
  } = props;

  // example of state kept in a provider
  const [state, setState] = useState({
    selectedTabId: undefined,
  });

  const value = {
    // example of properties exposed to consumers - can very easy return a derived property here too
    contentRef,
    selectedTabId: state.selectedTabId,

    // example of an action performed for the provider
    registerTab(tabId) {
      setState((prevState) => ({
        ...prevState,
        selectedTabId: prevState.selectedTabId == null
          ? tabId
          : prevState.selectedTabId,
      }));
    },

    selectTab(tabId) {
      setState((prevState) => ({
        ...prevState,
        selectedTabId: tabId,
      }));
    },

    // example of keeping some shared function getting derived state
    // as the code stands this might be better code if actually kept inside <Tab />
    isSelected(tabId) {
      return state.selectedTabId === tabId;
    },
  };

  return (
    <TabsContext.Provider {...props} value={value} />
  );
}
