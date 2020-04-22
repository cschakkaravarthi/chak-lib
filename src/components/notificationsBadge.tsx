import React, { FC } from 'react';
import { Badge } from 'react-bootstrap';

import '../../scss/_badge.scss';
import { images } from '../assets/images';

export interface NotificationsBadgeProps {
  handleClick: (e: React.SyntheticEvent) => void;
  notificationCount: number;
}

export const NotificationsBadge: FC<NotificationsBadgeProps> = props => {
  return (
    <button onClick={props.handleClick} className="notifications-badge align-middle">
      <img src={images.bell} className='mr-2 d-inline' width={15} height={18} />
      {props.notificationCount > 0 && (
        <Badge variant="danger" className="ml-3 d-flex justify-content-center">
          {props.notificationCount}
        </Badge>
      )}
    </button>
  );
};
