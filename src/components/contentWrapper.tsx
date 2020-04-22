import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';

// In the content wrapper you will need to make a skeleton appear only
// in the wrapper. Not in the children. Children already has it's own skeleton.
import Skeleton from 'react-loading-skeleton';

export interface ContentWrapperProps {
  title: string;
  subtitle?: string;
  bodyClass?: string;
  topBorder?: string;
  titleClass?: string;
  isFetching?: boolean;
  wrapperClass?: string;
  subtitleClass?: string;
  rightCornerComponentText?: string;
  RightCornerComponent?: React.ComponentType;
  // if true, it will show an optional title on the left and a right corner
  // optional text set by the props rightCornerComponentText and RightCornerComponent.
  showContentTop?: boolean;
}

export const ContentWrapper: FC<ContentWrapperProps> = props => {
  const {
    title,
    children,
    subtitle,
    bodyClass,
    wrapperClass,
    isFetching = false,
    RightCornerComponent,
    showContentTop = true,
    topBorder = 'lightblue',
    rightCornerComponentText,
    subtitleClass = 'gray-600 font-size-sm',
    titleClass = 'font-size-xl font-weight-bold'
  } = props;

  return (
    <SourceCard className={`${wrapperClass} content-wrapper-top-border-${topBorder} rounded-0 border-0`}>
      <SourceCard.Body className={bodyClass}>
        {showContentTop ? (
          <div className="row">
            <div className={RightCornerComponent ? 'col-9' : 'col-12'}>
              {title && (
                <SourceCard.Title className={titleClass}>
                  {!isFetching ? title : <Skeleton width={200} />}
                </SourceCard.Title>
              )}
              {subtitle && <span className={subtitleClass}>{!isFetching ? subtitle : <Skeleton width={125} />}</span>}
            </div>
            {RightCornerComponent && (
              <div className="col-3">
                <RightCornerComponent>
                  <u>{!isFetching ? rightCornerComponentText : <Skeleton width={100} />}</u>
                </RightCornerComponent>
              </div>
            )}
          </div>
        ) : null}
        {children}
      </SourceCard.Body>
    </SourceCard>
  );
};
