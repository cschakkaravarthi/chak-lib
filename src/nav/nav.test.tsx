import React from 'react';

import { shallowRender } from '../services/testHelper';
import { Nav } from './nav';
import { NavOverlay } from './navOverlay';
import { NavBar, NavBarSection } from './navBar';
import { images } from '../assets/images';
import { Breadcrumb } from './breadcrumb-nav';

describe('Nav', () => {
  it('should render Breadcrumb nav', () => {
    const tree = shallowRender(
      <Breadcrumb
        onSelect={(selectedKey: string) =>
          console.log(`selected ${selectedKey}`)
        }
        items={[
          {
            key: 1,
            isActive: true,
            Link: p => (
              <a href="#" className={p.className}>
                Home
              </a>
            )
          },
          {
            key: 2,
            isActive: false,
            Link: p => (
              <a href="#" className={p.className}>
                Corporate Finance
              </a>
            )
          },
          {
            key: 3,
            isActive: false,
            Link: p => (
              <a href="#" className={p.className}>
                Finance Operations
              </a>
            )
          },
          {
            key: 4,
            isActive: false,
            Link: p => (
              <a href="#" className={p.className}>
                Local Finance Sites
              </a>
            )
          }
        ]}
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly Primary Nav', () => {
    const tree = shallowRender(
      <Nav
        items={[
          {
            key: 1,
            Link: p => (
              <a href="#" className={p.className}>
                News
              </a>
            )
          },
          {
            key: 2,
            Link: p => (
              <a href="#" className={p.className}>
                Employee Services
              </a>
            )
          },
          {
            key: 3,
            Link: p => (
              <a href="#" className={p.className}>
                People &amp; Offices
              </a>
            )
          }
        ]}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly Secondary Nav', () => {
    const tree = shallowRender(
      <Nav
        variant="secondary"
        items={[
          {
            key: 1,
            Link: p => (
              <a href="#" className={p.className}>
                JIRA
              </a>
            )
          },
          {
            key: 2,
            Link: p => (
              <a href="#" className={p.className}>
                Workday
              </a>
            )
          },
          {
            key: 3,
            Link: p => (
              <a href="#" className={p.className}>
                Replicon
              </a>
            )
          }
        ]}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly Secondary Nav Section', () => {
    const tree = shallowRender(
      <Nav
        variant="secondary"
        sectionTitle="Quick Links"
        sectionLink={p => (
          <a href="#" className={p.className}>
            Edit
          </a>
        )}
        items={[
          {
            key: 1,
            Link: p => (
              <a href="#" className={p.className}>
                JIRA
              </a>
            )
          },
          {
            key: 2,
            Link: p => (
              <a href="#" className={p.className}>
                Workday
              </a>
            )
          },
          {
            key: 3,
            Link: p => (
              <a href="#" className={p.className}>
                Replicon
              </a>
            )
          }
        ]}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly nav overlay', () => {
    const tree = shallowRender(
      <NavOverlay
        show={true}
        editMode={false}
        setShow={() => { alert('clicked'); }}
        handleAdd={() => { alert('clicked'); }}
        handleEdit={() => { alert('clicked'); }}
        navGroups={[
          {
            sectionTitle: 'Company',
            sectionIcon: images.sectionIcon1,
            variant: 'overlay',
            items: [
              {
                key: 1,
                Link: p => (
                  <a href="#" className={p.className}>
                    Mission, Vision, and Cultural Values
                  </a>
                )
              },
              {
                key: 2,
                Link: p => (
                  <a href="#" className={p.className}>
                    Culture Champion Portal
                  </a>
                )
              },
              {
                key: 3,
                Link: p => (
                  <a href="#" className={p.className}>
                    Leadership
                  </a>
                )
              }
            ]
          }
        ]}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly NavBarSection', () => {
    const tree = shallowRender(
      <NavBar variant="top">
        <NavBarSection variant="standard">
          <p>Some content in a standard section</p>
        </NavBarSection>
        <NavBarSection variant="light">
          <p>Some content in a light section</p>
        </NavBarSection>
        <NavBarSection variant="dark">
          <p>Some content in a dark section</p>
        </NavBarSection>
      </NavBar>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly navbar side', () => {
    const tree = shallowRender(
      <NavBar variant="side">
        <NavBarSection variant="standard">
          <p>Some content in a standard section</p>
        </NavBarSection>
        <NavBarSection variant="light">
          <p>Some content in a light section</p>
        </NavBarSection>
        <NavBarSection variant="dark">
          <p>Some content in a dark section</p>
        </NavBarSection>
      </NavBar>
    );
    expect(tree).toMatchSnapshot();
  });
});
