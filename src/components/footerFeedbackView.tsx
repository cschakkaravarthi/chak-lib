import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { UIButtonProps } from '../interfaces';

export const FooterFeedbackView: FC<UIButtonProps> = props => {
  return (
    <div className="footer-container w-100 text-sm-right text-center d-flex flex-column justify-content-center">
      <Container>
        <a
          href={props.hrefLink}
          className="d-sm-inline order-xl-2 btn-secondary btn-feedback font-weight-bold text-uppercase letter-spacing-01rem"
        >
          {props.title}
        </a>
      </Container>
    </div>
  );
};
