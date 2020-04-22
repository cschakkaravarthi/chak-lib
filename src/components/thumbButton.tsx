import React, { FC } from 'react';
import { ThumbButtonProps } from '../interfaces';
import Image from 'react-bootstrap/Image';
import { images } from '../assets/images';

export const ThumbButton: FC<ThumbButtonProps> = props => {
  const customClass = 'like-icon d-flex align-items-center';

  return (
    <button
      className={props.liked ? customClass : 'un' + customClass}
      onClick={props.handleClick}
    >
      <Image
        width={14}
        height={14}
        src={props.liked ? images.likedIcon : images.unlikedIcon}
      />
      <span className="ml-1">{props.numberOfLikes}</span>
    </button>
  );
};
