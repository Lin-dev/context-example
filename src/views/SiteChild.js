import React from 'react';
import SiteGrandChild from './SiteGrandChild';

export default function SiteChild() {
  console.log('site child rendered');

  return (
    <div>
      <SiteGrandChild />
    </div>
  );
}
