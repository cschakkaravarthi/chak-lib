import React from 'react';
import StoriesContainer from '../StoriesContainer';

import { Nav } from './nav';
import { NavOverlay } from './navOverlay';
import { NavBar, NavBarSection } from './navBar';
import { Breadcrumb } from './breadcrumb-nav';
import { SubMenu } from './SubMenu';
import { images } from '../assets/images';
import { EditButton } from '../components/editButton';

export default {
  component: Nav,
  title: 'Navigation'
};

export const breadcrumbNav = (): JSX.Element => (
  <StoriesContainer>
    <Breadcrumb
      onSelect={(selectedKey: string) => console.log(`selected ${selectedKey}`)}
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
  </StoriesContainer>
);

export const SubMenuNav = (): JSX.Element => (
  <StoriesContainer>
    <SubMenu
      onSelect={(selectedKey: string) => console.log(`selected ${selectedKey}`)}
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
  </StoriesContainer>
);

export const primaryNav = (): JSX.Element => (
  <StoriesContainer>
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
  </StoriesContainer>
);

export const secondaryNav = (): JSX.Element => (
  <StoriesContainer>
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
  </StoriesContainer>
);

export const navSection = (): JSX.Element => (
  <StoriesContainer>
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
  </StoriesContainer>
);

export const navOverlay = (): JSX.Element => (
  <StoriesContainer>
    <NavOverlay
      show={true}
      editMode={true}
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
        },
        {
          sectionTitle: 'Featured Links',
          sectionIcon: images.sectionIcon2,
          variant: 'overlay',
          items: [
            {
              key: 4,
              Link: p => (
                <a href="#" className={p.className}>
                  CO-LAB
                </a>
              )
            },
            {
              key: 5,
              Link: p => (
                <a href="#" className={p.className}>
                  CO-LAB
                </a>
              )
            },
            {
              key: 6,
              Link: p => (
                <a href="#" className={p.className}>
                  CO-LAB
                </a>
              )
            },
            {
              key: 7,
              Link: p => (
                <a href="#" className={p.className}>
                  CO-LAB
                </a>
              )
            },
            {
              key: 8,
              Link: p => (
                <a href="#" className={p.className}>
                  CO-LAB
                </a>
              )
            },
            {
              key: 9,
              Link: p => (
                <a href="#" className={p.className}>
                  CO-LAB
                </a>
              )
            },
            {
              key: 10,
              Link: p => (
                <a href="#" className={p.className}>
                  Retirement Services
                </a>
              )
            },
            {
              key: 11,
              Link: p => (
                <a href="#" className={p.className}>
                  Brand Central
                </a>
              )
            }
          ]
        },
        {
          sectionTitle: 'Company',
          sectionIcon: images.sectionIcon3,
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
  </StoriesContainer>
);

export const navBarTop = (): JSX.Element => (
  <StoriesContainer>
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
  </StoriesContainer>
);

export const navBarSide = (): JSX.Element => (
  <StoriesContainer>
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
  </StoriesContainer>
);

export const otherNav = (): JSX.Element => (
  <StoriesContainer>
    <Nav
      variant="secondary"
      sectionTitle="My Links"
      className="text-uppercase font-size-sm"
      editLink={() => (
        <EditButton handleClick={() => { alert('clicked'); }} title="Edit"></EditButton>
      )}
      items={[]}
    />
  </StoriesContainer>
);
