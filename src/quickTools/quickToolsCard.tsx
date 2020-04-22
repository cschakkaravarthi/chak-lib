import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';

export interface LinkProps {
  linkAction: React.ElementType;
  linkTitle: string | undefined;
}

export interface BasicQuickToolsCardProps {
  title: string;
  isFetching?: boolean;
  Links: Array<LinkProps>;
}

export const BasicQuickToolsCard: FC<BasicQuickToolsCardProps> = props => {
  const { title, Links, isFetching = false } = props;

  return (
    <SourceCard className="py-4 px-3 flex-column justify-content-between h-100 rounded-0">
      <SourceCard.Title className="font-weight-bold text-capitalize text-condensed font-size-base mb-4">
        {!isFetching ? title : <Skeleton height={30} />}
      </SourceCard.Title>
      {!isFetching ? Links && Links.map((linkData) => (
        <linkData.linkAction key={linkData.linkTitle}>
          <u className="text-upper gray-600 font-size-sm letter-spacing">{linkData.linkTitle}</u>
        </linkData.linkAction>
      )) : <Skeleton />}
    </SourceCard>
  );
};
