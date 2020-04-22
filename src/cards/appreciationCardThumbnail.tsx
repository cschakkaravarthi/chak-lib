import React, { FC } from 'react';

import '../../scss/_archive-appreciation.scss';
import Container from 'react-bootstrap/Container';

export interface AppreciationCardThumbnailProps {
  imgTopSrc?: string;
  imgBottomSrc?: string;
  onClick?: (e?: React.SyntheticEvent) => void;
}

export const AppreciationCardThumbnail: FC<AppreciationCardThumbnailProps> = props => {
  const {
    onClick,
    imgTopSrc,
    imgBottomSrc
  } = props;

  return (
    <Container onClick={onClick} className="appreciation-card-thumbnail-container justify-content-between h-100 border d-flex">
      <div className="top-image-container">
        <img src={imgTopSrc} alt="" className="mb-5 pb-md-5" />
      </div>
      <div className="bottom-content-container flex-column-reverse">
        <div className="bottom-image-container">
          <img src={imgBottomSrc} alt="" />
        </div>
      </div>
    </Container>
  );
};
