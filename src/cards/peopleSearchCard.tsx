import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { ReadMoreLinkContainer } from './readMoreLinkContainer';
import Image from 'react-bootstrap/Image';
import { ButtonWithIcon } from '../components/buttonWithIcon';
import Skeleton from 'react-loading-skeleton';
import { highlight } from './cardHelper';

export interface PeopleSearchCardProps {
  title: string;
  mail?: string;
  imageUrl?: string;
  designation?: string;
  companyName?: string;
  phoneNumber?: string;
  isFetching?: boolean;
  workLocation?: string;
  searchKeyword?: string;
  isCurrentUser?: boolean;
  circleSkeleton?: boolean;
  addToContactIcon?: string;
  MailLink?: React.ComponentType;
  ZoomLink?: React.ComponentType;
  MainLink?: React.ComponentType;
  PhoneLink?: React.ComponentType;
  handleAddToContacts?: (e: React.SyntheticEvent) => void;
}

export const PeopleSearchCard: FC<PeopleSearchCardProps> = props => {
  const {
    mail,
    title,
    imageUrl,
    MailLink,
    PhoneLink,
    MainLink,
    isFetching,
    companyName,
    designation,
    phoneNumber,
    workLocation,
    isCurrentUser,
    addToContactIcon,
    searchKeyword = '',
    handleAddToContacts,
    circleSkeleton = true
  } = props;

  return (
    <SourceCard className="card-people-search-default rounded-0 h-100 p-3 border-0">
      <div className="row mr-0 ml-0">
        <div className="col-12 col-xl-2 pt-2 pr-0 pl-2 pb-0 people-badge text-xs-left text-sm-left text-lg-left text-xl-center">
          {!isFetching ? (
            imageUrl &&
            MainLink && (
              <MainLink>
                <Image src={imageUrl} roundedCircle className="order-xl-1" />
              </MainLink>
            )
          ) : (
            <span className={`${circleSkeleton && 'circle-skeleton'}`}>
              <Skeleton circle={true} height={50} width={50} />
            </span>
          )}
        </div>
        <div className="col-12 col-xl-10 p-0 text-break align-items-center d-flex">
          <SourceCard.Body className="justify-content-between flex-column pt-0 pl-2 pr-2 pb-2 g700-text-clr">
            <div>
              <SourceCard.Text className="mt-2 mb-0 text-condensed font-size-20">
                {!isFetching ? (
                  MainLink && <MainLink>{highlight(title, searchKeyword)}</MainLink>
                ) : (
                  <Skeleton width={190} />
                )}
              </SourceCard.Text>
              <SourceCard.Text className="mb-0 font-size-sm">
                {!isFetching ? designation : <Skeleton width={100} />}
              </SourceCard.Text>
              <SourceCard.Text className="mb-0 font-size-sm">
                {!isFetching ? companyName : <Skeleton width={120} />}
              </SourceCard.Text>
              <SourceCard.Text className="font-size-sm">
                {!isFetching ? workLocation : <Skeleton width={140} />}
              </SourceCard.Text>
              <SourceCard.Text className="mb-0 font-size-sm">
                {!isFetching && MailLink ? (
                  <MailLink>
                    <u>{!isFetching ? mail : <Skeleton width={160} />}</u>
                  </MailLink>
                ) : (
                  <Skeleton width={165} />
                )}
              </SourceCard.Text>
              <SourceCard.Text className="mb-0 font-size-sm">
                {PhoneLink && (
                  <PhoneLink>
                    <u>{!isFetching ? phoneNumber : <Skeleton width={110} />}</u>
                  </PhoneLink>
                )}
              </SourceCard.Text>
              {/*  As per the ticket UC2-548 this field commented
              {ZoomLink && (
                <SourceCard.Text className='mt-2 font-size-sm mb-2'>
                  <ZoomLink>
                    <u>Contact me on Zoom</u>
                  </ZoomLink>
                </SourceCard.Text>
              )} */}
              <div className="mt-3">
                {!isCurrentUser &&
                  (!isFetching ? (
                    <ButtonWithIcon
                      imageWidth={20}
                      imageHeight={20}
                      title="Add to My Contacts"
                      imageSrc={addToContactIcon}
                      handleClick={handleAddToContacts}
                    />
                  ) : (
                    <Skeleton width={135} />
                  ))}
              </div>
            </div>
            {!isFetching ? (
              <div className="mt-3">
                {MainLink ? (
                  <ReadMoreLinkContainer>
                    <MainLink>
                      <u className="text-uppercase letter-spacing">View More</u>
                    </MainLink>
                  </ReadMoreLinkContainer>
                ) : (
                  <Skeleton />
                )}
              </div>
            ) : (
              <Skeleton width={100} />
            )}
          </SourceCard.Body>
        </div>
      </div>
    </SourceCard>
  );
};
