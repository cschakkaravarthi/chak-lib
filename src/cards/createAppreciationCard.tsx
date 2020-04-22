import React, { FC } from 'react';
import { UploadButton } from '../components/uploadButton';
import { images } from '../assets/images';

import '../../scss/_archive-appreciation.scss';

export interface CreateAppreciationCardProps {
  name?: string;
  title: string;
  altImg?: string;
  senderName?: string;
  imgTopSrc?: string;
  imgBottomSrc?: string;
  appreciationText?: string;
  onClick?: (e?: React.SyntheticEvent) => void;
}

export const CreateAppreciationCard: FC<CreateAppreciationCardProps> = props => {
  const { title, altImg, onClick } = props;

  return (
    <div
      className="create-appreciation-card-container container d-flex bg-gradient-dark p-1 py-sm-5 px-sm-5 px-lg-3 py-3"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)), url(${images.createCard})`
      }}
    >
      <div className="left-content">
        <img src={images.cardsCouple} alt={altImg} />
      </div>
      <div className="right-content text-right">
        <p className="text-white font-weight-bold font-size-lg mb-1">
          Know someone who deserves a round of&nbsp;applause?
        </p>
        <p className="text-white mb-3">
          Show your support. Send an Appreciation&nbsp;Card&nbsp;today!
        </p>
        <UploadButton className="primary-button" title={title} handleClick={onClick} />
      </div>
    </div>
  );
};
