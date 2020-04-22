# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- System and Applications card [UC2-592](https://build.umusic.com/jira/browse/UC2-592) '[MINOR]'
- **Skeletons** Added skeletons for departments, events, articles, my contacts, profile components in general [UC2-403](https://build.umusic.com/jira/browse/UC2-403) '[MINOR]'

### Changed
- Use `col-4` instead of `col-5` [UC2-794](https://build.umusic.com/jira/browse/UC2-794)'[MINOR]'

## [1.4.1]

### Changed
- Changed the anchors of the org chart and set buttons instead. [UC2-824](https://build.umusic.com/jira/browse/UC2-824) '[MINOR]'

## [1.4.0]

### Added
- Adds new component: GenericAutoSuggest [UC2-560](https://build.umusic.com/jira/browse/UC2-560) '[MINOR]'
- Adds skeletons for profile page [UC2-732](https://build.umusic.com/jira/browse/UC2-732) '[MINOR]'


## [1.3.0]

### Changed
- Exports more necessary components '[MINOR]'
- Add class `text-condensed` to `.card-title`, also, can we change the thumbnail image to be `col-4` instead of `col-5 [UC2-794](https://build.umusic.com/jira/browse/UC2-794)'[MINOR]'

## Added
- Adds Appreciation card thumbnail component [UC2-560](https://build.umusic.com/jira/browse/UC2-560) '[MINOR]'
- Dont let navigation item to oveflow  [UC2-659](https://build.umusic.com/jira/browse/UC2-659) '[MINOR]'
- Added UI Components for sub-menus on Department and Label pages [UC2-747](https://build.umusic.com/jira/browse/UC2-747) '[MINOR]'
- Added skeletons to quick tools, articles and events [UC2-403](https://build.umusic.com/jira/browse/UC2-403) '[MINOR]'

## [1.2.0]

### Changed

- Added Hamburger icon to "X" when menu is open On Mobile and Tablet.[UC2-538](https://build.umusic.com/jira/browse/UC2-538) '[MINOR]'
- Used proper icon for All links Button
- Change "name" to "title" everywhere. Breaking change. `[MAJOR]`
  — **General:** Switch to content wrapper. [UC2-552](https://build.umusic.com/jira/browse/UC2-552) `[MINOR]`
- Added X icon to clear search and used proper icon to search icon. [UC2-583](https://build.umusic.com/jira/browse/UC2-583) [MINOR]
- **Card Map** Added encode function to the map to escape some special characters.

## [1.0.0]

### Added

- Components for appreciation cards [UC2-559](https://build.umusic.com/jira/browse/UC2-559)
- Added Add to my contacts button component and in people search card, added toast component [UC2-510](https://build.umusic.com/jira/browse/UC2-510) `[Major]`
- Added error ui components [UC2-534](https://build.umusic.com/jira/browse/UC2-534)
- Added individual office ui components [UC2-331](https://build.umusic.com/jira/browse/UC2-331)
- Added People Card, Contact Me Card and Get to know me Card [UC2-410](https://build.umusic.com/jira/browse/UC2-410) `[Major]`
- Added Quick Tool Cards, namely Something's Broken, Self-service password reset, time off request and important contacts [UC2-188](https://build.umusic.com/jira/browse/UC2-188) `[Major]`
- Added ThumbButton for like/unlike. [UC2-452](https://build.umusic.com/jira/browse/UC2-452) `[Major]`
- Expand Button. [UC2-396](https://build.umusic.com/jira/browse/UC2-396) `[MAJOR]`
- Initial Setup. [UC2-143](https://build.umusic.com/jira/browse/UC2-143)
- My contacts card and confirmation modal for user profile page -[UC2-430](https://build.umusic.com/jira/browse/UC2-430) `[MINOR]`
- Notification List Added. [UC2-114](https://build.umusic.com/jira/browse/UC2-114) `[MINOR]`
- Office Directory Ui Card [UC2-327](https://build.umusic.com/jira/browse/UC2-327)
- Org Chart. [UC2-396](https://build.umusic.com/jira/browse/UC2-396) `[MAJOR]`
- Resources component, media for section and subsection. Minisite menu. Minimal card -[UC2-384](https://build.umusic.com/jira/browse/UC2-384)
- POC Skeleton for people search card in search results -[UC2-402]  (https://build.umusic.com/jira/browse/UC2-402) [MAJOR]

### Changed

- Added CancelButton component.
- Added card's links documents departments offices pages for search [UC2-470](https://build.umusic.com/jira/browse/UC2-470) '[MAJOR]'
- Added card's tech Catalog and Knowledge base for search [UC2-492](https://build.umusic.com/jira/browse/UC2-492) '[MAJOR]'
- Added ContactMeForm component that should be applied in "User Settings" edit interface.
- Added UploadButton component.
- Altered PrimaryButton component to override className property.
- Fixed height for get to know me and added scroll [UC2-387](https://build.umusic.com/jira/browse/UC2-387) `[MINOR]`
- Modifications styles [UC2-423](https://build.umusic.com/jira/browse/UC2-423) '[MAJOR]'
- Updated org chart component with click events to change url as /profile?upn=example@umusic.com. [UC2-396](https://build.umusic.com/jira/browse/UC2-396) `[MINOR]`

[unreleased]: https://github.com/umg/umgc_ui_library/compare/1.2.0...develop
[1.2.0]: https://github.com/umg/umgc_ui_library/compare/1.0.0...1.2.0
[1.0.0]: https://github.com/umg/umgc_ui_library/releases/tag/1.0.0
