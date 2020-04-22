import React, { FC } from 'react';
import { ContentWrapper } from '../components/contentWrapper';
import Skeleton from 'react-loading-skeleton';

export interface SystemAndApplicationCardProps {
  title: string;
  className?: string;
  bodySummary?: string;
  isFetching?: boolean;
  technicalContactName?: string;
  businessOwnerName?: string;
  appOwnerName?: string;
  technicalContactEmail?: string;
  businessOwnerEmail?: string;
  appOwnerEmail?: string;
  url?: string;
}

export const SystemAndApplicationCard: FC<SystemAndApplicationCardProps> = props => {
  const {
    title,
    bodySummary,
    isFetching,
    technicalContactName,
    businessOwnerName,
    appOwnerName,
    url,
    technicalContactEmail,
    businessOwnerEmail,
    appOwnerEmail } = props;

  return (<>
    {!isFetching && <ContentWrapper
      title={title}
      showContentTop={true}
      titleClass="font-size-base text-condensed font-weight-bold"
      topBorder="darkTurquoise"
      wrapperClass="h-100"
      bodyClass="d-flex flex-column"
    >
      <div className="d-flex flex-column justify-content-between h-100">
        <div className="font-size-sm mb-4 text-ellipsis">{bodySummary}</div>
        <div>
          <div className="gray-600 font-size-sm text-condensed">
            {technicalContactName && <div>
              <span className="font-weight-bold">Technical Contact: </span>
              { technicalContactEmail ? <a href={`mailto:${technicalContactEmail}`} className="gray-600">{technicalContactName}</a>
                : <span>{technicalContactName}</span>}
            </div>}
            {businessOwnerName && <div>
              <span className="font-weight-bold">Business Owner: </span>
              { businessOwnerEmail ? <a href={`mailto:${businessOwnerEmail}`} className="gray-600">{businessOwnerName}</a>
                : <span>{businessOwnerName}</span>}
            </div>}
            {appOwnerName && <div>
              <span className="font-weight-bold">Application Owner: </span>
              { appOwnerEmail ? <a href={`mailto:${appOwnerEmail}`} className="gray-600">{appOwnerName}</a>
                : <span>{appOwnerName}</span>}
            </div>}
          </div>
          <div className="mt-4">
            {url && (
              <u><a href={url} target="_blank" className="font-size-sm my-2 font-weight-bold text-uppercase d-block">Show More</a></u>
            )}
          </div>
        </div>
      </div>
    </ContentWrapper>}
    { isFetching &&
      <div>
        <div className="mb-2"><Skeleton width={100} /></div>
        <div className="mb-4"><Skeleton width={150} /></div>
        <div><Skeleton width={200} /></div>
        <div><Skeleton width={200} /></div>
        <div><Skeleton width={200} /></div>
        <div className="mt-4"><Skeleton width={100} /></div>
      </div>
    }
    </>
  );
};
