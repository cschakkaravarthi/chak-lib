import React from 'react';

import { shallowRender } from '../services/testHelper';
import { BasicQuickToolsCard } from './quickToolsCard';

describe('QuickTools', () => {
  it('should render correctly', () => {
    const tree = shallowRender(
      <BasicQuickToolsCard
        title="Something's Broken!"
        Links={[
          {
            linkAction: p => <a href="#">{p.children}</a>,
            linkTitle: 'Create an i.t. ticket'
          }
        ]}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const tree = shallowRender(
      <BasicQuickToolsCard
        title="Self-Service Password Reset"
        Links={[
          {
            linkAction: p => <a href="#">{p.children}</a>,
            linkTitle: 'Reset Password'
          }
        ]}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const tree = shallowRender(
      <BasicQuickToolsCard
        title="Time off request"
        Links={[
          {
            linkAction: p => <a href="#">{p.children}</a>,
            linkTitle: 'Request time off'
          }
        ]}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const tree = shallowRender(
      <BasicQuickToolsCard
        title="Important Contacts"
        Links={[
          {
            linkAction: p => <a href="#">{p.children}</a>,
            linkTitle: 'Security'
          },
          {
            linkAction: p => <a href="#">{p.children}</a>,
            linkTitle: 'Facilities'
          }
        ]}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
