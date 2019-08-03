import React from 'react';
import { useCount } from 'providers';

export default function SiteGrandChild() {
  const count = useCount();

  console.log('site grand child rendered');

  return (
    <div>
      <div>
        <span>value: </span>
        <span>{count.value}</span>
      </div>
      <div>
        <button type="button" onClick={() => count.add()}>
          add
        </button>
      </div>
    </div>
  );
}
