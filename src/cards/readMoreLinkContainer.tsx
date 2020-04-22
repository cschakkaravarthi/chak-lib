import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';

export const ReadMoreLinkContainer: FC = props => {
  return (
    <SourceCard.Text className='font-size-sm my-2 font-weight-bold text-uppercase d-block'>
      {props.children}
    </SourceCard.Text>
  );
};
