import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';
import { ReadMoreLinkContainer } from './readMoreLinkContainer';
import { Category } from '../interfaces';
import { CardImage } from './cardImage';
import { ThumbButton } from '../components/thumbButton';

export interface ArticleCardFeaturedProps {
  imageUrl?: string;
  title: string;
  isFetching?: boolean;
  summary?: JSX.Element | string;
  pictureSkeletonHeight?: string | number;
  date?: string;
  likes?: number;
  // @TODO: Categories should be links? So this should be an array objects with label and link.
  categories?: Category[];
  MainLink?: React.ComponentType;
  handleThumbClick?: (e: React.SyntheticEvent) => void;
  likedStatus?: boolean;
}

export const ArticleCardFeatured: FC<ArticleCardFeaturedProps> = props => {
  const {
    imageUrl,
    title,
    date,
    summary,
    categories,
    MainLink,
    likes = 0,
    handleThumbClick,
    isFetching = false,
    likedStatus = true,
    pictureSkeletonHeight = 100
  } = props;

  return (
    <SourceCard className="card-article-featured rounded-0 h-100 border-0">
      <div className="row">
        <div className="col-12 col-xl-6">
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
        </div>
        <div className="col-12 col-xl-6 align-items-center d-flex">
          <SourceCard.Body className="justify-content-between flex-column">
            <div>
              <SourceCard.Title className="my-2 font-weight-bold">
                {!isFetching ? MainLink && <MainLink>{title}</MainLink> : <Skeleton count={2} />}
              </SourceCard.Title>
              <SourceCard.Text className="font-size-sm text-uppercase mb-1 font-weight-bold text-condensed card-date">
                {!isFetching ? date : <Skeleton width={200} />}
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
              <SourceCard.Text className="mt-2 font-weight-lighter article-body">
                {!isFetching ? summary : <Skeleton count={3} width={390} />}
              </SourceCard.Text>
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
                  <Skeleton width={25} />
                )}
              </div>
            </div>
          </SourceCard.Body>
        </div>
      </div>
    </SourceCard>
  );
};
