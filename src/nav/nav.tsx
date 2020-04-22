import React, { FC } from 'react';
import { NavItem, NavProps } from './interfaces';
import { Nav as SourceNav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import '../../scss/_nav.scss';

export const Nav: FC<NavProps> = props => {
  const { variant = 'primary' } = props;
  return (
    <SourceNav className={`nav-${variant} ${props.className}`} key={props.key}>
      {props.sectionTitle && (
        <div className="nav-section-title pt-0 font-weight-bold">
          {props.sectionIcon && (
            <Image
              className="pr-2 black d-inline all-links-overlay-icon"
              src={props.sectionIcon}
            />
          )}
          <span className="w-75">{props.sectionTitle}</span>
          {props.editLink && (
            <div className="d-inline w-25 float-right text-right">
              <props.editLink />
            </div>
          )}
        </div>
      )}
      {props.sectionLink && (
        <div className="nav-section-link">
          <props.sectionLink />
        </div>
      )}
      <ul className="list-unstyled mb-0">
        {props.items.map((item: NavItem) => (
          <li key={item.key}>
            <item.Link />
          </li>
        ))}
      </ul>
    </SourceNav>
  );
};
