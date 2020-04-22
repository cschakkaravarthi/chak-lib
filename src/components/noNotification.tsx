import React, { FC } from 'react';
import Image from 'react-bootstrap/Image';

export interface NoNotificationProps {
  backgroundImage?: string;
  title: string;
  message?: string;
}

export const NoNotification: FC<NoNotificationProps> = props => {
  return (
    <div className="text-center mt-5">
      <Image width={100} height={100} src={props.backgroundImage} />
      <p className="mt-5 gray-600 font-weight-bold">{props.title}</p>
      <p className="font-size-sm">{props.message}</p>
    </div>
  );
};
