# UMG Central UI Library
A visual library for our internal projects

## Roadmap

- Unit Tests
- Linting (especially scss)
- Hosting of storybook-static
- Improve integration with react-bootstrap (less custom)
- Don't force client to install storybooks´

## Publishing

Before running `npm publish` you need to login to the registry.

```
npm config set registry https://artifactory.umusic.net/artifactory/api/npm/umg-npm/
npm login
```
Then increment the version number in `package.json`.

Then you need to do a build:

```
npm run build
```

And THEN you can run `npm publish`

## Release Procedure

- Consider if now might be a good time to update all third party libraries
- Pull latest develop
- Create release branch (git flow release start VERSION)
- Update Changelog
- Bump version number in package.json
- Install, Build and Publish
- Commit changes, and push release branch
- finish release branch (git flow release finish VERSION)
- Push master with tags (git push && git push --tags)
- Push develop with tags (git push && git push --tags)
