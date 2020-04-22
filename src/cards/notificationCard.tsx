import React, { FC, useState } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { Category } from '../interfaces';
import { images } from '../assets/images';
import Skeleton from 'react-loading-skeleton';

export interface NotificationCardProps {
  title: string;
  isNew?: boolean;
  dateTime?: string;
  isArchive?: boolean;
  isApprove?: boolean;
  alert_type?: string;
  isFetching?: boolean;
  categories?: Category[];
  serviceNowLink?: string;
  notificationType?: string;
  drupal_id?: number | undefined;
  body_full?: string | JSX.Element;
  body_summary?: string | JSX.Element;
  onReject?: (drupal_id: number | undefined) => void;
  onApprove?: (drupal_id: number | undefined) => void;
  onArchive?: (drupal_id: number | undefined, alert_type: string | undefined) => void;
}

export const NotificationCard: FC<NotificationCardProps> = props => {
  const {
    isNew,
    title,
    dateTime,
    onArchive,
    drupal_id,
    body_full,
    isArchive,
    categories,
    body_summary,
    notificationType,
    isApprove,
    serviceNowLink,
    onApprove,
    onReject,
    alert_type,
    isFetching = false
  } = props;

  const [showMore, setShowMore] = useState<boolean>(false);
  const summaryMaxLength = 250;
  const bodyFull: string =
    typeof body_full === 'string' ? body_full : body_full && body_full.props.dangerouslySetInnerHTML.__html;

  const handleShowMore = (): void => setShowMore(!showMore);

  return (
    <div className={`card-notification-standard notification-type-${notificationType} rounded-0 card border-0 my-3`}>
      <SourceCard.Body>
        <SourceCard.Title className="d-flex justify-content-between font-size-base font-weight-bolder text-condensed">
          {!isFetching ? title : <Skeleton width={270} />}
          {!isFetching ? (
            isNew && <span className="text-secondary ml-5 font-size-base font-weight-bolder">NEW</span>
          ) : (
            <Skeleton width={40} />
          )}
        </SourceCard.Title>
        <SourceCard.Text className="d-flex flex-sm-row flex-wrap">
          <strong className="mr-3 font-size-sm font-weight-bolder text-uppercase text-condensed">
            {!isFetching ? dateTime : <Skeleton width={175} height={17} />}
          </strong>
          {!isFetching ? (
            categories &&
            categories.map(c => (
              <strong key={c.drupal_id} className="text-secondary font-weight-bolder font-size-sm pr-2">
                {c.title}
              </strong>
            ))
          ) : (
            <Skeleton width={75} height={15} />
          )}
        </SourceCard.Text>
        <SourceCard.Text
          className={`font-size-sm font-weight-lighter ${
            showMore ? '' : 'card-manual-notification-standard-cut-summary'
          }`}
        >
          {!isFetching ? showMore ? body_full : body_summary : <Skeleton width={300} count={3} height={15} />}
        </SourceCard.Text>
        <div className="d-flex flex-row justify-content-between justify-content-sm-start">
          {!isFetching ? (
            !isApprove && bodyFull && bodyFull.length > summaryMaxLength ? (
              <button
                type="button"
                onClick={handleShowMore}
                className="card-notification-standard-more font-size-sm mr-sm-5 font-weight-bolder border-0"
              >
                {showMore ? 'SHOW LESS' : 'SHOW MORE'}
                <span className="show-more-arrow pl-2">
                  <img
                    {...{
                      src: showMore ? images.chevronUp : images.chevronDown,
                      width: 10,
                      height: 10
                    }}
                  />
                </span>
              </button>
            ) : (
              isApprove && (
                <a href={serviceNowLink} target="_blank" className="font-size-sm mr-sm-5 font-weight-bolder">
                  <u>SHOW MORE</u>
                </a>
              )
            )
          ) : (
            <span className="mr-sm-5">
              <Skeleton width={100} height={15} />
            </span>
          )}
          {!isFetching ? (
            !(isArchive || isApprove) && (
              <button
                type="button"
                onClick={() => onArchive && onArchive(drupal_id, alert_type)}
                className="card-notification-standard-archive text-secondary font-weight-bolder border-0 font-size-sm"
              >
                <u className="letter-spacing">ARCHIVE</u>
              </button>
            )
          ) : (
            <span className="mr-sm-5">
              <Skeleton width={100} height={15} />
            </span>
          )}
          {isApprove && (
            <span className="d-flex flex-row">
              <button
                type="button"
                onClick={() => onApprove && onApprove(drupal_id)}
                className="card-notification-standard-archive mr-sm-3 mr-2 font-weight-bolder border-0 font-size-sm approve-color"
              >
                <u className="letter-spacing">APPROVE</u>
              </button>
              <button
                type="button"
                onClick={() => onReject && onReject(drupal_id)}
                className="card-notification-standard-archive   font-weight-bolder border-0 font-size-sm reject-color"
              >
                <u className="letter-spacing">REJECT</u>
              </button>
            </span>
          )}
        </div>
      </SourceCard.Body>
    </div>
  );
};
