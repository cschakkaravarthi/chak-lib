import React, { FC } from 'react';

import '../../scss/_archive-appreciation.scss';

export interface ArchiveAppreciationProps {
  date?: string;
  leftTitle?: string;
  wrapperClassName?: string;
  MainLink?: React.ComponentType;
}

export const ArchiveAppreciation: FC<ArchiveAppreciationProps> = props => {
  const { leftTitle, date, MainLink = null, wrapperClassName } = props;

  return (
    <div
      className={`archive-appreciation d-flex justify-content-between align-items-baseline border-bottom ${wrapperClassName}`}
    >
      <p className="left-content font-weight-bold font-size-base">
        {leftTitle}
      </p>
      <div className="right-content d-flex justify-content-between align-items-baseline">
        <p className="font-weight-bold font-size-sm gray-600">{date}</p>
        {MainLink && (
          <MainLink>
            <u className="font-weight-bold font-size-sm text-uppercase">
              view card
            </u>
          </MainLink>
        )}
      </div>
    </div>
  );
};
