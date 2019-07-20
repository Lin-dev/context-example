import React, { useLayoutEffect, useRef } from 'react';
import _ from 'lodash';
import Portal from 'components/Portal/Portal';
import { useTabs } from './TabsProvider';

export default function Tab(props) {
  const {
    header,
    children,
  } = props;

  const tabs = useTabs();
  const idRef = useRef(_.uniqueId());

  useLayoutEffect(() => {
    tabs.registerTab(idRef.current);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => tabs.selectTab(idRef.current)}
      >
        {header}
      </button>
      {tabs.isSelected(idRef.current) && (
        <Portal target={tabs.contentRef.current}>
          {children}
        </Portal>
      )}
    </>
  );
}
