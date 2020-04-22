import React, { FC } from 'react';

import '../../scss/_date-range-header.scss';

export interface DateRangeHeaderProps {
  leftTitle?: string;
  rightTitle?: string;
  wrapperClassName?: string;
}

export const DateRangeHeader: FC<DateRangeHeaderProps> = props => {
  const { leftTitle, rightTitle, wrapperClassName } = props;

  return (
    <div
      className={`date-range-header d-flex justify-content-between align-items-baseline ${wrapperClassName}`}
    >
      <p>{leftTitle}</p>
      <p>{rightTitle}</p>
    </div>
  );
};
