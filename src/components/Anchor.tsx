// components/Anchor.tsx
import React from 'react';

const Anchor: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => (
  <a {...props}>{props.children}</a>
);

export default Anchor;