import React from 'react';

export const highlight = (text: string | undefined, searchKeyword: string): JSX.Element => {
  const regex = new RegExp('(' + searchKeyword + ')', 'gi');
  if (text && searchKeyword) {
    text = text.replace(regex, '<b class="font-weight-bold">$1</b>');
  } else if (!text) {
    text = '';
  }
  return (
    <div className="d-inline" dangerouslySetInnerHTML={{ __html: text }}/>
  );
};
