// example of a page-level provider

// some other patterns which may be useful to consumers are:
// - export function usePage2Context() - the caller can then pass in the value and use it directly in
//   its component too - this is useful to not need to split into another file, and if you also want to run
//   other effects separate from the context in the caller
//   e.g.
//     const page2 = usePage2Context();
//
//     return (
//       <Page2Provider value={page2}>
//         ...
//       </Page2Provider>
//     );
//
// - optionally allowing a function as a child passing in the context as the parameter
//   do not need to split into another file to access page2, and also do not need to create the value up-front - just
//   in the caller you can't have other effects separate from the context
//   I have included an example of this in here, but that pattern would more likely be more useful
//   in some component-level contexts
//   e.g. <Page2Provider>
//          {(page2) => (
//            ...
//          )}
//        </Page2Provider />
import React, { useContext, useState } from 'react';
import _ from 'lodash';
import Page2Context from './Page2Context';

export function usePage2() {
  return useContext(Page2Context);
}

export function Page2Provider(props) {
  const {
    children,
  } = props;

  const [state, setState] = useState({
    text: '',
  });

  const value = {
    text: state.text,

    setText(text) {
      setState((prevState) => ({
        ...prevState,
        text,
      }));
    },
  };

  return (
    <Page2Context.Provider {...props} value={value}>
      {_.isFunction(children)
        ? children(value)
        : children}
    </Page2Context.Provider>
  );
}
