import React, { FC } from 'react';
import { UIButtonProps } from '../interfaces';

export const AllLinksButton: FC<UIButtonProps> = props => {
  return (
    <button
      onClick={props.handleClick}
      className="d-inline-flex align-items-center align-middle btn-upper dark-background text-white"
    >
      <img
        src={props.imageSrc}
        className='d-md-inline order-md-2 all-links-image'
      />
      <span className="font-size-sm m-3">All Links</span>
    </button>
  );
};
