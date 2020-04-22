import React, { FC } from 'react';
import { Nav as BreadcrumbNav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { NavItem, BreadcrumbProps } from './interfaces';

import '../../scss/_nav.scss';

export const Breadcrumb: FC<BreadcrumbProps> = props => {
  const { items, className, onSelect } = props;

  return (
    <BreadcrumbNav
      onSelect={onSelect}
      bsPrefix={`nav breadcrumb-nav d-flex align-items-center bg-white ${className}`}
    >
      <Container>
        <Row>
          {items.map((item: NavItem) => (
            <BreadcrumbNav.Item
              bsPrefix="nav-item border-right font-weight-bold"
              key={item.key}
            >
              <item.Link className={`py-1 px-4 ${item.isActive ? 'active' : ''}`} />
            </BreadcrumbNav.Item>
          ))}
        </Row>
      </Container>
    </BreadcrumbNav>
  );
};
