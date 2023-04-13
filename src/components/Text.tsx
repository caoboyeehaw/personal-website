// components/Text.jsx

import React from 'react';

const Text = ({ children }) => {
  const replaceUnescapedEntities = (text) => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  return <>{replaceUnescapedEntities(children)}</>;
};

export default Text;