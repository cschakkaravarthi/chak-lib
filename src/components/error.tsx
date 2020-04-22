import React, { FC } from 'react';
import Image from 'react-bootstrap/Image';

export interface ErrorProps {
  backgroundImage?: string;
  title: string;
  message?: string;
  isShowBrowsers: boolean;
  chromeImage?: string;
  safariImage?: string;
  edgeImage?: string;
  urlLink?: string;
  urlText?: string;
}

export const Error: FC<ErrorProps> = props => {
  const {
    backgroundImage,
    title,
    message,
    isShowBrowsers,
    chromeImage,
    safariImage,
    edgeImage,
    urlLink,
    urlText
  } = props;

  return (
    <div className="text-center mt-5">
      <Image width={150} height={115} src={backgroundImage} />
      <p className="mt-5 gray-600 font-weight-bold font-size-title">{title}</p>
      <p className="font-size-base m-auto align-text-center">{message}</p>
      { isShowBrowsers
        ? <div className="mt-5 d-flex justify-content-center">
          <div className="mr-5">
            <Image width={50} height={50} src={chromeImage} />
            <a href="#" className="d-block font-size-sm text-decoration-underline">Google Chrome</a>
          </div>
          <div className="mr-5">
            <Image width={50} height={50} src={safariImage} />
            <a href="#" className="d-block font-size-sm text-decoration-underline">Apple Safari</a>
          </div>
          <div>
            <Image width={50} height={50} src={edgeImage} />
            <a href="#" className="d-block font-size-sm text-decoration-underline">Microsoft Edge</a>
          </div>
        </div>
        : null}
      {urlLink && urlText &&
        <div className="mt-5 d-flex justify-content-center">
          <a href={urlLink} className="text-upper gray-700 font-size-sm">
            <u className="letter-spacing">{urlText}</u>
          </a>
        </div>
      }
    </div>
  );
};
