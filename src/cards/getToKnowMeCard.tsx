import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { EditButton } from '../components/editButton';
import { GetToKnowMeCardProps } from '../interfaces';
import { ContentWrapper } from '../components/contentWrapper';
import Skeleton from 'react-loading-skeleton';

export const GetToKnowMeCard: FC<GetToKnowMeCardProps> = props => {
  const {
    title,
    aboutMe,
    nickname,
    birthDay,
    birthMonth,
    handleClick,
    isCurrentUser,
    anniversaryDay,
    editButtonLink,
    languagesSpoken,
    anniversaryMonth,
    currentlyWorking,
    professionalSkills,
    isFetching = false
  } = props;

  return (
    <ContentWrapper
      title=""
      showContentTop={false}
      topBorder="darkTurquoise"
      wrapperClass="card-user-description fix-height flex-row text-condensed h-100"
    >
      <SourceCard.Body className="justify-content-between card-people-description">
        <div className="d-flex justify-content-between">
          <SourceCard.Title className="text-upper mb-4">
            {!isFetching ? title : <Skeleton width={100} />}
          </SourceCard.Title>
          {!isFetching ? (
            isCurrentUser &&
            handleClick && (
              <EditButton handleClick={handleClick} title="Edit" hrefLink={editButtonLink} className="cursor-pointer" />
            )
          ) : (
            <Skeleton width={50} />
          )}
        </div>
        <SourceCard.Text className="font-size-sm">
          <div className="mb-2">
            <span className="text-condensed font-weight-bold pr-2">
              {!isFetching ? 'Nickname:' : <Skeleton width={90} />}
            </span>
            <span className="font-size-md">{!isFetching ? nickname : <Skeleton width={100} />}</span>
          </div>
          <div className="mb-2">
            <span className="text-condensed font-weight-bold pr-2">
              {!isFetching ? 'Birthday:' : <Skeleton width={80} />}
            </span>
            <span className="font-size-md">{!isFetching ? birthMonth + ' ' + birthDay : <Skeleton width={80} />}</span>
          </div>
          <div className="mb-2">
            <span className="text-condensed font-weight-bold pr-2">
              {!isFetching ? 'Work Anniversary:' : <Skeleton width={95} />}
            </span>
            <span className="font-size-md">
              {!isFetching ? anniversaryMonth + ' ' + anniversaryDay : <Skeleton width={80} />}
            </span>
          </div>
          <div className="mb-4">
            <span className="text-condensed font-weight-bold pr-2">
              {!isFetching ? 'Languages Spoken:' : <Skeleton width={105} />}
            </span>
            <span className="font-size-md">{!isFetching ? languagesSpoken : <Skeleton width={115} />}</span>
          </div>
          <div>
            <div className="text-condensed font-weight-bold mb-2">
              {!isFetching ? 'Professional Skills:' : <Skeleton width={110} />}
            </div>
            <p className="font-size-sm">{!isFetching ? professionalSkills : <Skeleton width={110} count={4} />}</p>
          </div>
          <div>
            <p className="text-condensed font-weight-bold mb-2">
              {!isFetching ? `What I'm currently working on:` : <Skeleton width={140} />}
            </p>
            <p className="font-size-sm">{!isFetching ? currentlyWorking : <Skeleton width={105} count={4} />}</p>
          </div>
          <div>
            <p className="text-condensed font-weight-bold mb-2">
              {!isFetching ? `Something about me:` : <Skeleton width={140} />}
            </p>
            <p className="font-size-sm">{!isFetching ? aboutMe : <Skeleton width={105} count={4} />}</p>
          </div>
        </SourceCard.Text>
      </SourceCard.Body>
    </ContentWrapper>
  );
};
