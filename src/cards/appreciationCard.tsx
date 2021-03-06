import React, { FC } from 'react';

import '../../scss/_archive-appreciation.scss';
import Container from 'react-bootstrap/Container';

export interface AppreciationCardProps {
  name?: string;
  title: string;
  senderName?: string;
  imgTopSrc?: string;
  imgBottomSrc?: string;
  appreciationText?: string;
  onClick?: (e?: React.SyntheticEvent) => void;
}

export const AppreciationCard: FC<AppreciationCardProps> = props => {
  const { title, onClick, imgTopSrc, senderName, imgBottomSrc, appreciationText } = props;

  return (
    <Container onClick={onClick} className="appreciation-card-container h-100 border d-flex">
      <div className="top-image-container">
        <img src={imgTopSrc} alt="" className="mb-5 pb-md-5" />
        <div className="bottom-text-container w-100 text-break">
          <p className="mb-0">
            <strong>{title},</strong>
          </p>
          <p className="font-size-sm">{appreciationText}</p>
          <p className="text-right">
            <strong>- {senderName}</strong>
          </p>
        </div>
      </div>
      <div className="bottom-content-container flex-column-reverse">
        <div className="bottom-image-container">
          <img src={imgBottomSrc} alt="" />
        </div>
      </div>
    </Container>
  );
};
