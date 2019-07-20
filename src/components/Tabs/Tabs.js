import React, { useRef } from 'react';
import { TabsProvider } from './TabsProvider';

export Tab from './Tab';

export default function Tabs(props) {
  const {
    children,
  } = props;

  const contentRef = useRef();

  return (
    <TabsProvider contentRef={contentRef}>
      <div>
        {children}
      </div>
      <div ref={contentRef} />
    </TabsProvider>
  );
}
