import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { ReadMoreLinkContainer } from './readMoreLinkContainer';
import { Category } from '../interfaces';
import { CardImage } from './cardImage';
import { ThumbButton } from '../components/thumbButton';
import classnames from 'classnames';
import Skeleton from 'react-loading-skeleton';

export interface ArticleCardProps {
  imageUrl?: string;
  title: string;
  date?: string;
  isFetching?: boolean;
  pictureSkeletonHeight?: string | number;
  fullHeight?: boolean;
  className?: string;
  categories?: Category[];
  likes?: number;
  MainLink?: React.ComponentType;
  handleThumbClick?: (e: React.SyntheticEvent) => void;
  likedStatus?: boolean;
}

export const ArticleCard: FC<ArticleCardProps> = props => {
  const {
    imageUrl,
    title,
    date,
    isFetching = false,
    categories,
    MainLink = null,
    likes = 0,
    handleThumbClick,
    likedStatus = true,
    fullHeight = true,
    className = '',
    pictureSkeletonHeight = 100
  } = props;

  return (
    <SourceCard
      className={`${className} ${classnames('card-article-standard', 'rounded-0', 'border-0', {
        'h-100': fullHeight
      })}`}
    >
      {!isFetching ? (
        imageUrl &&
        MainLink && (
          <MainLink>
            <CardImage imageUrl={imageUrl} />
          </MainLink>
        )
      ) : (
        <Skeleton height={pictureSkeletonHeight} />
      )}
      <SourceCard.Body className="d-flex justify-content-between flex-column">
        <div>
          <SourceCard.Title className="my-2 font-weight-bold font-size-base text-condensed">
            {!isFetching ? MainLink && <MainLink>{title}</MainLink> : <Skeleton count={2} />}
          </SourceCard.Title>
          <SourceCard.Text className="font-size-sm text-uppercase mb-1 font-weight-bold text-condensed">
            {!isFetching ? date : <Skeleton width={100} />}
          </SourceCard.Text>
          {!isFetching ? (
            categories &&
            categories.map(c => (
              <SourceCard.Text
                className="font-size-sm gray-600 pr-3 d-inline font-weight-bold text-upper"
                key={c.drupal_id}
              >
                {c.title}
              </SourceCard.Text>
            ))
          ) : (
            <Skeleton width={150} />
          )}
        </div>
        <div>
          {!isFetching ? (
            MainLink && (
              <ReadMoreLinkContainer>
                <MainLink>
                  <u className="letter-spacing">Read More</u>
                </MainLink>
              </ReadMoreLinkContainer>
            )
          ) : (
            <Skeleton width={100} />
          )}
          <div className="d-flex">
            {!isFetching ? (
              <ThumbButton liked={likedStatus} numberOfLikes={likes} handleClick={handleThumbClick} />
            ) : (
              <Skeleton width={20} />
            )}
          </div>
        </div>
      </SourceCard.Body>
    </SourceCard>
  );
};
