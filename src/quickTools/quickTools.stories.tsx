import React from 'react';
import StoriesContainer from '../StoriesContainer';
import { BasicQuickToolsCard } from './quickToolsCard';

export default {
  component: BasicQuickToolsCard,
  title: 'Quick Tools'
};

export const somethingsBroken = (): JSX.Element => (
  <StoriesContainer>
    <BasicQuickToolsCard
      isFetching={false}
      title="Something's Broken!"
      Links={[
        {
          linkAction: p => <a href="#">{p.children}</a>,
          linkTitle: 'Create an i.t. ticket'
        }
      ]}
    />
  </StoriesContainer>
);

export const passwordReset = (): JSX.Element => (
  <StoriesContainer>
    <BasicQuickToolsCard
      isFetching={false}
      title="Self-Service Password Reset"
      Links={[
        {
          linkAction: p => <a href="#">{p.children}</a>,
          linkTitle: 'Reset Password'
        }
      ]}
    />
  </StoriesContainer>
);

export const timeOffRequest = (): JSX.Element => (
  <StoriesContainer>
    <BasicQuickToolsCard
      isFetching={false}
      title="Time off request"
      Links={[
        {
          linkAction: p => <a href="#">{p.children}</a>,
          linkTitle: 'Request time off'
        }
      ]}
    />
  </StoriesContainer>
);

export const importantContacts = (): JSX.Element => (
  <StoriesContainer>
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
  </StoriesContainer>
);
